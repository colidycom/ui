import { create } from 'zustand';

interface ScrolledState {
	scrolled: boolean;
	setScrolled: (scrolled: boolean) => void;
}

export const useScrolled = create<ScrolledState>(set => ({
	scrolled: false,
	setScrolled: scrolled => set({ scrolled }),
}));
