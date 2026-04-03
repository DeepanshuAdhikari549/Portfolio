import React from "react";

const ThemeSelector = ({ colorTheme, setColorTheme }) => {
    const themes = [
        { id: "blue", icon: "fas fa-palette", title: "Blue Theme" },
        { id: "green", icon: "fas fa-leaf", title: "Green Theme" },
        { id: "purple", icon: "fas fa-gem", title: "Purple Theme" },
        { id: "orange", icon: "fas fa-fire", title: "Orange Theme" },
    ];

    return (
        <div className="theme-selector" id="themeSelector">
            {themes.map((theme) => (
                <button
                    key={theme.id}
                    className={`theme-btn ${colorTheme === theme.id ? "active" : ""}`}
                    title={theme.title}
                    onClick={() => setColorTheme(theme.id)}
                    data-theme={theme.id}
                >
                    <i className={theme.icon}></i>
                </button>
            ))}
        </div>
    );
};

export default ThemeSelector;
