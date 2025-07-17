import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        const styles = {
            header: {
                height: '25vh',
                width: '100%',
                background: 'linear-gradient(135deg, #e0eafc, #cfdef3)',
                color: '#2c3e50',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 20px',
                boxSizing: 'border-box',
                animation: 'fadeIn 1s ease-in-out',
            },
            title: {
                fontSize: '3rem',
                fontWeight: '700',
                background: 'linear-gradient(90deg, #1abc9c, #16a085)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'slideDown 0.8s ease-in-out',
                marginBottom: '10px',
            },
            subtitle: {
                fontSize: '1.5rem',
                fontWeight: '500',
                color: '#2c3e50',
                opacity: 0.9,
                animation: 'fadeInUp 1s ease-in-out',
            },
            // Responsive tweaks using media queries
            '@media (max-width: 768px)': {
                title: {
                    fontSize: '2rem',
                },
                subtitle: {
                    fontSize: '1.1rem',
                }
            },
            // Keyframes (via global styles below)
        };

        return (
            <>
                <style>
                    {`
                        @keyframes fadeIn {
                            from { opacity: 0; transform: scale(0.98); }
                            to { opacity: 1; transform: scale(1); }
                        }

                        @keyframes slideDown {
                            from { transform: translateY(-20px); opacity: 0; }
                            to { transform: translateY(0); opacity: 1; }
                        }

                        @keyframes fadeInUp {
                            from { transform: translateY(20px); opacity: 0; }
                            to { transform: translateY(0); opacity: 1; }
                        }

                        @media (max-width: 768px) {
                            .responsive-title {
                                font-size: 2rem !important;
                            }
                            .responsive-subtitle {
                                font-size: 1.1rem !important;
                            }
                        }
                    `}
                </style>

                <div style={styles.header}>
                    <h1 style={styles.title} className="responsive-title">🌍 TOFICALM | MAXDULIN</h1>
                    <p style={styles.subtitle} className="responsive-subtitle"><b>No Dream Too Big !! 🚀</b></p>
                </div>
            </>
        );
    }
}
