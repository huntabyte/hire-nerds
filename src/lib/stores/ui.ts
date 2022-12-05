import { writable, type Writable } from 'svelte/store';

export const storeDrawer: Writable<boolean> = writable(false);
