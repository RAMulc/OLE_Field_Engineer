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
    // Saves system design to the database
    updateSystemDesign: function (id, systemDesignData) {
        return axios.put("/api/systemdesigns/" + id, systemDesignData);
    },
    // Get drawing link from Google Storage
    getGoogleStoragePdf: function (id) {
        return axios.get("/api/pdf/" + id);
    },
    // User signin
    userSignIn: function (userData) {
        return axios.post("/api/auth/signin", userData);
    },
    // User signup
    userSignUp: function (userData) {
        return axios.post("/api/auth/signup", userData);
    },
    // Check token
    userValidToken: function (tokenData) {
        return axios.post("/api/auth/tokenIsValid", tokenData);
    },
    // Get user
    getUserByID: function (id) {
        return axios.get("/api/auth/" + id);
    },
    // Get all users
    getAllUsers: function () {
        return axios.get("/api/auth");
    },
    // Get selective user
    getUsersByFilter: function (filterCriteria) {
        return axios.get("/api/auth/filter/" + filterCriteria);
    },
    // Saves user to the database
    updateUser: function (id, userData) {
        return axios.put("/api/auth/" + id, userData);
    },
    // Deletes the user with the given id
    // removeUser: function (id) {
    //     return axios.delete("/api/auth/" + id);
    // },
};