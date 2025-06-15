import { create } from 'zustand'


const useSideBarStore = create((set) => ({
    isSideBarOpen: false,
    openSideBar: () => set({ isSideBarOpen: true }),
    closeSideBar: () => set({ isSideBarOpen: false }),
    toggleSideBar: () => set((state) => ({ isSideBarOpen: !state.isSideBarOpen })),
}))

export default useSideBarStore