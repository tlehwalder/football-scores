import React from "react";
import { parseCookies, setCookie } from "nookies";

export const THEME_DARK = "dark";
export const THEME_LIGHT = "light";
const cookies = parseCookies();

const ThemeContext = React.createContext(cookies.theme || THEME_LIGHT);

export default ThemeContext;
