import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import News from './components/News.jsx'
import Layout from './components/Layout.jsx'
let pgsize=15;
// const[progress,setState]=useState(0)
// function setProgress(progress){
//   setState({progress})
// }
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route exact path='/' element={<Layout/>}>
      {/* //nesting */}
      <Route exact path='' element={<News key="general"  pageSize={pgsize} country={"in"} category={"general"}/>}/>
      
      <Route exact path='Business' element={<News  key="Business" pageSize={pgsize} country={"in"} category={"Business"}/>}/>
      <Route exact path='Entertainment' element={<News  key="Entertainmen" pageSize={pgsize} country={"in"} category={"Entertainment"}/>}/>
      <Route exact path='Health' element={<News  key="Health" pageSize={pgsize} country={"in"} category={"Health"}/>}/>
      <Route exact path='Science' element={<News  key="Science" pageSize={pgsize} country={"in"} category={"Science"}/>}/>
      <Route exact path='Sports' element={<News key="Sports" pageSize={pgsize} country={"in"} category={"Sports"}/>}/>
      <Route exact path='Technology' element={<News  key="Technology" pageSize={pgsize} country={"in"} category={"Technology"}/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
