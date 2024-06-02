import { createContext, useReducer } from "react";

export const themeContext = createContext();

const initialState = { darkMode: false };

const themeReducer = (state, action) => {

   switch (action.type) {
      case "toggle":
         return { darkMode: !state.darkMode };

      default:
         return state;
   }
};

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
   const [ state, dispatch ] = useReducer(themeReducer, initialState);

return (
      <themeContext.Provider value={{ state, dispatch }}>
         {children}
      </themeContext.Provider>
   );
};

// Notas:
// 1. Aquí usamos "Context" y "Reducer" para usar el reducer dentro de todo el contexto creado
