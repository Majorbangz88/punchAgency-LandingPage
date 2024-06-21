// // import { ROUTES } from './router/index';
// import {Route, Routes, } from 'react-router-dom';
// import {HomePage} from "./pages/homePage";
// import Home from "./pages/home";
//
// function App() {
//   return (
//       // useRoutes(ROUTES)
//       <Routes>
//         <Route
//             path='/'
//             element={<HomePage />}
//             children={[
//                 {
//                     path: "",
//                     element: <Home />,
//                 }
//             ]}
//         >
//
//         </Route>
//       </Routes>
//   );
// }
//
// export default App;

// import { ROUTES } from './router/index';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from "./pages/homePage";
import Home from "./pages/home";

function App() {
    return (
        // useRoutes(ROUTES)
        <Routes>
            <Route path='/' element={<HomePage />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
}

export default App;
