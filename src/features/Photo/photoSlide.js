import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 233,
        categoryId: 3,
        photo: "https://picsum.photos/id/362/200/300",
        title: "photo"
    },
];

const photo = createSlice({
    name: 'photos',
    initialState: initialState,
    reducers: {
        addPhoto: (state, action) => {
            // sliceRedux đã must state [...state]
            state.push(action.payload);
        },

        removePhoto: (state, action) => {
            let removePhotoId = action.payload;
            state = state.filter(photo => photo.id !== removePhotoId);
            return state;
            // khi không must trực tiếp addPhoto thì cần return lại state 
        },

        updatePhoto: (state, action) => {
            let newPhoto = action.payload;
            let photoIndex = state.findIndex(x => x.id === +newPhoto.id);

            // console.log("newPhoto:", newPhoto);
            // console.log("photoIndex:", photoIndex);
            if (photoIndex >= 0) {
                state[photoIndex] = newPhoto;
            }
        }
    }
});

// get reducer && action from photo
const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;

// export default reducer
export default reducer;