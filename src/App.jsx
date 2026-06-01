import { useState, useEffect } from 'react';
import './App.css'; // This connects your CSS file!

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    const copyPhone = (event) => {
        event.preventDefault();
        const myPhoneNumber = "0956-998-7366";
        navigator.clipboard.writeText(myPhoneNumber).then(() => {
            alert("Phone number copied to clipboard: " + myPhoneNumber);
        }).catch(() => {
            alert("Failed to copy phone number.");
        });
    };

    const comingSoon = () => {
        alert("Coming soon!");
    };

    return (
        <div className={`mainDiv ${isDarkMode ? 'dark' : ''}`}>
            
            {/* Added Dark Mode Button aligned to the right */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <button 
                    className="theme-toggle" 
                    onClick={() => setIsDarkMode(!isDarkMode)}
                >
                    {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
            </div>

            <div className="leadDiv">
                <h2>Profile</h2>
            </div>
            <div className="infoSec">
                <div className="headDiv">
                    <div className="containerDiv" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src="./img/profile.jpg" alt="Profile Picture" />
                    </div>
                    <div className="containerDiv" style={{ textAlign: 'center' }}>
                        <h1>
                            hi! <span style={{ color: 'rgb(133, 67, 41)' }}>i'm raymart</span>
                        </h1>
                        <h2><span style={{ color: '#666666' }}>information technology student and developer</span></h2>
                    </div>
                </div>
                
                <div className="descDiv">
                    <div className="containerDiv">
                        <h3>Technical Skills:</h3>
                        <ul>
                            <li>Python and GDScript</li>
                            <li>PC Hardware & Troubleshooting</li>
                            <li>3D Game Development</li>
                        </ul>
                    </div>
                    
                    <div className="containerDiv">
                        <h3>Contact Information</h3>
                        <p>Location: Bulacan</p>
                        
                        <div className="social-icons">
                            <a href="#" id="phoneIcon" title="Copy Phone Number" onClick={copyPhone}>
                                <img src="./img/phone-icon.svg" alt="Phone" />
                            </a>
                            
                            <a href="mailto:rmartdg@gmail.com" title="Email Me">
                                <img src="./img/email-icon.svg" alt="Email" />
                            </a>
                            
                            <a href="https://www.facebook.com/rmart.dg" target="_blank" rel="noreferrer" title="Facebook">
                                <img src="./img/facebook-icon.svg" alt="Facebook" />
                            </a>
                            
                            <a href="https://www.instagram.com/rt.dg5/" target="_blank" rel="noreferrer" title="Instagram">
                                <img src="./img/instagram-icon.svg" alt="Instagram" />
                            </a>
                            
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
                                <img src="./img/linkedin-icon.svg" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="leadDiv" style={{ marginTop: '15px' }}>
                <h2>Projects</h2>
            </div>
            <div className="projects-grid">
                
                <div className="project-item" onClick={comingSoon}>
                    <img src="./img/preview.png" alt="Project 1 Preview" />
                    <h4>Project 1</h4>
                </div>
                
                <div className="project-item" onClick={comingSoon}>
                    <img src="./img/preview.png" alt="Project 2 Preview" />
                    <h4>Project 2</h4>
                </div>

            </div>
        </div>
    );
}

export default App;