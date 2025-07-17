import React from 'react';
import aboutImage from './About.png'; // Replace with your actual image path

const AboutPage = () => {
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.heading}>About Us</h1>
                <p style={styles.subheading}>Who we are, what we do, and how we do it.</p>
            </div>

            <div style={styles.content}>
                <div style={styles.text}>
                    <h2 style={styles.sectionTitle}>We Build Future-Ready Solutions</h2>
                    <p style={styles.paragraph}>
                        At SixD, we specialize in engineering-driven innovation powered by Industry 4.0 principles. Our goal is to enhance productivity, optimize operations, and drive digital transformation across global industries. From oil & gas to manufacturing, we bring decades of experience, future-ready technologies, and a commitment to excellence.
                    </p>
                    <p style={styles.paragraph}>
                        Our team combines domain expertise with leading-edge technologies to deliver tailored, scalable, and reliable solutions. We believe in transparency, sustainability, and long-term partnerships with our clients.
                    </p>
                </div>

                <div style={styles.imageContainer}>
                    <img src={aboutImage} alt="About SixD" style={styles.image} />
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        color: '#f2f2f2',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        textAlign: 'center',
        marginBottom: '40px',
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
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        flex: 1,
        minWidth: '300px',
    },
    sectionTitle: {
        fontSize: '2rem',
        color: '#1abc9c',
        marginBottom: '20px',
    },
    paragraph: {
        fontSize: '1.1rem',
        lineHeight: '1.8',
        textAlign: 'justify',
        marginBottom: '20px',
    },
    imageContainer: {
        flex: 1,
        minWidth: '280px',
        display: 'flex',
        justifyContent: 'center',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    },
};

export default AboutPage;
