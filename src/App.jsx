import { useState } from 'react'
import Home from './components/Home/Home'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cases from './pages/Cases'

function App() {
const router = createBrowserRouter([{
path:'',
element:<Layout/>,
errorElement: <Error/>,
children:[
  {path:'', element:<Home/>},
  {path:'/cases', element:<Cases/>},



]

}])


  return (
    <main>
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
