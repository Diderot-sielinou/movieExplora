import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

export const MovieData = ({ children }) => {
  const [treding, setTreding] = useState([]);
  const [searches, setSearches] = useState([]);
  const [action, setAction] = useState([]);
  const [romance, setRomance] = useState([]);
  const [comedy, setComedy] = useState([]);
  return (
    <DataContext.Provider
      value={{action,setAction,romance,setRomance,comedy,setComedy, treding, searches, setSearches, setTreding }}
    >
      {children}
    </DataContext.Provider>
  );
};

MovieData.propTypes = {
  children: PropTypes.node.isRequired,
};
