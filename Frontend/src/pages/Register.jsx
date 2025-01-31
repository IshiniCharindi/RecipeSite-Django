import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import axios from 'axios';

export default function Registration() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        Cpassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.Cpassword) {
            setError('Passwords do not match');
            return;
        }

        const { Cpassword, ...dataToSend } = formData;

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/register/", dataToSend);
            if (response.status === 201) {
                navigate('/login');
            } else {
                setError('Registration Failed. Try Again');
            }
        } catch (error) {
            setError('Registration Failed. Try Again');
        }
    };

    return (
        <>
            <Header />
            <div className="login">
                <h2>Create an Account</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name">Full Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="Cpassword">Confirm Password</label>
                        <input
                            id="Cpassword"
                            name="Cpassword"
                            type="password"
                            required
                            value={formData.Cpassword}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit">
                        Create Account
                    </button>
                </form>

                {error && <p className="text-red-700">{error}</p>}

                <p className="mt-10 text-center">
                    Already have an account?{' '}
                    <a href="/login" className="text-red-700 hover:text-red-700">
                        Sign In
                    </a>
                </p>
            </div>
            <Footer />
        </>
    );
}
