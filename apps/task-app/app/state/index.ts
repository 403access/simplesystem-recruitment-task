import { atom } from "jotai";

export type User = {
  id: number;
  name: string;
};

export type Repository = {
  username: string;
  id: number;
  name: string;
  description: string;
  stars: number;
};

export const loggedInUserAtom = atom<User | undefined>(undefined);
export const userSearchTextAtom = atom<string | undefined>(undefined);
export const userSearchResultsAtom = atom<User[] | undefined>(undefined);
export const repositoriesAtom = atom<Repository[]>([]);
