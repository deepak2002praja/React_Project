import React, { useState, useEffect } from 'react';
import { db } from './firebase.js';

import { collection, query, where, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';


const Footer = () => {
    const [email, setEmail] = useState('');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (email.trim()) {
            try {
                // Check if email already exists
                const q = query(collection(db, "subscribers"), where("email", "==", email.trim()));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    alert("⚠️ This email is already subscribed.");
                    return;
                }

                // If not, add to Firestore
                await addDoc(collection(db, "subscribers"), {
                    email: email.trim(),
                    timestamp: serverTimestamp(),
                });

                alert(`✅ Subscribed with: ${email}`);
                setEmail('');
            } catch (error) {
                console.error("Error saving to Firestore:", error);
                alert("❌ Subscription failed. Try again.");
            }
        }
    };



    const styles = {
        // (same styles from your original file)
        footer: {
            width: '100%',
            background: 'linear-gradient(90deg, #f0f2f5, #dfe6e9)',
            color: '#2c3e50',
            padding: '40px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        },
        heading: {
            fontSize: windowWidth <= 768 ? '1.8rem' : '2.5rem',
            marginBottom: '10px',
            fontWeight: 'bold',
        },
        paragraph: {
            fontSize: windowWidth <= 768 ? '1rem' : '1.2rem',
            marginBottom: '15px',
        },
        socialIcons: {
            display: 'flex',
            gap: '15px',
            fontSize: '1.5rem',
            marginTop: '15px',
        },
        icon: {
            textDecoration: 'none',
            color: '#2c3e50',
            transition: 'transform 0.3s ease',
        },
        mapLink: {
            color: '#3498db',
            marginTop: '10px',
            fontSize: '1rem',
            textDecoration: 'underline',
        },
        newsletterBox: {
            background: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            padding: '25px',
            marginTop: '30px',
            width: '100%',
            maxWidth: '450px',
        },
        newsletterTitle: {
            fontWeight: '600',
            fontSize: '1.2rem',
            marginBottom: '15px',
        },
        newsletterForm: {
            display: 'flex',
            flexDirection: windowWidth <= 480 ? 'column' : 'row',
            gap: '10px',
        },
        newsletterInput: {
            padding: '12px',
            flex: 1,
            fontSize: '1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            outline: 'none',
        },
        subscribeBtn: {
            padding: '12px 20px',
            backgroundColor: '#1abc9c',
            color: '#fff',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        backToTop: {
            marginTop: '30px',
            padding: '10px 22px',
            background: 'linear-gradient(90deg, #2c3e50, #34495e)',
            color: '#fff',
            border: 'none',
            borderRadius: '30px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 3px 8px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s ease',
        },
    };

    return (
        <div style={styles.footer}>
            <h2 style={styles.heading}>📞 Contact: 7535XXXXXX</h2>
            <p style={styles.paragraph}><b>📧 Email: deepakxxxxxx@gmail.com</b></p>

            <div style={styles.socialIcons}>
                <a href="https://facebook.com" style={styles.icon} target="_blank" rel="noreferrer">🌐</a>
                <a href="https://linkedin.com" style={styles.icon} target="_blank" rel="noreferrer">💼</a>
                <a href="https://twitter.com" style={styles.icon} target="_blank" rel="noreferrer">🐦</a>
                <a href="https://instagram.com" style={styles.icon} target="_blank" rel="noreferrer">📸</a>
            </div>

            <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={styles.mapLink}>
                📍 Find us on Google Maps
            </a>

            <div style={styles.newsletterBox}>
                <p style={styles.newsletterTitle}>📬 Stay updated! Subscribe to our newsletter:</p>
                <form onSubmit={handleSubscribe} style={styles.newsletterForm}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.newsletterInput}
                    />
                    <button type="submit" style={styles.subscribeBtn}>Subscribe</button>
                </form>
            </div>

            <button
                style={styles.backToTop}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                ↑ Back to Top
            </button>
        </div>
    );
};

export default Footer;
