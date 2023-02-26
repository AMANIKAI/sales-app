import React from 'react';
import '../styles/header.css';
import Navbar from './Navbar';

function Header() {
   return (
       <React.Fragment>
      
       <div className='section-1'>
               <div className="container">
                   <div className="row">
                       <Navbar />  {/*Added Navbar component here */}
                      
                       <div className="col-12">
                           <div className="title d-flex">
                               <div className="justify-content-center align-self-center w-100">
                                   <div className="big-title text-center">Your one stop place for all your vacation needs</div>
                                   <div className="title-desc text-center">
                                      We have the best hotels and destinations for all your holiday needs. <br/>
                                       Your comfort and luxury is our priority.                                
                                   </div>
                               </div> 
                           </div>
                       </div>

                       <div className="col-12">
                           <div className="text-center chevron-down">
                               <a href="#products">
                                   <i className="fa fa-chevron-down" aria-hidden="true"></i>
                               </a>
                           </div>

                       </div>

                   </div>
               </div>

           </div>
       </React.Fragment>
   )
}

export default Header;