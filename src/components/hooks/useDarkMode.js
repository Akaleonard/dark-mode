import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValues) => {
    const [darkMode, setDarkMode] = useLocalStorage("dark-mode", initialValues);

    useEffect(() => {
        if (useLocalStorage) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode])
    return [darkMode, setDarkMode];
};
export default useDarkMode;