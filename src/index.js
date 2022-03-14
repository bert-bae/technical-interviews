/* eslint-disable */
import { useState } from "react";
import HistoryList from "./components/history-list/history-list";
import debounce from "lodash.debounce";
import "./styles.css";

const DEBOUNCE_DELAY = 500;

export default function App() {
  const [str, setStr] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  return (
    <div className="App">
      <h1>Search Something</h1>
      <input
        type="text"
        value={str}
        onChange={(e) => {
          setStr(e.target.value);
        }}
        placeholder={"Type something..."}
      />

      <button
        type="button"
        onClick={() => setSearchHistory((i) => [...i, str])}
      >
        Search
      </button>

      <button
        type="button"
        onClick={() => {
          const newHistory = searchHistory;
          newHistory.pop();
          setSearchHistory(newHistory);

          const result = newHistory.length;
          if (result == 0) {
            setStr(null);
          } else {
            setStr(newHistory[newHistory.length - 1]);
          }
        }}
      >
        Undo
      </button>

      <h3>Search History</h3>
      <HistoryList
        history={searchHistory}
        onItemClick={(search) => {
          setStr(search);
        }}
      />
    </div>
  );
}
