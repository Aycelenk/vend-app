import { create } from 'zustand';

let productIdCounter = 0;

export interface Product1 {
  slug: string;
  name: string;
  id: number; 
  attribute_pa_lens_thickness: string;
  attribute_pa_treatment: string;
  attribute_pa_stock_type: string;
  frame_color: string;
  frame_size: string;
  arm_color: string;
  arm_size: string;
  price: number;
}

type CartState = {
  items: Product1[];
  selectedFrameColor: string | null;
  selectedFrameSize: string | null;
  selectedArmColor: string | null;
  selectedArmSize: string | null;
  totalPrice: number;
  totalItems: number;
  deleteFromCart: (id: number) => void; 
  addToCart: (product: Product1) => void;
  updateFrameSelections: (color: string | null, size: string | null) => void;
  updateArmSelections: (color: string | null, size: string | null) => void;
  clearCart: () => void;
  setTotalPrice: (price: number) => void; 
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  selectedFrameColor: null,
  selectedFrameSize: null,
  selectedArmColor: null,
  selectedArmSize: null,
  totalPrice: 0,
  totalItems: 0,
  addToCart: (product) => {
    
    productIdCounter += 1;
    const productWithId = { ...product, id: productIdCounter };

    set((state) => ({
      items: [...state.items, productWithId],
      totalPrice: state.totalPrice + productWithId.price,
      totalItems: state.totalItems + 1,
    }));
  },
  deleteFromCart: (id) => {
    set((state) => {
      const itemToRemove = state.items.find((item) => item.id === id);
      if (!itemToRemove) return state;

      return {
        items: state.items.filter((item) => item.id !== id),
        totalPrice: state.totalPrice - itemToRemove.price,
        totalItems: state.totalItems - 1,
      };
    });
  },
  updateFrameSelections: (color, size) => {
    set({ selectedFrameColor: color, selectedFrameSize: size });
  },
  updateArmSelections: (color, size) => {
    set({ selectedArmColor: color, selectedArmSize: size });
  },
  clearCart: () => {
    set({
      items: [],
      selectedFrameColor: null,
      selectedFrameSize: null,
      selectedArmColor: null,
      selectedArmSize: null,
      totalPrice: 0,
      totalItems: 0,
    });
  },
  setTotalPrice: (price) => {
    set({ totalPrice: price });
  },
}));
