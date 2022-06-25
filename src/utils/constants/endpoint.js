//membuat BASE_URL
const BASE_URL = `https://covid19.mathdro.id/api/`;
//membuat ENDPOINT
const ENDPOINTS = {
    GLOBAL : `${BASE_URL}`,
    SUMMARY_GLOBAL : `${BASE_URL}/og`,
    INDO : `${BASE_URL}/countries/indonesia`,
    SUMMARY_INDO : `${BASE_URL}/countries/indonesia/og/`

}

//export default
export default ENDPOINTS;