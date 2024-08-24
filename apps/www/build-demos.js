const fs = require('fs');

function buildDemos(path) {
	const demos = fs.readdirSync('./src/components/demos/' + path);

	const format = content => {
		return content.replace(/(\$\{.*?\})/g, '\\$1').replace(/`/g, '\\`');
	};

	demos.forEach(file => {
		file = `${path}/${file}`;
		const content = fs.readFileSync(
			`./src/components/demos/${file}`,
			'utf8'
		);
		if (
			!content.includes('// @end-example') &&
			!content.includes('//@end-example')
		)
			return;

		const spliter = content.includes('//@end-example')
			? '//@end-example'
			: '// @end-example';
		const parts = content.split(spliter);

		if (
			content.includes('// @start-demo-string') ||
			content.includes('//@start-demo-string')
		) {
			const sp = content.includes('//@start-demo-string')
				? '//@start-demo-string'
				: '// @start-demo-string';
			const newContent =
				content.split(sp)[0] +
				sp +
				'\nexport const DemoString = `' +
				format(parts[0].replace(/`/g, '`')) +
				'`;';
			fs.writeFileSync(`./src/components/demos/${file}`, newContent);
			console.log(`[!] ${file} has been updated.`);
		} else {
			const newContent =
				content +
				'\n\n// @start-demo-string\nexport const DemoString = `' +
				format(parts[0].replace(/`/g, '`')) +
				'`;';
			fs.writeFileSync(`./src/components/demos/${file}`, newContent);
			console.log(`[!] ${file} has been updated. (NEW FILE)`);
		}
	});
}

buildDemos('components');
buildDemos('hooks');
