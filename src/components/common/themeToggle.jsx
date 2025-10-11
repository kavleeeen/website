import React,{useState,useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun,faMoon} from "@fortawesome/free-solid-svg-icons";
import "./styles/themeToggle.css";

const ThemeToggle=() => {
  const [isDark,setIsDark]=useState(() => {
    const savedTheme=localStorage.getItem('theme');
    return savedTheme==='dark'||(!savedTheme&&window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const root=document.documentElement;
    if(isDark) {
      root.setAttribute('data-theme','dark');
      root.classList.add('dark-theme');
    } else {
      root.setAttribute('data-theme','light');
      root.classList.remove('dark-theme');
    }
    localStorage.setItem('theme',isDark? 'dark':'light');
  },[isDark]);

  const toggleTheme=() => {
    setIsDark(!isDark);
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark? 'light':'dark'} mode`}
    >
      <FontAwesomeIcon
        icon={isDark? faSun:faMoon}
        className="theme-icon"
      />
    </button>
  );
};

export default ThemeToggle;



