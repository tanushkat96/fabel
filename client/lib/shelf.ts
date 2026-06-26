import { create } from "zustand";
import { persist } from "zustand/middleware";
import { GoogleBook } from "@/types/book";

export type ShelfType =
  | "currentlyReading"
  | "wantToRead"
  | "favorites"
  | "finished";

interface ShelfStore {
  currentlyReading: GoogleBook[];
  wantToRead: GoogleBook[];
  favorites: GoogleBook[];
  finished: GoogleBook[];

  addBook: (book: GoogleBook, shelf: ShelfType) => void;
  removeBook: (bookId: string, shelf: ShelfType) => void;
}

export const useShelfStore = create<ShelfStore>()(
  persist(
    (set, get) => ({
      currentlyReading: [],
      wantToRead: [],
      favorites: [],
      finished: [],

      addBook: (book, shelf) => {
        const state = get();

        if (state[shelf].some((b) => b.id === book.id)) {
          return;
        }

        set({
          [shelf]: [...state[shelf], book],
        } as Partial<ShelfStore>);
      },

      removeBook: (bookId, shelf) => {
        const state = get();

        set({
          [shelf]: state[shelf].filter(
            (b) => b.id !== bookId
          ),
        } as Partial<ShelfStore>);
      },
    }),
    {
      name: "fabelShelves",
    }
  )
);