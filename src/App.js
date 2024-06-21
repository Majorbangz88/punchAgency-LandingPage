// import { ROUTES } from './router/index';
import {Route, Routes, } from 'react-router-dom';
import {HomePage} from "./pages/homePage";

function App() {
  return (
      // useRoutes(ROUTES)
      <Routes>
        <Route
            path='/'
            element={<HomePage />}
            children={[

            ]}
        >

        </Route>
      </Routes>
  );
}

export default App;
