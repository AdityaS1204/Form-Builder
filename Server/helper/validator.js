import { z } from 'zod';

export const enquirySchema = z.object({
    name: z.string().min(2).max(70),
    email: z.string().email(), 
    phoneNumber: z.number({
        required_error:"Whatsappp number is required",
        invalid_type_error:" whatsapp number must be a number"
    }
    ).lte(9999999999).gte(1000000000),
    category: z.enum(["service","product enquiry","complaint"]),
    message: z.string().min(3).max(200)
}).required()
