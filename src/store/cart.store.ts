import { create } from 'zustand';

export type CartItem = {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
  note?: string;
};

type CartStore = {
  items: CartItem[];
  vatRate: number;
  serviceRate: number;

  getSubtotal: () => number;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  getServiceCharge: () => number;
  getVAT: () => number;
  getTotal: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  vatRate: 0.16,
  serviceRate: 0.05,

  getVAT: () => {
    const subtotal = get().getSubtotal();
    return subtotal * get().vatRate;
  },

  getServiceCharge: () => {
    const subtotal = get().getSubtotal();
    return subtotal * get().serviceRate;
  },

  getSubtotal: () => {
    return get().items.reduce(
      (sum, item) => sum + parseFloat(item.price) * item.quantity,
      0,
    );
  },

  getTotal: () => {
    return get().getSubtotal() + get().getVAT() + get().getServiceCharge();
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
//
