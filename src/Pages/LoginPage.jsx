import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import getSchema from '../utils/validationSchemas';
import translation from '../utils/i18next';
import Confetti from 'react-confetti';
import '../Components/Sign/sign.css';

const dummyData = [
    { email: "user1@example.com", password: "password123" },
    { email: "user2@example.com", password: "password456" },
    { email: "user3@example.com", password: "password789" },
];

function LoginPage() {
    const { loginSchema } = getSchema();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        const result = loginSchema.safeParse({ email, password });

        if (!result.success) {
            setError(result.error.errors.map(err => err.message).join(', '));
        } else {
            const user = dummyData.find((user) => user.email === email);
            if (!user) {
                setError(translation('invalidEmailPassword'));
            } else if (user.password !== password) {
                setError(translation('incorrectPassword'));
            } else {
                setSuccess(true);
            }
        }
    };

    return (
        <div className="sign-page">
            {success && <Confetti />}
            <form onSubmit={handleSubmit}>
                <h2>{translation('login')}</h2>
                {error && <div className="error">{error}</div>}
                {success && <div className="success">{translation('loginSuccessful')}</div>}
                <div>
                    <label>{translation('email')}:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>{translation('password')}:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">{translation('login')}</button>
                <p>
                    {translation('dontHaveAccount')} <Link to="/signup">{translation('signUp')}</Link>
                </p>
            </form>
        </div>
    );
}

export default LoginPage;
