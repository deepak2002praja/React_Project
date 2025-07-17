import React, { useState } from 'react';
import { db } from './firebase'; // 🔥 Make sure the path is correct
import {
    collection,
    addDoc,
    query,
    where,
    getDocs,
    serverTimestamp,
} from 'firebase/firestore';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            alert('⚠️ Please fill out all fields.');
            return;
        }

        try {
            const q = query(
                collection(db, 'contacts'),
                where('email', '==', email.trim()),
                where('message', '==', message.trim())
            );

            const snapshot = await getDocs(q);
            if (!snapshot.empty) {
                alert('⚠️ This message has already been submitted.');
                return;
            }

            await addDoc(collection(db, 'contacts'), {
                name: name.trim(),
                email: email.trim(),
                message: message.trim(),
                timestamp: serverTimestamp(),
            });

            alert('✅ Message submitted successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error saving message:', error);
            alert('❌ Failed to send message. Try again later.');
        }
    };

    const styles = {
        container: {
            maxWidth: '800px',
            margin: 'auto',
            padding: '40px 20px',
            fontFamily: 'Arial, sans-serif',
        },
        heading: {
            fontSize: '2.8rem',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #ff416c, #ff4b2b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
        },
        subheading: {
            fontSize: '1.2rem',
            color: '#ccc',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        input: {
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
        },
        textarea: {
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            minHeight: '120px',
            resize: 'vertical',
        },
        button: {
            backgroundColor: '#1abc9c',
            color: 'white',
            padding: '12px',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        buttonHover: {
            backgroundColor: '#16a085',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Contact Us</h1>
            <p style={styles.subheading}>
                We'd love to hear from you! Fill out the form below to get in touch.
            </p>
            <form style={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    style={styles.input}
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    style={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    style={styles.textarea}
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={(e) =>
                        (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
                    }
                    onMouseOut={(e) =>
                        (e.target.style.backgroundColor = styles.button.backgroundColor)
                    }
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
