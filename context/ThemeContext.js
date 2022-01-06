import { createContext } from "preact";
import { parseCookies, setCookie } from "nookies";

export const THEME_DARK = "dark";
export const THEME_LIGHT = "light";
const cookies = parseCookies();

const ThemeContext = createContext(cookies.theme || THEME_LIGHT);

export default ThemeContext;
