import React from "react";
import Contact from "./components/Contact";
import Info from "./components/Info";
import Photo from "./components/Photo";
import "./styles.css"

const App = () => {
    return (
        <main className = "app">
            <Photo />
            <Info />
            <Contact />
        </main>
    );
}

export default App;
