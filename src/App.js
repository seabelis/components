// App.js

import React from "react";
import "./App.css";
import ArticleList from "./components/ArticleList";
import AwesomeAnimals from "./components/AwesomeAnimals";
// import OurCourses from "./components/OurCourses"

function App() {
  return (
    <div className = "App">
      <main>
        <AwesomeAnimals />
        <ArticleList />
      </main>
    </div>

  )
}  

export default App;