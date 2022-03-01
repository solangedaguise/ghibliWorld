import { Route, Routes } from "react-router-dom";
import Film from "../components/Film/Film.lazy";
import Home from "../components/Home/Home.lazy";

const Main = () => {
    return (         
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/films' element={<Film/>} />
      </Routes>
    );
    }
    export default Main;