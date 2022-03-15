import { useState } from "react";

const useSearchHistory = () => {
  const [history, setHistory] = useState([]);
  // Implement custom hook below
  // This hook is responsible for tracking the search history
  // And the functionality to go back in search history one at a time
  // Similar to a `undo` functionality
  return {
    history,
    addHistory: (item) => {
      setHistory((prev) => [...prev, item]);
    },
    undoHistory: () => {},
    forceUpdateHistory: () => {}
  };
};

export default useSearchHistory;
