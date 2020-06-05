import React from "react";

export const THEME_DARK = "dark";
export const THEME_LIGHT = "light";

const ThemeContext = React.createContext(THEME_LIGHT);

export default ThemeContext;
