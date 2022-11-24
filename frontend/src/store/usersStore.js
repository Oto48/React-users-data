import create from 'zustand';
import { devtools } from "zustand/middleware";
import axios, { AxiosHeaders } from "axios";

const useUsers = create(
    devtools((set) => ({
        users: [],
        fetch: async () => {
            const response = await axios.get("http://localhost:8000/item");
            set({ users: await response.data })
        },

        add: async (data) => {
            const response = await axios.post(`http://localhost:8000/item`,{...data})
        },

        removeUser: async (id) => {
            const res = await axios.delete(`http://localhost:8000/item/${id}`)
        }

    }))
);

export default useUsers;