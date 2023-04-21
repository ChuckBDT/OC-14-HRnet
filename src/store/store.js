import { create } from "zustand";

const useStore = create((set) => ({
  employees: [],
  addEmployee: (payload) =>
    set((state) => ({ employees: [...state.employees, payload] })),
}));

export default useStore;
