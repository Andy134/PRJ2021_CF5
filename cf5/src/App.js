import { createContext, useContext, useEffect, useState } from "react";
import "./App.scss";
import MyApp from "./pages/MyApp";
import { language_code } from "./utils/languages";

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

function AppProvider({ children }) {
  const [language, setLanguageState] = useState(language_code.vi);
  const [darkMode, setDarkModeState] = useState(false);

  useEffect(() => {
    let localDarkMode = localStorage.getItem("darkMode");
    if (localDarkMode) setDarkModeState(localDarkMode === "true");

    let localLanguage = localStorage.getItem("language");
    if (localLanguage) setLanguageState(localLanguage);
  }, []);

  function setDarkMode() {
    localStorage.setItem("darkMode", "" + !darkMode);
    setDarkModeState(!darkMode);
  }

  function setLanguage() {
    localStorage.setItem(
      "language",
      language === language_code.vi ? language_code.en : language_code.vi
    );
    setLanguageState(
      language === language_code.vi ? language_code.en : language_code.vi
    );
  }

  const value = {
    language,
    darkMode,
    setLanguage,
    setDarkMode,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function App() {
  return (
    <AppProvider>
      <MyApp />
    </AppProvider>
  );
}

export default App;
