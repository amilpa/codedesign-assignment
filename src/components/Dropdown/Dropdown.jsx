import { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaCheck } from "react-icons/fa";
import styles from "./Dropdown.module.scss";
export default function Dropdown({ theme, options, upward }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [input, setInput] = useState(selectedOption.value);

  const handleClick = () => {
    setIsEditing(true);
    setIsOpen(!isOpen);
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      setIsEditing(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setInput(selectedOption.value);
  }, [selectedOption]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setFilteredOptions(
      options.filter((option) =>
        option.value.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className={upward ? styles.upward : ""} ref={dropdownRef}>
      {isEditing ? (
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onBlur={() => setIsEditing(false)}
          className={
            styles.dropdownButton +
            ` ${theme === "dark" ? styles.dropdownDark : styles.dropdownLight}`
          }
        />
      ) : (
        <button
          className={
            styles.dropdownButton +
            ` ${theme === "dark" ? styles.dropdownDark : styles.dropdownLight}`
          }
          onClick={handleClick}
        >
          <span>{selectedOption.value}</span>
          <FaAngleDown />
        </button>
      )}

      <div
        className={`${
          upward ? styles.dropdownContentUpward : styles.dropdownContentDownward
        } ${isOpen ? styles.open : ""}`}
      >
        {filteredOptions.map((option) => (
          <button
            key={option.id}
            className={
              styles.dropdownItem +
              ` ${theme === "dark" ? styles.dropdownDark : styles.dropdownLight}
              + ${option.disabled ? styles.disabled : ""}
              `
            }
            onClick={() => {
              setSelectedOption(option);
              setIsOpen(false);
              setIsEditing(false);
              setFilteredOptions(options);
            }}
          >
            <FaCheck className={option.checked ? "" : styles.hide} size={15} />
            <span>
              {option.icon ? option.icon : ""}
              {option.value}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
