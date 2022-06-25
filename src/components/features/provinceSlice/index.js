import provinces from "../../../utils/constants/provinces"

const { createSlice, current } = require("@reduxjs/toolkit");

const provinceSlice = createSlice({
    name : "provinces Slice",
    initialState : {
        provinces : provinces.provinces
    },
    reducers : {
        updateProvinces(state,action) {
            const {provinces} = state;
            const {kota,status,jumlah} = action.payload;

            let value = parseInt(jumlah);
            let nama = provinces.findIndex((data) => data.kota === kota);

            provinces[nama][status] = parseInt(provinces[nama][status]) + value

            console.log(current(state.provinces))
            console.log(action.payload)

            /* if(jumlah > 0);
            {
                let value = parseInt(jumlah);
                let nama = provinces.findIndex((data) => data.kota === province);

                if (status === "Positif") {

                    provinces[nama].kasus = parseInt(provinces[nama].kasus) + value;

                } else if (status === "Dirawat") {

                    provinces[nama].dirawat = parseInt(provinces[nama].dirawat) + value;

                } else if (status === "Sembuh") {
            
                    provinces[nama].sembuh = parseInt(provinces[nama].sembuh) + value;

                } else if (status === "Meninggal") {
            
                    provinces[nama].meninggal = parseInt(provinces[nama].meninggal) + value;

                }
            }  */

        }
    }
})

const {updateProvinces} = provinceSlice.actions;
const provincesReducer = provinceSlice.reducer;

export default provincesReducer;
export {updateProvinces};