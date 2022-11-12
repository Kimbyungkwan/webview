import create, { StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CountSlice {
  count: number;
  increase: () => void;
  decrease: () => void;
}

type CreateSlice<T> = StateCreator<T, [['zustand/devtools', never]], [], T>;

const createCountSlice: CreateSlice<CountSlice> = (set) => ({
  count: 0,
  decrease() {
    set((state) => ({ count: state.count - 1 }), true, 'decrease_count');
  },
  increase() {
    set((state) => ({ count: state.count + 1 }), false, 'increase_count');
  },
});

const useBoundStore = create<CountSlice>()(
  devtools((...a) => ({
    ...createCountSlice(...a),
  }))
);

export default useBoundStore;
