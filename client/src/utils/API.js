import axios from "axios";

export default {
    // Get all system design
    getSystemDesign: function () {
        return axios.get("/api/systemdesigns");
    },
    // Get selective system design
    getSystemDesignByFilter: function (filterCriteria) {
        return axios.get("/api/systemdesigns/filter/" + filterCriteria);
    },
    // Gets the system design with the given id
    getSystemDesignByID: function (id) {
        return axios.get("/api/systemdesigns/" + id);
    },
    // Deletes the system design with the given id
    deleteSystemDesign: function (id) {
        return axios.delete("/api/systemdesigns/" + id);
    },
    // Saves system design to the database
    saveSystemDesign: function (systemDesignData) {
        return axios.post("/api/systemdesigns", systemDesignData);
    },
    // Get drawing link from Google Storage
    getGoogleStoragePdf: function (id) {
        return axios.get("/api/pdf/" + id);
    }
};