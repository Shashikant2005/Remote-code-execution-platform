import React from 'react'
import Main_editor from './Main_editor'
import Header from './Header'
import Home from './Home'
import Live_preview from './Live_preview'
import Whiteboardco from './Whiteboard'
import Error from './Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Component } from './Header2'
import Header3 from './Header3'
import Livepreview from './Livepreview'
import ContactUs from './ContactUs'
import Codepen from './Codepen'
import { ThemeProvider } from "@material-tailwind/react";


const router = createBrowserRouter(
  [
    {
       path:'/',
       element:
       <div>
          <Header3/>
          <Home/>
       </div> 
    },
    {
      path:'/main_editor',
      element:
      <div>
         <Header3/>
         <Main_editor/>
      </div> 
    },
    {
      path:'/live_preview',
      element:
      <div>
            <Header3/>
         {/* <Livepreview/> */}
          <ThemeProvider>
            <Codepen/>
          </ThemeProvider>
       
      </div>
    },
    {
      path:'/whiteboard',
      element:
      <div className=''>
           <Header3/>
         <Whiteboardco/>
      </div>
    },
    {
      path:'/contact',
      element:
      <div>
          <Header3/>
          <ContactUs/>
      </div>
    },
    {
      path:'*',
      element:
      <div>
          <Header3/>
         <Error/>
      </div>
    }

  ]
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Component/> */}
  
    </div>
  )
}

export default App