import indonesia from "../../../utils/constants/indonesia"
const { createSlice } = require("@reduxjs/toolkit");

const covidsSlice = createSlice({
    name : "covids Slice",
    initialState : {
        covids : indonesia.indonesia,
    },
    reducers : {
        updateCovids(state,action) {
            state.covids = action.payload;
        }
    }
})

const {updateCovids} = covidsSlice.actions;
const covidsReducer = covidsSlice.reducer;

export default covidsReducer;
export { updateCovids};