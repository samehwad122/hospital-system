import { useState } from 'react'
import Home from './components/Home/Home'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
const router = createBrowserRouter([{
path:'',
element:<Layout/>,
errorElement: <Error/>,
children:[
  {path:'', element:<Home/>},



]

}])


  return (
    <main>
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
