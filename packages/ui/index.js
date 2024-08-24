#!/usr/bin/env node

const { Command } = require('commander');
const { Octokit } = require('octokit');
const chalk = require('chalk');
const pkgs = require('./pkg');
const fs = require('fs');
const util = require('util');
const glob = require('glob');
const inquirer = require('inquirer');
const config = {
	github_token: '###########################################',
	comps_repo: 'ui',
	comps_path: 'apps/www/src/ui-components',
};

const exec = util.promisify(require('child_process').exec);

const kit = new Octokit({ auth: config.github_token });
const program = new Command();

const getFileContent = (path, repo) =>
	kit.rest.repos.getContent({
		owner: 'colidycom',
		repo: repo || 'ui-cli-config',
		path,
	});

const error = msg => console.log(chalk.red.bold('✖') + ' '.repeat(2) + msg);
const success = msg => console.log(chalk.green.bold('✔') + ' '.repeat(2) + msg);
const utf8 = base64 => Buffer.from(base64, 'base64').toString();

const folderName = 'colidy-ui';
const configName = 'colidy.config.json';

const checkConfig = () => {
	if (!fs.existsSync(configName))
		fs.writeFileSync(configName, JSON.stringify({}), 'utf8');
};

const getConfig = async () => {
	checkConfig();
	const config = JSON.parse(fs.readFileSync(configName, 'utf8'));
	return config;
};

const configGet = key => {
	checkConfig();
	const config = JSON.parse(fs.readFileSync(configName, 'utf8'));
	if (!config[key]) return null;
	return config[key];
};

const configUpdate = (key, value) => {
	checkConfig();
	const config = JSON.parse(fs.readFileSync(configName, 'utf8'));
	config[key] = value;
	fs.writeFileSync(configName, JSON.stringify(config, null, 4), 'utf8');
};

const installDependency = async (name, version, packageJson) => {
	const dependency = name + '@' + version || 'latest';
	let pkg_json = packageJson || {};

	if (!packageJson) {
		try {
			pkg_json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
		} catch {
			return error(
				'Failed to parse the ' + chalk.white('package.json') + ' file.'
			);
		}
	}

	try {
		if (!pkg_json?.dependencies?.[dependency]) {
			console.log(
				'Installing ' + chalk.white.bold(dependency) + ' package...'
			);
			const { stderr } = await exec(
				'npm i ' + dependency + ' --legacy-peer-deps'
			);
			if (stderr)
				return error(
					'Failed to install ' +
						chalk.white.bold(dependency) +
						' package.'
				);
			success('Installed ' + chalk.white.bold(dependency) + ' package.');
		} else {
			success('Skipped ' + chalk.white.bold(dependency) + ' package.');
		}
	} catch (err) {
		return error(
			'Failed to install ' + chalk.white.bold(dependency) + ' package.'
		);
	}
};
const installComp = async (comp, startDir, noLog = false) => {
	const list = await getFileContent(
		config.comps_path,
		config.comps_repo
	).catch(() => false);
	if (!Array.isArray(list?.data))
		return noLog ? null : error('Failed to fetch the components list.');
	let component = list.data.find(
		c => c.name.split('.')[0].toLowerCase() === comp.toLowerCase()
	);
	if (!component)
		return noLog
			? null
			: error('Component ' + chalk.white.bold(comp) + ' does not exist.');
	component = component.name.split('.')[0];

	console.log('Installing ' + chalk.blue.bold(component) + ' component...');
	if (comp === 'all' || comp === '*') {
		let installed = 0;
		const install = async () => {
			if (installed > 0 && !noLog) console.log('');
			await installComp(
				list.data[installed].name.split('.')[0],
				startDir
			);
			installed++;
			if (installed < list.data.length) {
				await install();
			} else {
				if (!noLog) console.log('');
				return noLog ? null : success('Installed all components.');
			}
		};

		return install();
	}

	let pkg_json = {};
	let down = 1;

	try {
		pkg_json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
	} catch {
		return noLog
			? null
			: error(
					'Failed to parse the ' +
						chalk.white('package.json') +
						' file.'
			  );
	}

	if (component.charAt(0) === component.charAt(0).toLowerCase())
		return noLog
			? null
			: error('Component name must start with an uppercase letter.');
	if (component.replace(/[a-zA-Z0-9-_]/gi, '').length > 0)
		return noLog
			? null
			: error(
					'Component name must contain only letters, numbers, and hyphens.'
			  );

	const compContent = await getFileContent(
		config.comps_path + '/' + component + '.tsx',
		config.comps_repo
	).catch(() => false);
	if (!compContent)
		return noLog
			? null
			: error(
					'Component ' +
						chalk.white.bold(component) +
						' does not exist.'
			  );

	if (!fs.existsSync(startDir + 'components'))
		fs.mkdirSync(startDir + 'components');
	if (!fs.existsSync(startDir + 'components/' + folderName))
		fs.mkdirSync(startDir + 'components/' + folderName);
	if (
		fs.existsSync(
			startDir + 'components/' + folderName + '/' + component + '.tsx'
		)
	)
		return noLog
			? null
			: error(
					'Component ' +
						chalk.white.bold(component) +
						' already exists.'
			  );

	const dependencies = pkgs(utf8(compContent.data.content));
	if (!noLog)
		success(
			'Fetched the component ' +
				chalk.blue.bold(component) +
				'.' +
				(dependencies.packages.length > 0
					? '\n   Downloading ' +
					  dependencies.packages.length +
					  ' dependencies...'
					: '')
		);

	fs.writeFileSync(
		startDir + 'components/' + folderName + '/' + component + '.tsx',
		utf8(compContent.data.content),
		'utf8'
	);

	let installed = 0;
	for (const p of dependencies.externalPackages) {
		if (pkg_json?.dependencies?.[p.name]) {
			if (!noLog)
				success(
					'Skipped ' +
						chalk.white.bold(p.name) +
						' package. (' +
						down +
						'/' +
						dependencies.packages.length +
						')'
				);
			installed++;
			continue;
		}

		await installDependency(p.name, 'latest', pkg_json);
		installed++;
	}

	if (installed >= dependencies.externalPackages.length) {
		success('Installed all required dependencies.');
		installed = 0;
		for (const p of dependencies.colidyPackages) {
			if (
				fs.existsSync(
					startDir +
						'components/' +
						folderName +
						'/' +
						p.native.replace(/(\/|\.)/g, '') +
						'.tsx'
				)
			) {
				success(
					'Skipped ' +
						chalk.white.bold(p.native.replace(/(\/|\.)/g, '')) +
						' component. (' +
						down +
						'/' +
						dependencies.packages.length +
						')'
				);
				installed++;
				continue;
			}

			const res = await installComp(
				p.native.replace(/(\/|\.)/g, ''),
				startDir,
				true
			);
			if (res !== true)
				noLog
					? null
					: error(
							'Failed to install ' +
								chalk.white.bold(
									p.native.replace(/(\/|\.)/g, '')
								) +
								' component.'
					  );
			else
				noLog
					? null
					: success(
							'Installed ' +
								chalk.white.bold(
									p.native.replace(/(\/|\.)/g, '')
								) +
								' component. (' +
								down +
								'/' +
								dependencies.packages.length +
								')'
					  );
			installed++;
		}

		if (!noLog)
			success('Installed ' + chalk.blue.bold(component) + ' component.');
	} else
		error(
			'Failed to install ' + chalk.blue.bold(component) + ' component.'
		);

	return true;
};

