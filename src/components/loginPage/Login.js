import Navbar from "../../components/navBar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function LoginPage(props) {
     const [usersData, setUserData] = useState({}); // State to store user data

     useEffect(() => {
          const userDataParams = {
               username: "Het_2005"
          };
          const queryString = new URLSearchParams(userDataParams).toString();
          axios.get("http://localhost:3010/user/getUser?" + queryString)
               .then((response) => {
                    // Set user data
                    setUserData(response.data.userData);
               })
               .catch((error) => {
                    console.log(error);
               });
     }, []); // Empty dependency array to run only once
     return(
          <>
               <Navbar isLogIn="1" logUser={usersData}></Navbar>
          </>
     )
}