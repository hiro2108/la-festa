import { useState, useEffect } from 'react';

const ToggleButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check for user preference in localStorage or system settings
        const preferredTheme = window.localStorage.getItem('dark-mode');
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return preferredTheme === 'true' || prefersDarkMode;
    });

    useEffect(() => {
        // Apply theme based on isDarkMode state
        const body = document.body;
        const lightTheme = {
            backgroundColor: '#fff',
            color: 'black',
        };
        const darkTheme = {
            backgroundColor: '#333',
            color: 'white',
        };
        body.style.backgroundColor = isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor;
        body.style.color = isDarkMode ? darkTheme.color : lightTheme.color;

        // Persist user preference in localStorage (optional)
        window.localStorage.setItem('dark-mode', isDarkMode.toString());
    }, [isDarkMode]);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>
            <label className={`toggle-root ${isDarkMode ? 'isDark' : ''}`} onClick={handleToggle}>
                <span className='toggle-inner'></span>
            </label>
        </div>
    );
};

export default ToggleButton;
