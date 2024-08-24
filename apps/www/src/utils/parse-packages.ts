export const getPackages = (content: string) => {
	if (typeof content !== 'string')
		return { externalPackages: [], colidyPackages: [], packages: [] };

	if (!content)
		return { externalPackages: [], colidyPackages: [], packages: [] };

	const packages = content.match(/import\s.*\sfrom\s['|"].*['|"]/g) || [];

	const links = [
		['./(.*)', '/docs/components/$1'],
		['@/colidy-ui/(.*)', '/docs/components/$1'],
		['@(.*)(?:/src)?', 'https://npmjs.com/package/@$1'],
	];

	let externalPackages: any = [];
	let colidyPackages: any = [];

	packages.forEach((pkg: string) => {
		if (!pkg) return;
		let name: string | undefined = pkg.match(
			/(?<=from\s['|"]).*(?=['|"])/
		)?.[0];
		const native = pkg.match(/(?<=from\s).*(?=['|"])/)?.[0];
		if (name === 'react') return;

		if (name && native) {
			const link = links.reduce((acc, [regex, replace]) => {
				if ((name as string).match(new RegExp(regex))) {
					return (name as string).replace(new RegExp(regex), replace);
				}

				return acc;
			}, '');

			if (link.startsWith('http')) {
				externalPackages.push({ name, native, link });
			} else {
				if (name.startsWith('./'))
					name = name.replace('./', '@/colidy-ui/');

				colidyPackages.push({ name, native, link: link.toLowerCase() });
			}
		}
	});

	colidyPackages = colidyPackages.filter((e: any) => e.name);
	externalPackages = externalPackages.filter((e: any) => e.name);

	return {
		externalPackages,
		colidyPackages,
		packages: externalPackages.concat(colidyPackages),
	};
};
