import { createContext } from "react";

const UserContext = createContext({
  total_count: 0,
  incomplete_results: true,
  items: [],
});

export default UserContext;
