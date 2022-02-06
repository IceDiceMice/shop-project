import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../App"

export interface BookmarkState {
    bookmarks: Product[]
}

const initialState: BookmarkState = {
    bookmarks: []
}

const bookmarkSlice = createSlice({
    name: "bookmark",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Product>) => {
            state.bookmarks.push(action.payload)
        },
        clear: (state, action: PayloadAction<Product>) => {
            state.bookmarks = state.bookmarks.filter((item) => {
                return item !== action.payload
            })
        },
    }

})
export default bookmarkSlice.reducer

export const { add, clear } = bookmarkSlice.actions

