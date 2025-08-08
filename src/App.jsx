import { useState } from 'react'
import Home from './components/Home/Home'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cases from './pages/Cases'
import NursesTable from './pages/NursesTable'
import BedsTable from './pages/BedsTable'
import Doctors from './pages/DoctorsTable'
import Patients from './pages/Patients';
import AppProviders from './providers/AppProviders'
function App() {
const router = createBrowserRouter([{
path:'',
element:<Layout/>,
errorElement: <Error/>,
children:[
  {path:'', element:<Home/>},
  {path:'/cases', element:<Cases/>},

  {path:'/nurses', element:<NursesTable/>},
  {path:'/beds', element:<BedsTable/>},
  {path:'/doctors', element:<Doctors/>},
  {path:'/patients', element:<Patients/>},
]

}])


  return (
    <AppProviders>
    <main>
      <RouterProvider router={router}/>
    </main>
    </AppProviders>
  )
}

export default App
