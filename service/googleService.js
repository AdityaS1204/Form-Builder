import {google} from 'googleapis';
import appConfig from '../config/appConfig';

const scopes = ['https://www.googleapis.com/auth/spreadsheets'];

const {GOOGLE_PRIVATE_KEY,GOOGLE_SHEET_CLIENT_EMAIL} = appConfig
const sheetClient = new google.auth.JWT(GOOGLE_SHEET_CLIENT_EMAIL,null,GOOGLE_PRIVATE_KEY);

const sheets = google.sheets({
    auth:sheetClient,
    version:'v4'
})