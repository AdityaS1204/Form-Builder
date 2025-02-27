import {google} from 'googleapis';
import appConfig from '../config/appConfig.js';

const scopes = ['https://www.googleapis.com/auth/spreadsheets'];

const {GOOGLE_PRIVATE_KEY,GOOGLE_SHEET_CLIENT_EMAIL} = appConfig
const sheetClient = new google.auth.JWT(GOOGLE_SHEET_CLIENT_EMAIL,null,GOOGLE_PRIVATE_KEY,scopes);

export const sheets = google.sheets({
    auth:sheetClient,
    version:'v4'
})