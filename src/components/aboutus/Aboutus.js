import Navbar from "../navBar/Navbar"
import { useLocation } from 'react-router-dom';

export default function Aboutus(props){
     const location = useLocation();
     const isLogedIn = location.state.isLogedIn;
     console.log(props.isLogedIn)
     return(
          <>
               <Navbar isLogedIn={isLogedIn}></Navbar>
               <h4></h4>
          </>
     )
}