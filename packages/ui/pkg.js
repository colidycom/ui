module.exports = content => {
	const importRegex = /(from "(.*)";)/g;
	let packages = content.match(importRegex)?.join('\n');
	if (!packages) packages = '';
	packages = packages.split('\n');
	packages = packages
		.map(pkg => {
			const pkgName = pkg.match(/from "(.*)";/);
			return pkgName?.[1] || null;
		})
		.filter(Boolean);

	const links = [
		['./(.*)', '/docs/components/$1'],
		['@/(.*)', '/docs/components/$1'],
		['@(.*)(?:/src)?', 'https://npmjs.com/package/@$1'],
	];

	let externalPackages = [];
	let colidyPackages = [];

	packages.forEach(pkg => {
		let isExternal = false;
		let link = '';
		let name = '';
		let native = '';
		links.forEach(([regex, url]) => {
			if (pkg.match(regex)) {
				link = pkg.replace(new RegExp(regex), url).toLowerCase();
				if (link.startsWith('http')) {
					isExternal = true;
					name = pkg;
				} else {
					native = pkg;
					name = pkg.replace(/\.\//g, '@/colidy-ui/').toLowerCase();
				}
			}
		});

		if (name.startsWith('next/')) return;

		if (isExternal) externalPackages.push({ name, link });
		else colidyPackages.push({ native, name, link });
	});

	colidyPackages = colidyPackages.filter(e => e.name);
	externalPackages = externalPackages.filter(e => e.name);

	return {
		externalPackages,
		colidyPackages,
		packages: externalPackages.concat(colidyPackages),
	};
};
