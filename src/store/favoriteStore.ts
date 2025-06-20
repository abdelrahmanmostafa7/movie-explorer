import { create } from "zustand";
import { persist, PersistStorage, StorageValue } from "zustand/middleware";
import { secureDB } from "@/utils/secureIndexedDB";

type FavoriteStore = {
  favorites: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  clearFavorites: () => void;
};

const secureStorage: PersistStorage<FavoriteStore> = {
  getItem: async (name): Promise<StorageValue<FavoriteStore> | null> => {
    const data = await secureDB.getItem(name);
    return data as StorageValue<FavoriteStore> | null;
  },

  setItem: async (name, value: StorageValue<FavoriteStore>): Promise<void> => {
    await secureDB.setItem(name, value);
  },

  removeItem: async (name): Promise<void> => {
    await secureDB.removeItem(name);
  },
};
//  نفس الفكرة كنت مطبقها فى مشروع التخرج هنشوف Fav فيها ال id  اللى هباصيه ولى لا 

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (id) => {
        if (!get().favorites.includes(id)) {
          set({ favorites: [...get().favorites, id] });
        }
      },
      removeFavorite: (id) =>
        set({ favorites: get().favorites.filter((f) => f !== id) }),
      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: "favorites-secure-db", 
      storage: secureStorage, 
    }
  )
);
