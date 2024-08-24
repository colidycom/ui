import { create } from 'zustand';
import { allContents } from 'contentlayer/generated';

interface SidebarState {
	q: string;
	setQuery: (query: string) => void;
	search: boolean;
	toggleSearch: () => void;
	isLoading: boolean;
	toggleLoading: () => void;
	results: any[];
	setResults: (results: any[]) => void;
	handleOnChange: (e: any) => void;
	searchTimeout: any;
}

export const useSearch = create<SidebarState>(set => ({
	q: '',
	setQuery: (query: string) => set({ q: query }),
	search: false,
	toggleSearch: () => set(state => ({ search: !state.search })),
	isLoading: false,
	toggleLoading: () => set(state => ({ isLoading: !state.isLoading })),
	results: [],
	setResults: (results: any[]) => set({ results }),
	searchTimeout: null,
	setSearchTimeout: (timeout: any) => set({ searchTimeout: timeout }),
	handleOnChange: (e: any) => {
		const query = e.target.value;
		set({ q: query, isLoading: true });

		if (query.length < 2) {
			set({ results: [], isLoading: false });
			return;
		}

		set(state => {
			if (state.searchTimeout) clearTimeout(state.searchTimeout);

			const timeout = setTimeout(() => {
				function categoryToPath(category: string) {
					return category.trim().toLowerCase().replace(' ', '-');
				}

				const markTheQuery = (text: string) => {
					return text.replace(
						new RegExp(query, 'gi'),
						match =>
							`<mark class="dark:bg-blue-300 bg-blue-800 dark:text-black text-white">${match}</mark>`
					);
				};
				const pages = allContents
					.filter(
						page =>
							page.title
								.toLowerCase()
								.includes(query.toLowerCase()) ||
							page.description
								.toLowerCase()
								.includes(query.toLowerCase()) ||
							page.slug.includes(query.toLowerCase())
					)
					.map(page => ({
						type: 'page',
						title: markTheQuery(page.title),
						slug: page.slug,
						description: markTheQuery(page.description),
						href:
							'/docs/' +
							categoryToPath(page.category) +
							'/' +
							page.slug,
						headings: page.body.raw.match(/#{2,3} .+/g) || [],
					}));

				const headings = pages.reduce((acc: any, page) => {
					const headings = page.headings.map(heading => ({
						type: 'heading',
						title: heading.replace(/#{2,3} /, ''),
						description: page.title,
						href:
							page.href +
							'#' +
							heading
								.replace(/#{2,3} /, '')
								.toLowerCase()
								.replace(/ /g, '-'),
					}));

					return [...acc, ...headings];
				}, []);

				const results = [...pages, ...headings];

				set({ results, isLoading: false });
			}, 300);

			return { searchTimeout: timeout };
		});
	},
}));
