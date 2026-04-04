import React from "react";

const ThemeSelector = ({ colorTheme, setColorTheme }) => {
    const themes = [
        { id: "midnight", icon: "fas fa-briefcase", title: "Professional Dark" },
        { id: "cyber", icon: "fas fa-microchip", title: "Cyber Blue" },
        { id: "aurora", icon: "fas fa-sparkles", title: "Aurora Purple" },
        { id: "emerald", icon: "fas fa-leaf", title: "Emerald Green" },
        { id: "rose", icon: "fas fa-heart", title: "Rose Pink" },
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
