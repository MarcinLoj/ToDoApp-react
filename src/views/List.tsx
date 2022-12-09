import { Fragment } from "react";
import { Item } from "../types/stateTypes";
import "../styles/List.css";

type ListProps = {
  items: Item[];
  handleDelete: (item: Item) => void;
};

const List = ({ items, handleDelete }: ListProps) => {
  const deleteItem = (itemToDelete: Item) => {
    handleDelete(itemToDelete);
  };

  return (
    <>
      <ul>
        {items.map((item: Item) => (
          <>
            <li key={item.id}>
              <p>{item.value}</p>
              <button onClick={() => deleteItem(item)}>X</button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default List;
