import { useReducer } from "react";
import { themeContext } from './Context';

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