import { sheets } from '../service/googleService.js'
import { enquirySchema } from '../helper/validator.js'
import { ZodError } from 'zod'
import dayjs from 'dayjs'

import appConfig from '../config/appConfig.js'

const { GOOGLE_SHEET_ID } = appConfig

export const enquiryController = (req, res) => {
    try {
        const body = enquirySchema.parse(req.body);
        const { name, email, phoneNumber ,category, message} = body;
        console.log(name, email,phoneNumber ,category, message);
const currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss')
        sheets.spreadsheets.values.append({
            spreadsheetId: GOOGLE_SHEET_ID,
            range: 'Sheet1!A:E',
            valueInputOption: 'RAW',
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
                values: [
                    [name, email, phoneNumber, category, message,currentDate]
                ]
            }
        })
        res.status(201).json({
            success: true,
            message: ' successfully submitted'
        })
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(422).json({
                success: false,
                message: error.errors
            })
        }
        res.sendStatus(500)
    }
}