program
	.name('colidyui')
	.description(
		`A ${chalk.white.bold(
			'CLI'
		)} with helper commands for ${chalk.blue.bold.underline('ColidyUI')}`
	)
	.version('1.0.0');

program
	.command('init')
	.description(
		`Init ${chalk.blue.bold('ColidyUI')} inside the ${chalk.white.bold(
			'Next.js'
		)} project`
	)
	.action(async () => {
		if (!fs.existsSync('tailwind.config.ts'))
			return error(
				chalk.white('tailwind.config.ts') + ' file does not exist.'
			);
		if (!fs.existsSync('tsconfig.json'))
			return error(
				chalk.white('tsconfig.json') + ' file does not exist.'
			);

		const cssPaths = glob.sync('**/globals.css');
		if (cssPaths.length === 0)
			return error(chalk.white('globals.css') + ' file does not exist.');
		const cssPath = cssPaths[0];

		if (!fs.existsSync('package.json'))
			return error(chalk.white('package.json') + ' file does not exist.');
		let pkg_json = {};
		try {
			pkg_json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
		} catch {
			return error(
				'Failed to parse the ' + chalk.white('package.json') + ' file.'
			);
		}

		success('All required files exist.');

		const files = await Promise.all([
			getFileContent('tailwind.config.ts'),
			getFileContent('tsconfig.json'),
			getFileContent('global.css'),
		]);

		if (files.some(o => o.status !== 200))
			return error('Failed to fetch the required files.');
		success('Fetched the required files.');

		await installDependency('@colidy/ui-utils', 'latest');
		try {
			const tsConfig = JSON.parse(
				fs.readFileSync('tsconfig.json', 'utf8')
			);
			const fetchedConfig = JSON.parse(utf8(files[1].data.content));

			if (!tsConfig.compilerOptions) tsConfig.compilerOptions = {};
			if (!tsConfig.compilerOptions.paths)
				tsConfig.compilerOptions.paths = {};

			tsConfig.compilerOptions.paths = {
				...tsConfig.compilerOptions.paths,
				...fetchedConfig.compilerOptions.paths,
			};

			const globalCss = fs.readFileSync(cssPath, 'utf8');
			const fetchedCss = utf8(files[2].data.content);
			const newCss =
				fetchedCss +
				'\n\n' +
				globalCss
					.split('\n')
					.filter(line => !line.startsWith('@tailwind'))
					.join('\n');

			fs.writeFileSync(
				'tsconfig.json',
				JSON.stringify(tsConfig, null, 4),
				'utf8'
			);
			fs.writeFileSync(
				'tailwind.config.ts',
				utf8(files[0].data.content),
				'utf8'
			);
			fs.writeFileSync(cssPath, newCss, 'utf8');

			success(
				'Initialized ' +
					chalk.blue.bold('ColidyUI') +
					' inside the ' +
					chalk.white.bold('Next.js') +
					' project.'
			);
		} catch {
			return error(
				'Failed to parse the ' + chalk.white('tsconfig.json') + ' file.'
			);
		}
	});

