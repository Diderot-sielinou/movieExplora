window.reactRouterExperimentalFlags = { v7_startTransition: true };
   

import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

export const MovieData = ({ children }) => {
  const [treding, setTreding] = useState([]);
  const [searches, setSearches] = useState([]);
  const [action, setAction] = useState([]);
  const [romance, setRomance] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [favorie, setfavorie] = useState([]);
  return (
    <DataContext.Provider
      value={{favorie,setfavorie,action,setAction,romance,setRomance,comedy,setComedy, treding, searches, setSearches, setTreding }}
    >
      {children}
    </DataContext.Provider>
  );
};

MovieData.propTypes = {
  children: PropTypes.node.isRequired,
};
