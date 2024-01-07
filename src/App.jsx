import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
   <Route path="/" element={<Login/>} />
   <Route path="/Registration" element={<Registration/>}/>
      </>
    )
  )

  return (
    <>
     <RouterProvider
    router={router} 
  />
    </>
  )
}

export default App
