import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from "./components/Menubar/Menubar";
import AllProducts from "./components/AllProducts/AllProducts";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    const [count, setCount] = useState(0);
    function cartCount() {
        setCount(count + 1);
    }
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="App">
            <Menubar count={count} />
            <AllProducts cartCount={cartCount} />
        </div>
    );
}

export default App;
