import { ChangeEvent, useState } from "react";
import { Item } from "../types/stateTypes";
import "../styles/AppBar.css";
import { useMediaQuery } from "../hooks/useMediaQuery";

const AppBar = ({ handleSubmit }: { handleSubmit: (item: Item) => void }) => {
  const [inputValue, setInputValue] = useState<Item>({
    id: 1,
    value: "",
  });

  const [isWrong, setIsWrong] = useState<{
    type: "digit-lack" | "empty";
  } | null>(null);

  const isMobile = useMediaQuery("(max-width: 450px)");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, value: e.target.value });

    if (!e.target.value.trim()) {
      setIsWrong({ type: "empty" });
      return;
    }

    if (e.target.value.match(/\d/)) {
      setIsWrong({ type: "digit-lack" });
      return;
    }

    setIsWrong(null);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { value } = inputValue;

    if (isWrong) {
      return;
    }

    handleSubmit({ id: inputValue.id++, value: value.trim() });
    setInputValue({ ...inputValue, value: "" });
  };

  return (
    <>
      <h1 className={isMobile ? "h1-mobile" : ""}>To Do List</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="addItem">Add item</label>
        <div className={isMobile ? "wrapper-mobile" : "wrapper"}>
          <input
            name="addItem"
            onChange={handleChange}
            value={inputValue.value}
            placeholder="Item name"
            className={isMobile ? "input-mobile" : "input"}
          />
          <input
            type="submit"
            value="Submit"
            className={isMobile ? "submit-btn-mobile" : "submit-btn"}
          />
        </div>
        <div>
          {isWrong && (
            <p className="wrongInput">
              {isWrong.type === "empty"
                ? "Input can't be empty"
                : "Input can contain only characters"}
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default AppBar;
