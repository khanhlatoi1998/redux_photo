import { createSlice } from "@reduxjs/toolkit";

const photo = createSlice({
    name: 'photos',
    initialState: [],
    reducers: {
        addPhoto: (state, action) => {
            // sliceRedux đã must state [...state]
            state.push(action.payload);
        },

    }
});

// get reducer && action from photo
const { reducer, actions } = photo;
export const { addPhoto } = actions;

// export default reducer
export default reducer;