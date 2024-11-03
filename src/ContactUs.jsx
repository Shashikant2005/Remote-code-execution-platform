import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <p><strong>Name:</strong> Shashikant Jadhav</p>
            
            <h3>Profiles:</h3>
            <ul>
                <li>
                    <a href="https://leetcode.com/your-profile" target="_blank" rel="noopener noreferrer">
                        LeetCode Profile
                    </a>
                </li>
                <li>
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                        GitHub Profile
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                        LinkedIn Profile
                    </a>
                </li>
            </ul>
            
            <h3>Contact Details:</h3>
            <p><strong>Email:</strong> your.email@example.com</p>
            <p><strong>Address:</strong> Your Address Here</p>
            <p><strong>Phone:</strong> (Your Phone Number)</p>
        </div>
    );
};


export default ContactUs;
