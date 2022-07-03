import { createContext, useReducer } from "react";
//reducer
import { BoardReducer } from "../reducers/board";

export const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const [boards, dispatchBoard] = useReducer(BoardReducer, []);

  return (
    <BoardContext.Provider value={{ boards, dispatchBoard }}>
      {children}
    </BoardContext.Provider>
  );
};
export default BoardProvider;
