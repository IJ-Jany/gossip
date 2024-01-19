import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./pages/home/Home"



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
   <Route path="/" element={<Login/>} />
   <Route path="/Registration" element={<Registration/>}/>
   <Route element={<RootLayout/>}>
   <Route path="/home" element={<Home/>}/>
   </Route>
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
