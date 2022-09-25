import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import { useState, useEffect } from "react";

function App() {
  //alt+z to wrap code

  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
       fetcher();
    }, 1000);
  }, []);

  function fetcher() {
    fetch(API_URL)
    .then((res) => {
    if (res.ok) {
        return res.json();
    }
    throw new Error("No data recieved");
    })
    .then((data) => setItems(data))
    .catch((error) => {
    setErrorMessage(error);
    })
    .finally(() => {
        setIsLoading(false)
    })
    
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const myList = [...items, myNewItem];
    setItems(myList);
  };

  const checkBox = (id) => {
    //from our key
    const myList = items.map((myItem) =>
      myItem.id === id ? { ...myItem, checked: !myItem.checked } : myItem
    );
    setItems(myList);
  };

  const deleteBox = (id) => {
    const myList = items.filter((myItem) => myItem.id !== id);
    setItems(myList);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <SearchItem search={search} setSearch={setSearch} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <main>
        {isLoading && <p>Loading Items....</p>}
        {errorMessage && (
          <p style={{ color: "red" }}>{`${errorMessage}`}</p>
        )}
        {!errorMessage && !isLoading && <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLocaleLowerCase())
          )}
          checkBox={checkBox}
          deleteBox={deleteBox}
        />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
