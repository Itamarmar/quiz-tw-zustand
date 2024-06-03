import { create } from "zustand";
import { apiReq } from "../../functions/api";

export const useTrivia = create((set, get) => ({
    questions: [],
    getQuestions: async() => {
        const q = await apiReq({ url: "https://opentdb.com/api.php?amount=10" })
        set((state) => ({ questions: q })
        )
    }
}))

