import React from 'react';

const Services = () => {
    const servicesList = [
        {
            title: 'Digital Transformation',
            description: 'Helping businesses embrace Industry 4.0 through smart automation, data analytics, and IoT integration.',
            icon: '💻',
        },
        {
            title: 'Engineering Solutions',
            description: 'We deliver CAD modeling, 3D scanning, and infrastructure alignment solutions for critical industries.',
            icon: '🏗️',
        },
        {
            title: 'Cloud & Data Services',
            description: 'Manage and scale your operations securely using robust cloud and big data technologies.',
            icon: '☁️',
        },
        {
            title: 'Consulting & Training',
            description: 'Our team provides expert guidance and workforce upskilling for industrial digital adoption.',
            icon: '📘',
        },
    ];

    const styles = {
        container: {
            padding: '50px 20px',
            maxWidth: '1200px',
            margin: 'auto',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
        },
        title: {
            fontSize: '2.8rem',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #ff416c, #ff4b2b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',

        },
        subtitle: {
            marginBottom: '40px',
            fontSize: '1.2rem',
            color: '#ccc',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
        },
        card: {
            backgroundColor: '#f9f9f9',
            borderRadius: '12px',
            padding: '30px 20px',
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.05)',
            transition: 'transform 0.3s ease',
        },
        icon: {
            fontSize: '2.5rem',
            marginBottom: '20px',
        },
        serviceName: {
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '10px',
            color: '#34495e',
        },
        description: {
            fontSize: '1rem',
            color: '#555',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Our Services</h1>
            <p style={styles.subtitle}>Empowering industries with future-ready solutions</p>

            <div style={styles.grid}>
                {servicesList.map((service, index) => (
                    <div
                        key={index}
                        style={styles.card}
                        onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-8px)')}
                        onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                    >
                        <div style={styles.icon}>{service.icon}</div>
                        <h3 style={styles.serviceName}>{service.title}</h3>
                        <p style={styles.description}>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;

