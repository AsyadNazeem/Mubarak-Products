import React, { useState, useEffect } from "react";

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className={theme === "light" ? "light-theme" : "dark-theme"}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            {children}
        </div>
    );
};

export default ThemeProvider;

