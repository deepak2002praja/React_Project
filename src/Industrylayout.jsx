import React, { useState, useEffect } from 'react';
import JS from './JS.png';

const IndustryLayout = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        container: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',  // Column on mobile
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isMobile ? '30px 20px' : '40px 10%',
            backgroundColor: '#282c34',
            gap: '30px',
            flexWrap: 'wrap',
        },
        image: {
            flex: '1',
            maxWidth: isMobile ? '100%' : '400px',
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            marginBottom: isMobile ? '20px' : '0',
        },
        textSection: {
            flex: '2',
            textAlign: 'left',
            color: '#fff',
        },
        heading: {
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '20px',
            background: 'linear-gradient(90deg, #ff416c, #ff4b2b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
        },
        paragraph: {
            fontSize: '1.1rem',
            lineHeight: '1.7',
            textAlign: 'justify',
        },
    };

    return (
        <div style={styles.container}>
            {!isMobile && (
                <div>
                    <img src={JS} alt="Industry Visual" style={styles.image} />
                </div>
            )}

            <div style={styles.textSection}>
                <h3 style={styles.heading}>Future Ready Businesses</h3>
                <p style={styles.paragraph}>
                    We collaborated with Nippon Steel Engineering for a groundbreaking Industry 4.0 project,
                    designing a virtual reality walk-through experience of a steel plant environment enhanced with
                    interactive elements. This provided an immersive industrial experience and paved the way for
                    enhanced operational efficiency and productivity, a reduced carbon footprint, and a decreased
                    possibility of injuries.
                </p>
            </div>

            {isMobile && (
                <div>
                    <img src={JS} alt="Industry Visual" style={styles.image} />
                </div>
            )}
        </div>
    );
};

export default IndustryLayout;
