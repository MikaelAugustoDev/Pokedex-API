import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Pokemon } from "./infoPokemons";

const AppRoute = () => {

    return (

        <BrowserRouter>
        
            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/pokemon/:id" element={<Pokemon/>} />
                

            </Routes>

        </BrowserRouter>

    )

}

export { AppRoute }