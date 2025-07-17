import React, { Component } from 'react';
import Node from './Node.png'; // Ensure the image exists in your src folder

export default class Stream extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.textSection}>
                    <h3 style={styles.heading}>
                        <b>Comprehensive 3D Digitalization</b>
                    </h3>
                    <p style={styles.paragraph}>
                        Revolutionizing operational efficiency and sustainability in various industries,
                        we provide updated engineering documentation, optimizing planning and execution
                        for modifications and upgrades. We support brownfield facilities, ensuring
                        compliance and protection, resulting in streamlined maintenance and cost savings.
                        As a vital component in project management, As-Built contributes to efficient
                        project execution.
                    </p>
                </div>

                <div style={styles.imageSection}>
                    <img src={Node} alt="Node" style={styles.image} />
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '50px 10%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundcolor: '#282c34',

        gap: '30px',
    },
    textSection: {
        flex: '1 1 60%',
        textAlign: 'left',
    },
    heading: {
        fontSize: '2.2rem',
        marginBottom: '20px',
        background: 'linear-gradient(90deg, #1abc9c, #16a085)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        fontWeight: 'bold',
    },
    paragraph: {
        fontSize: '1.1rem',
        lineHeight: '1.7',
        color: 'white',
        textAlign: 'justify',
    },
    imageSection: {
        flex: '1 1 35%',
        textAlign: 'center',

    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    },
};
