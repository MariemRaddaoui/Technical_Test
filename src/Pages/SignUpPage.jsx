import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import getSchema from '../utils/validationSchemas';
import translation from '../utils/i18next';
import Confetti from 'react-confetti';
import '../Components/Sign/sign.css';

function SignUpPage() {
    const { signUpSchema } = getSchema();

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        dateOfBirth: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        const result = signUpSchema.safeParse(formData);

        if (!result.success) {
            setError(result.error.errors.map(err => err.message).join(', '));
        } else {
            setSuccess(true);
        }
    };

    return (
        <div className="sign-page">
            {success && <Confetti />}
            <form onSubmit={handleSubmit}>
                <h2>{translation('signUp')}</h2>
                {error && <div className="error">{error}</div>}
                {success && <div className="success">{translation('signUpSuccessful')}</div>}
                <div>
                    <label>{translation('firstName')}:</label>
                    <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>{translation('lastName')}:</label>
                    <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>{translation('dateOfBirth')}:</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>{translation('email')}:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>{translation('password')}:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>{translation('confirmPassword')}:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">{translation('signUp')}</button>
                <p>
                    {translation('alreadyHaveAccount')} <Link to="/login">{translation('login')}</Link>
                </p>
            </form>
        </div>
    );
}

export default SignUpPage;
