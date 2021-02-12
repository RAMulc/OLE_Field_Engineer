import axios from "axios";

export default {
    // Get tension change over temperature range
    getTensionState: function (calcParams) {
        return axios.post("/api/calculations/tensionstate", calcParams);
    }
};