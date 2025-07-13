// main.jsx or index.js
import App from "@/App";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ThemeProvider = () => {
    const theme = useSelector((state) => state.theme.theme);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme]);

    return <App />;
};

export default ThemeProvider;
