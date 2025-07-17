import React from 'react';

const Careers = () => {
    const jobList = [
        {
            title: 'Frontend Developer',
            location: 'Remote / Bangalore',
            type: 'Full-time',
            description: 'Work with React, Tailwind, and modern UI practices to build sleek web apps.',
        },
        {
            title: 'Backend Developer',
            location: 'Remote / Hyderabad',
            type: 'Full-time',
            description: 'Develop APIs and scalable server-side applications using Node.js and MongoDB.',
        },
        {
            title: 'UI/UX Designer',
            location: 'Remote / Mumbai',
            type: 'Contract',
            description: 'Design intuitive user experiences and attractive interfaces for web and mobile.',
        },
    ];

    const styles = {
        container: {
            maxWidth: '1000px',
            margin: 'auto',
            padding: '40px 20px',
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
            fontSize: '1.2rem',
            color: '#ccc',
        },
        jobCard: {
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            padding: '25px 20px',
            marginBottom: '20px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        },
        jobTitle: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#34495e',
        },
        jobMeta: {
            fontSize: '0.95rem',
            color: '#888',
            marginBottom: '10px',
        },
        jobDesc: {
            fontSize: '1rem',
            color: '#555',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Join Our Team</h1>
            <p style={styles.subtitle}>We're always looking for passionate professionals to grow with us.</p>

            {jobList.map((job, index) => (
                <div key={index} style={styles.jobCard}>
                    <div style={styles.jobTitle}>{job.title}</div>
                    <div style={styles.jobMeta}>
                        📍 {job.location} | 🕒 {job.type}
                    </div>
                    <div style={styles.jobDesc}>{job.description}</div>
                </div>
            ))}
        </div>
    );
};

export default Careers;
