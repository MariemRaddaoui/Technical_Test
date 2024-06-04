import { z } from 'zod';
import translation from './i18next.js';

const getSchema = () => ({
    loginSchema: z.object({
        email: z.string().email({ message: translation('invalidEmail') }),
        password: z.string().min(8, { message: translation('passwordMin') }).max(20, { message: translation('passwordMax') }),
    }),
    signUpSchema: z.object({
        firstname: z.string().min(1, { message: translation('firstNameRequired') }),
        lastname: z.string().min(1, { message: translation('lastNameRequired') }),
        dateOfBirth: z.string().min(1, { message: translation('dateOfBirthRequired') }),
        email: z.string().email({ message: translation('invalidEmail') }),
        password: z.string().min(8, { message: translation('passwordMin') }).max(20, { message: translation('passwordMax') }),
        confirmPassword: z.string(),
    }).refine((data) => data.password === data.confirmPassword, {
        message: translation('passwordsMismatch'),
        path: ['confirmPassword'],
    })
});

export default getSchema;
