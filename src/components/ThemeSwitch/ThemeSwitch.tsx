import { useEffect, useState } from "react";

import "./ThemeSwitch.css";

const ThemeSwitch = () => {
    const DEFAULT_THEME = "dark";
    const [theme, setTheme] = useState(`${DEFAULT_THEME}`);


    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        const isValid = localTheme === "light" || localTheme === "dark";
        isValid && setTheme(localTheme);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
    }, [theme]);

    const changeTheme = (themeColor: string) => {
        // Change the theme to specified value
        const isValid = themeColor === "light" || themeColor === "dark";
        if(isValid) {
            // save to local storage
            window.localStorage.setItem("theme", themeColor);
        }
        setTheme(isValid ? themeColor : DEFAULT_THEME);
    }

    return (
        <div className="theme-switcher-wrapper">
            <div className="theme-switch-container">
                <div className="theme-switch">
                    <span className="theme-switch__text">Dark Mode</span>
                    <label className="theme-switch__label">
                        <input
                            type="checkbox"
                            className="theme-switch__input"
                            checked={theme === "dark"}
                            onChange={() => changeTheme(theme === "dark" ? "light" : "dark")}
                        />
                        <span className="theme-switch__slider"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}


export default ThemeSwitch;