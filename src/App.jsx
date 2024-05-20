import { useState } from "react";
import { FaMoon, FaRegSun } from "react-icons/fa";
import "./App.scss";
import Logo from "./components/Logo/Logo";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`hero ${theme === "dark" ? "hero--dark" : "hero--light"}`}>
      <div className="hero__container ">
        <Logo theme={theme} />
        <h1 className="hero__title">Assignment</h1>
        <button
          className={`theme-toggler ${
            theme == "light" ? "theme-toggler--light" : "theme-toggler--dark"
          }`}
        >
          {theme === "light" ? (
            <FaRegSun
              color={theme === "dark" ? "#ffffff" : "#ffffff"}
              size={40}
              onClick={() => {
                setTheme("dark");
              }}
            />
          ) : (
            <FaMoon
              color={theme === "dark" ? "white" : "black"}
              size={30}
              onClick={() => {
                setTheme("light");
              }}
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
