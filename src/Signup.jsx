import React, { useState } from 'react';
import { auth } from './firebase.js';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from 'firebase/auth';

const Signup = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isLogin, setIsLogin] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password, confirmPassword } = form;

        if (!isLogin && password !== confirmPassword) {
            setMessage("❌ Passwords do not match");
            return;
        }

        try {
            if (isLogin) {
                // LOGIN
                await signInWithEmailAndPassword(auth, email, password);
                setMessage("✅ Logged in successfully!");
            } else {
                // SIGNUP
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(userCredential.user, { displayName: name });
                setMessage("✅ Account created successfully!");
            }
            setForm({ name: '', email: '', password: '', confirmPassword: '' });
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                setMessage('⚠️ Email already exists. Try logging in.');
                setIsLogin(true);
            } else if (err.code === 'auth/invalid-email') {
                setMessage('⚠️ Invalid email.');
            } else if (err.code === 'auth/wrong-password') {
                setMessage('⚠️ Wrong password.');
            } else {
                setMessage(err.message);
            }
        }
    };

    const styles = {
        container: {
            maxWidth: '450px',
            margin: '40px auto',
            padding: '30px',
            borderRadius: '12px',
            background: 'linear-gradient(145deg, #ffffff, #e0e0e0)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif'
        },
        heading: {
            fontSize: '1.8rem',
            marginBottom: '20px',
            background: 'linear-gradient(90deg, #1abc9c, #16a085)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
        },
        input: {
            width: '100%',
            padding: '12px',
            margin: '10px 0',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
        },
        button: {
            padding: '12px 20px',
            width: '100%',
            background: '#16a085',
            color: '#fff',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '10px',
            fontSize: '1rem'
        },
        toggle: {
            marginTop: '15px',
            fontSize: '0.9rem',
            color: '#555',
            cursor: 'pointer'
        },
        message: {
            marginTop: '10px',
            color: '#e74c3c',
            fontWeight: 'bold'
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>{isLogin ? 'Login' : 'Signup'}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        style={styles.input}
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                )}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    style={styles.input}
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    style={styles.input}
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                {!isLogin && (
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        style={styles.input}
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                )}
                <button type="submit" style={styles.button}>
                    {isLogin ? 'Login' : 'Signup'}
                </button>
            </form>

            {message && <div style={styles.message}>{message}</div>}

            <div
                style={styles.toggle}
                onClick={() => {
                    setIsLogin(!isLogin);
                    setMessage('');
                }}
            >
                {isLogin
                    ? "Don't have an account? Sign up"
                    : 'Already have an account? Login'}
            </div>
        </div>
    );
};

export default Signup;
