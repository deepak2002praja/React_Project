import React, { useState, useEffect } from 'react';
import { db } from './firebase.js';
import {
    collection,
    getDocs,
    deleteDoc,
    doc
} from 'firebase/firestore';

const AdminPage = () => {
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [users, setUsers] = useState([]);
    const [subscribers, setSubscribers] = useState([]);
    const [contacts, setContacts] = useState([]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'Deepak@2002') {
            setAuthenticated(true);
            setPassword('');
        } else {
            alert('❌ Incorrect password');
        }
    };

    const handleLogout = () => {
        setAuthenticated(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersSnap = await getDocs(collection(db, 'users'));
                const subsSnap = await getDocs(collection(db, 'subscribers'));
                const contactSnap = await getDocs(collection(db, 'contacts'));

                setUsers(usersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                setSubscribers(subsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                setContacts(contactSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                console.error('Error fetching admin data:', error);
            }
        };

        if (authenticated) fetchData();
    }, [authenticated]);

    const deleteUser = async (id) => {
        try {
            await deleteDoc(doc(db, 'users', id));
            setUsers(users.filter(u => u.id !== id));
            alert('User deleted successfully!');
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const styles = {
        container: {
            maxWidth: '90%',
            margin: '100px auto',
            padding: '30px',
            borderRadius: '12px',
            background: '#ffffff',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            textAlign: 'center',
            fontFamily: 'Segoe UI, sans-serif',
            color: '#333',
        },
        input: {
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
        },
        button: {
            padding: '12px 24px',
            background: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            marginTop: '10px',
        },
        logoutBtn: {
            background: '#e74c3c',
            marginBottom: '20px',
        },
        welcome: {
            fontSize: '1.6rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            background: 'linear-gradient(to right, #00c6ff, #0072ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
        },
        dashboard: {
            padding: '10px',
            backgroundColor: '#f7f9fc',
            minHeight: '100vh',
        },
        section: {
            marginBottom: '40px',
        },
        tableContainer: {
            overflowX: 'auto',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
        },
        th: {
            background: '#2c3e50',
            color: '#fff',
            padding: '12px',
            textAlign: 'left',
        },
        td: {
            borderBottom: '1px solid #e0e0e0',
            padding: '12px',
            color: '#333',
            boxSizing: 'border-box',
        },
        deleteBtn: {
            padding: '6px 12px',
            background: '#e74c3c',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
        },
    };

    // Responsive CSS injected into <style> tag
    const responsiveCSS = `
        * {
            box-sizing: border-box;
        }
        @media (max-width: 768px) {
            table, thead, tbody, th, td, tr {
                display: block;
                width: 100%;
            }
            thead {
                display: none;
            }
            td {
                position: relative;
                padding-left: 50%;
                text-align: left;
                min-height: 50px;
            }
            td::before {
                content: attr(data-label);
                position: absolute;
                left: 12px;
                top: 12px;
                font-weight: bold;
                white-space: nowrap;
                color: #555;
            }
        }
    `;

    if (!authenticated) {
        return (
            <div style={styles.container}>
                <h2>🔐 Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="password"
                        placeholder="Enter Admin Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                        required
                    />
                    <button type="submit" style={styles.button}>Login</button>
                </form>
            </div>
        );
    }

    return (
        <div style={styles.dashboard}>
            <style>{responsiveCSS}</style>

            <div style={styles.welcome}>👋 Hello Admin, Welcome Back 🧑‍🚒!</div>
            <div style={{ textAlign: 'center' }}>
                <button style={{ ...styles.button, ...styles.logoutBtn }} onClick={handleLogout}>
                    🔒 Logout
                </button>
            </div>

            {/* USERS */}
            <section style={styles.section}>
                <h2>👥 Signup Users</h2>
                {users.length === 0 ? <p>No users found.</p> : (
                    <div style={styles.tableContainer}>
                        <table style={styles.table}>
                            <thead>
                                <tr>
                                    <th style={styles.th}>Name</th>
                                    <th style={styles.th}>Email</th>
                                    <th style={styles.th}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td style={styles.td} data-label="Name">{user.name}</td>
                                        <td style={styles.td} data-label="Email">{user.email}</td>
                                        <td style={styles.td} data-label="Action">
                                            <button onClick={() => deleteUser(user.id)} style={styles.deleteBtn}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>

            {/* SUBSCRIBERS */}
            <section style={styles.section}>
                <h2>📧 Subscribers</h2>
                {subscribers.length === 0 ? <p>No subscribers found.</p> : (
                    <div style={styles.tableContainer}>
                        <table style={styles.table}>
                            <thead><tr><th style={styles.th}>Email</th></tr></thead>
                            <tbody>
                                {subscribers.map(sub => (
                                    <tr key={sub.id}>
                                        <td style={styles.td} data-label="Email">{sub.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>

            {/* CONTACTS */}
            <section style={styles.section}>
                <h2>📨 Contact Messages</h2>
                {contacts.length === 0 ? <p>No messages found.</p> : (
                    <div style={styles.tableContainer}>
                        <table style={styles.table}>
                            <thead>
                                <tr>
                                    <th style={styles.th}>Name</th>
                                    <th style={styles.th}>Email</th>
                                    <th style={styles.th}>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map(msg => (
                                    <tr key={msg.id}>
                                        <td style={styles.td} data-label="Name">{msg.name}</td>
                                        <td style={styles.td} data-label="Email">{msg.email}</td>
                                        <td style={styles.td} data-label="Message">{msg.message}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
        </div>
    );
};

export default AdminPage;
