import { set, get, del } from "idb-keyval";
import { encrypt, decrypt } from "./secureStorage";

const isIndexedDBAvailable =
  typeof window !== "undefined" && "indexedDB" in window;

export const secureDB = {
  async setItem(key: string, value: unknown) {
    const encrypted = encrypt(value); 
    if (isIndexedDBAvailable) {
      await set(key, encrypted); 
    } else {
      localStorage.setItem(key, encrypted);
    }
  },

  async getItem(key: string): Promise<unknown> {
    let encrypted: string | null | undefined;
    if (isIndexedDBAvailable) {
      encrypted = await get(key); 
    } else {
      encrypted = localStorage.getItem(key);
    }
    if (!encrypted) return null;
    return decrypt(encrypted); 
  },

  async removeItem(key: string) {
    if (isIndexedDBAvailable) {
      await del(key);
    } else {
      localStorage.removeItem(key);
    }
  },
};
