
import { Route, Routes } from 'react-router-dom';
import { HomePage } from "./pages/homePage";
import Home from "./pages/home";

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
}

export default App;
