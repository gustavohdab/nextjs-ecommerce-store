import { Product } from "@/types";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartState {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const useCart = create(
  persist<CartState>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const isItemExist = currentItems.find((item) => item.id === data.id);

        if (isItemExist) {
          return toast("Item already exist in cart", {
            icon: "😅",
          });
        }

        set({ items: [...get().items, data] });
        toast("Item added to cart", {
          icon: "👏",
        });
      },
      removeItem: (id: string) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        toast("Item removed from cart", {
          icon: "😢",
        });
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
