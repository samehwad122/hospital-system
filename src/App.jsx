import { useState } from 'react'
import Home from './components/Home/Home'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NursesTable from './pages/NursesTable'
import BedsTable from './pages/BedsTable'

function App() {
const router = createBrowserRouter([{
path:'',
element:<Layout/>,
errorElement: <Error/>,
children:[
  {path:'', element:<Home/>},
  {path:'/nurses', element:<NursesTable/>},
  {path:'/beds', element:<BedsTable/>},
]

}])


  return (
    <main>
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
