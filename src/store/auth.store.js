import { create } from 'zustand'
import { logIn } from '../requests/auth.request.js'

export const authStore = create((set) => {
    const token = localStorage.getItem("token");
    return({
        isAuthenticated: token ? true : false,
        loading: false,
        signIn: async (data) => {
            try {
                const result = await logIn(data);
                if (result.status === 200) {
                    localStorage.setItem("token", "exampletoken")
                    set({ loading: false, isAuthenticated: true });
                }

            } catch (error) {
                console.log(error);
            }
        },
        logOut: () => {
            localStorage.removeItem("token")
            set({ loading: false, isAuthenticated: false });
        }
    })
})