import { useContext } from "react";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
// Context con Reducer
import { themeContext } from "./context/Context";

function App() {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

   return (
      <div
         className="App"
         style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
         }}
      >
         <Navbar />
         <Intro />
         {/* <Services /> */}
         {/* <Experience /> */}
         {/* <Works /> */}
         {/* <Portfolio /> */}
         {/* <Testimonials /> */}
         {/* <Contact /> */}
         {/* <Footer /> */}
      </div>
   );
}

export default App;
