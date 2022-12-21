import React from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(false);
  const [location, setLocation] = React.useState({});
  const [page, setPage] = React.useState({ page: "", links: [] });

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const openSubmenu = (text, coordinates) => {
    const specifiedPage = sublinks.find((linkObj) => linkObj.page === text);
    setPage(specifiedPage);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => setIsSubmenuOpen(false);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
const useAppContext = () => React.useContext(AppContext);

export { AppProvider, useAppContext };
