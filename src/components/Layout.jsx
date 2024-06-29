
import { Outlet } from "react-router-dom";
import Navbar from "./Navbars";
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'

export default class Layout extends Component {
    constructor(){
        super()
    this.state={
        progress:0
    }}
    setProgress (progress){
        this.setState({progress:progress})
    }
  render() {
    return (
      <div>
        <Navbar/>
         <LoadingBar
         color='#f11946'
         progress={this.state.progress}
         setProgress={this.setProgress}
       />
         <Outlet/>
      </div>
    )
  }
}


// function Layout(){
//     return(
//         <>
//         <Navbar/>
//         <LoadingBar
//         color='#f11946'
//         progress={10}
        
//       />
//         <Outlet/>
        
        
        
        
        
//         </>
//     )
// }
// export default Layout