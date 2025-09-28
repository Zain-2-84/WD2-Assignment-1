import { useState, React, createContext } from "react";

// Thisis a global state now.
export const themeContext = createContext();

// Here we created a 'themeProvider' component, which has the 'value' keyword and '{ children }' which is like a dynamic prop / navigation / component.
export function themeProvider ({ children }) {
    // Here we created a 'theme' state, which we will use to update its default value between two values, light' and 'dark'.
    const [theme, setTheme] = useState('light');

    // Here we created an arrow function, which acts like a 'light on of switch'. It matches the default or initial value of 'theme' with the arrow function's condition's string. If it is a match, then the condition is true, so from 'light' it becomes 'dark'. And even during the secondth time, when 'dark' isn't equal to 'light', leading to a false condition, it is still changed  to 'light' because of the second condition.
    const themeToggler = () => {
        setTheme(
            (currentStatus) => (currentStatus === "light" ? "dark" : "light")
        );
    }

    return (
        <>
            {/* Here we are simply calling 'themeContext' component, alongwith 'provider' and 'value'. Because 'themeContext' is initially empty, 'value' fills the 'themeContext' with the desired items 'theme' & 'setTheme', then 'Provider' carries it from this file to whereever it is needed. */}

            {/* The 'children' is a dynamic navigation. It is basically records the components the user uses, when the user goes from one page (component) to another on UI. So only the components used by the user is written in the place of '{ children }'. Because in React, every component has a Quote Unquote { child } inside them by default. So by calling { children }, so only that component is rendered or refreshed, not all of them.  */}

            <themeContext.Provider value={{ theme, setTheme }}>
                { children }
            </themeContext.Provider>
        </>
    );
}