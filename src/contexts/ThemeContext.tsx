"use client";

import {createContext, useContext } from "react";

type Theme = {
    colors: {
        primary: string;
        secondary: string;
    };
};

const defaultTheme: Theme = {
    colors: {
        primary: "#ddd",
        secondary: "#0000ff",
    },
}

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => useContext(ThemeContext);