program
	.command('install')
	.alias('i')
	.argument('[component]', 'Component name')
	.description(`Install a ${chalk.blue.bold('ColidyUI')} component`)
	.action(async comp => {
		const prompt = inquirer.createPromptModule();
		const colidyConfig = await getConfig();
		if (!colidyConfig?.dir) {
			await prompt([
				{
					type: 'input',
					name: 'startDir',
					message:
						'Enter the directory where the components is located:',
					default: fs.existsSync('src') ? './src/' : './',
					required: true,
				},
			])
				.then(async answers => {
					configUpdate('dir', answers.startDir);
				})
				.catch(() => false);
		}

		if (!comp) {
			const list = await getFileContent(
				config.comps_path,
				config.comps_repo
			).catch(() => false);
			if (!Array.isArray(list?.data))
				return error('Failed to fetch the components list.');
			const choices = list.data
				.map(c => c.name.split('.')[0])
				.filter(
					c =>
						!fs.existsSync(
							configGet('dir') +
								'components/' +
								folderName +
								'/' +
								c +
								'.tsx'
						)
				)
				.sort((a, b) => a.localeCompare(b));

			const answers = await prompt([
				{
					type: 'checkbox',
					name: 'component',
					message: 'Select a component to install:',
					choices,
					required: true,
				},
			]).catch(() => false);

			comp = answers.component.join(',');
		}

		if (!comp) return error('No component selected.');

		const startDir = configGet('dir');
		if (comp === '*') {
			const list = await getFileContent(
				config.comps_path,
				config.comps_repo
			).catch(() => false);
			if (!Array.isArray(list?.data))
				return error('Failed to fetch the components list.');
			const components = list.data
				.map(c => c.name.split('.')[0])
				.filter(
					c =>
						!fs.existsSync(
							configGet('dir') +
								'components/' +
								folderName +
								'/' +
								c +
								'.tsx'
						)
				)
				.sort((a, b) => a.localeCompare(b));

			if (components.length === 0)
				return error('All components are already installed.');

			comp = components.join(',');
		}

		if (comp.includes(',')) {
			const split = comp.split(',');
			let installed = 0;
			const install = async () => {
				if (installed > 0) console.log('');
				await installComp(split[installed], startDir);
				installed++;
				if (installed < split.length) {
					await install();
				} else {
					console.log('');
					return success('Installed all components.');
				}
			};

			return install();
		} else {
			await installComp(comp, startDir);
		}
	});

program
	.command('uninstall')
	.alias('u')
	.argument('<component>', 'Component name')
	.description(`Uninstall a ${chalk.blue.bold('ColidyUI')} component`)
	.action(async comp => {
		const prompt = inquirer.createPromptModule();
		const config = await getConfig();
		if (!config?.dir) {
			await prompt([
				{
					type: 'input',
					name: 'startDir',
					message:
						'Enter the directory where the components is located:',
					default: fs.existsSync('src') ? './src/' : './',
				},
			]).then(async answers => {
				configUpdate('dir', answers.startDir);
			});
		}

		const startDir = configGet('dir');
		if (
			!fs.existsSync(
				startDir + 'components/' + folderName + '/' + comp + '.tsx'
			)
		)
			return error(
				'Component ' + chalk.white.bold(comp) + ' does not exist.'
			);
		fs.unlinkSync(
			startDir + 'components/' + folderName + '/' + comp + '.tsx'
		);
		success('Uninstalled ' + chalk.blue.bold(comp) + ' component.');
	});

program
	.command('components')
	.description(`List all available ${chalk.blue.bold('ColidyUI')} components`)
	.action(async comp => {
		const list = await getFileContent(
			config.comps_path,
			config.comps_repo
		).catch(() => false);
		if (!Array.isArray(list?.data))
			return error('Failed to fetch the components list.');

		const components = list.data
			.map(c => c.name.split('.')[0])
			.sort((a, b) => a.localeCompare(b))
			.map(c => {
				return {
					name: c,
					installed: fs.existsSync(
						configGet('dir') +
							'components/' +
							folderName +
							'/' +
							c +
							'.tsx'
					),
				};
			});

		console.log(chalk.blue.bold('ColidyUI Components:'));
		components.forEach(c => {
			console.log(
				'  ' +
					(c.installed
						? chalk.green.bold('✔')
						: chalk.red.bold('✖')) +
					' ' +
					(c.installed
						? chalk.green.bold(c.name)
						: chalk.red.bold(c.name))
			);
		});
	});

program.parse();
