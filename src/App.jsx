
import './App.css'
import Home from './Components/Home/Home'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login/Login';
import Error from './Components/Home/Error';
import AddProduct from './Components/AddProduct';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
      path="/"
      element={<Home/>}
    >
    <Route
      path="/login"
      element={<Login></Login>}
    >
    </Route>
    <Route
      path="/addproduct"
      element={<AddProduct/>}
    >
    </Route>
      <Route
      path="*"
      element={<Error/>}
    >
    </Route>
    </Route>

    </Route>
  )
  )

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
