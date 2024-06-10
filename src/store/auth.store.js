import { create } from 'zustand'
import { logIn, register } from '../requests/auth.request.js'

export const authStore = create((set) => {
    const token = localStorage.getItem("token");
    return({
        isAuthenticated: token ? true : false,
        loading: false,
        user: null,
        signIn: async (data) => {
            try {
                const result = await logIn(data);
                if (result.status === 200) {
                    const {data} = result
                    localStorage.setItem("token", "exampletoken")
                    console.log(data.user);
                    set({ loading: false, isAuthenticated: true, user: data.user });
                }

            } catch (error) {
                console.log(error);
            }
        },
        logOut: () => {
            localStorage.removeItem("token")
            set({ loading: false, isAuthenticated: false });
        },
        register: async (data) => {
            const result = await register(data)
            if (result.status === 201){
                localStorage.setItem("token", "exampletoken")
                const {dataUser} = result
                set({ loading: false, isAuthenticated: true, user: dataUser.user });
            }
        }
    })
})