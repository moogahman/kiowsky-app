"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = exports.firebaseConfig = exports.database = void 0;
// Import the functions you need from the SDKs you need
var app_1 = require("firebase/app");
var database_1 = require("firebase/database");
var storage_1 = require("firebase/storage");
var env_js_1 = require("./env.js");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
var firebaseConfig = {
    apiKey: env_js_1.env.FIREBASE_API_KEY,
    authDomain: env_js_1.env.FIREBASE_AUTH_DOMAIN,
    projectId: env_js_1.env.FIREBASE_PROJECT_ID,
    storageBucket: env_js_1.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env_js_1.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: env_js_1.env.FIREBASE_APP_ID,
    measurementId: env_js_1.env.FIREBASE_MEASUREMENT_ID,
    databaseURL: env_js_1.env.FIREBASE_DATABASE_URL,
};
exports.firebaseConfig = firebaseConfig;
// Initialize Firebase
var app = (0, app_1.initializeApp)(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var database = (0, database_1.getDatabase)(app);
exports.database = database;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var storage = (0, storage_1.getStorage)(app);
exports.storage = storage;
