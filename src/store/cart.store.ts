import { create } from 'zustand';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  note?: string;
};

type CartStore = {
  items: CartItem[];

  getSubtotal: () => number;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  getSubtotal: () => {
    return get().items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
  },

  addItem: (item) => {
    const existing = get().items.find((i) => i.id === item.id);

    if (existing) {
      set({
        items: get().items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      });
      return;
    }

    set({
      items: [...get().items, { ...item, quantity: 1 }],
    });
  },

  increase: (id) => {
    set({
      items: get().items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    });
  },

  decrease: (id) => {
    const updated = get()
      .items.map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
      .filter((i) => i.quantity > 0);

    set({ items: updated });
  },

  remove: (id) => {
    set({
      items: get().items.filter((i) => i.id !== id),
    });
  },

  clear: () => set({ items: [] }),
}));
