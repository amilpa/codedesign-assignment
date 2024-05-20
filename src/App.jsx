import { useState } from "react";
import { AiFillBulb } from "react-icons/ai";
import { FaMoon, FaRegSun } from "react-icons/fa";
import "./App.scss";
import Dropdown from "./components/Dropdown/Dropdown";
import Logo from "./components/Logo/Logo";

function App() {
  const [theme, setTheme] = useState("light");
  const options = [
    { id: 1, value: "Option 1", disabled: false, checked: false, icon: false },
    { id: 2, value: "Option 2", disabled: true, checked: true, icon: false },
    {
      id: 3,
      value: "Option 3",
      disabled: false,
      checked: true,
      icon: <AiFillBulb />,
    },
  ];

  return (
    <div className={`hero ${theme === "dark" ? "hero--dark" : "hero--light"}`}>
      <div className="hero__container ">
        <div className="hero__logo">
          <Logo theme={theme} />
        </div>
        <h1 className="hero__title">Assignment</h1>
        <button
          className={`theme-toggler ${
            theme == "light" ? "theme-toggler--light" : "theme-toggler--dark"
          }`}
        >
          {theme === "light" ? (
            <FaRegSun
              color={theme === "dark" ? "#ffffff" : "#ffffff"}
              size={30}
              onClick={() => {
                setTheme("dark");
              }}
            />
          ) : (
            <FaMoon
              color={theme === "dark" ? "white" : "black"}
              size={25}
              onClick={() => {
                setTheme("light");
              }}
            />
          )}
        </button>
        <div className="hero__dropdown">
          <Dropdown theme={theme} options={options} upward={true} />
          <Dropdown theme={theme} options={options} upward={false} />
        </div>
      </div>
    </div>
  );
}

export default App;
