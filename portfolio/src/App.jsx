import { Outlet } from "react-router-dom";
import "./App.css";
import { Header, Home, Footer } from "./components";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
