import { createContext, useState } from "react";

export const themes = {

    light: {
        color: "#3e58af",
        backgroundColor: "#fff",
        line: "2px solid #3e58af",
        namePokemon: "#3e58af",
        shadowCard: "0px 0px 5px #3e58af",
    },
    dark: {
        color: "#fac705",
        backgroundColor: "#000",
        line: "2px solid #fac705",
        namePokemon: "#fac705",
        shadowCard: "0px 0px 5px #fac705",
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme] = useState(themes.light)

    return (

        <ThemeContext.Provider value={{theme, setTheme}}>

            {props.children}

        </ThemeContext.Provider>

    )

}