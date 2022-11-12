import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface Count {
  count: number;
  increase: () => void;
  decrease: () => void;
}

const countStore = create<Count>()(
  devtools((set) => ({
    count: 0,
    decrease() {
      set((state) => ({ count: state.count - 1 }), false, 'decrease_count');
    },
    increase() {
      set((state) => ({ count: state.count + 1 }), false, 'increase_count');
    },
  }))
);

export default countStore;
