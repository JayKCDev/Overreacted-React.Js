import data from "./data";
import Article from "./Article";
import React, { useState, useEffect } from "react";

const fetchTheme = () => {
  let theme = "dark-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(fetchTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            {theme === "dark-theme"
              ? "Switch to Light Theme"
              : "Switch to Dark Theme"}
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((article) => {
          return <Article key={article.id} article={article} />;
        })}
      </section>
    </main>
  );
}

export default App;
