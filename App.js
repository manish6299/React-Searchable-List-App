import React, { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  const items = [
    "The Great Gatsby",
    "Inception",
    "Interstellar",
    "React Guide",
    "Data Science Handbook",
    "To Kill a Mockingbird",
    "Avengers: Endgame",
    "Python for Beginners",
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2>Item List with Search</h2>
      <input
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />
      <ul style={styles.list}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
};

export default App;
