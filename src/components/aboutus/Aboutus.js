// import Navbar from "../navBar/Navbar";
// import nilayImg from "../../assests/nilay.jpg";
// import shivImg from "../../assests/shiv.jpg";
// import kalluImg from "../../assests/kallu.jpg";

import Navbar from "../../components/navBar/Navbar";
// export default function Aboutus() {
//      return (
//           <>
//                <Navbar />
//                <div className="container AboutCont">
//                     <div className="about-text abt">
//                          <h2 className="about">Welcome to Student Collaboration System</h2><br />
//                          <p>"Our student collaboration project is a dynamic platform where innovative ideas are born and nurtured.
//                               We empower students to collaborate, innovate, and create impactful solutions. Through our project,
//                               students develop essential skills, create valuable connections, and make a difference in the world. Join
//                               us in shaping the future of education and innovation!"</p>
//                          <p></p>
//                     </div>
//                     <br />
//                     <hr /><br />

//                     <div className="space">
//                          <div className="row">
//                               <div className="col-4">
//                                    <div className="card-client">
//                                         <div className="user-picture">
//                                              <img src={nilayImg} width="150" height="120" />
//                                              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
//                                                   <path
//                                                        d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z">
//                                                   </path>
//                                              </svg>
//                                         </div>
//                                         <p className="name-client" style={{letterSpacing: "1.4px"}}> Nilay Patel
//                                              <span style={{letterSpacing: "1px"}}>Frontend
//                                              </span>
//                                         </p>
//                                         <div className="social-media">
//                                              <a href="" target="_blank">
//                                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                                                        className="bi bi-twitter-x" viewBox="0 0 16 16">
//                                                        <path
//                                                             d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
//                                                   </svg>
//                                                   <span className="tooltip-social">Twitter</span>
//                                              </a>
//                                              <a href="https://github.com/nilayptlGitHub" target="_blank">
//                                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                                                        className="bi bi-github" viewBox="0 0 16 16">
//                                                        <path
//                                                             d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
//                                                   </svg>
//                                                   <span className="tooltip-social">GitHub</span>
//                                              </a>

//                                              <a href="https://www.linkedin.com/in/patel-nilay-a29784262" target="_blank">
//                                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
//                                                        <path
//                                                             d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
//                                                        </path>
//                                                   </svg>
//                                                   <span className="tooltip-social">LinkedIn</span>
//                                              </a>
//                                         </div>
//                                    </div>
//                               </div>
//                               <div className="col-4">
//                                    <div className="card-client">
//                                         <div className="user-picture">
//                                              <img src={shivImg} width="150" height="120" />
//                                              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
//                                                   <path
//                                                        d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z">
//                                                   </path>
//                                              </svg>
//                                         </div>
//                                         <p className="name-client" style={{letterSpacing: "1.4px"}}> Shivam Patel
//                                              <span style={{letterSpacing: "1px"}}>Frontend
//                                              </span>
//                                         </p>
//                                         <div className="social-media">
//                                              <a href="https://x.com/Shiivampatel_17?t=w7IM1YSe6GckDEKaSvjbgQ&s=08 " target="_blank">
//                                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                                                        className="bi bi-twitter-x" viewBox="0 0 16 16">
//                                                        <path
//                                                             d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
//                                                   </svg>
//                                                   <span className="tooltip-social">Twitter</span>
//                                              </a>
//                                              <a href="https://github.com/shivpatel2004" target="_blank">
//                                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                                                        className="bi bi-github" viewBox="0 0 16 16">
//                                                        <path
//                                                             d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
//                                                   </svg>
//                                                   <span className="tooltip-social">GitHub</span>
//                                              </a>

//                                              <a href="https://www.linkedin.com/in/shivam-patel-b19929250" target="_blank">
//                                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
//                                                        <path
//                                                             d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
//                                                        </path>
//                                                   </svg>
//                                                   <span className="tooltip-social">LinkedIn</span>
//                                              </a>
//                                         </div>
//                                    </div>
//                               </div>

//                               <div className="col-4">
//                                    <div className="card-client">
//                                         <div className="user-picture">
//                                              <img src={kalluImg} width="150" height="120" />
//                                              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
//                                                   <path
//                                                        d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z">
//                                                   </path>
//                                              </svg>
//                                         </div>
//                                         <p className="name-client" style={{letterSpacing: "1.4px"}}> Shivang Patel
//                                              <span style={{letterSpacing: "1px"}}>Fullstack
//                                              </span>
//                                         </p>
//                                         <div className="social-media">
//                                              <a href="https://x.com/Shivang02052005?t=Gu-Lo8ymrP_M-OIFaXpV5w&s=09" target="_blank">
//                                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                                                        className="bi bi-twitter-x" viewBox="0 0 16 16">
//                                                        <path
//                                                             d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
//                                                   </svg>
//                                                   <span className="tooltip-social">Twitter</span>
//                                              </a>
//                                              <a href="https://github.com/shivangkpatel" target="_blank">
//                                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                                                        className="bi bi-github" viewBox="0 0 16 16">
//                                                        <path
//                                                             d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
//                                                   </svg>
//                                                   <span className="tooltip-social">GitHub</span>
//                                              </a>

//                                              <a href="https://www.linkedin.com/in/shivang-patel-36519a253" target="_blank">
//                                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
//                                                        <path
//                                                             d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
//                                                        </path>
//                                                   </svg>
//                                                   <span className="tooltip-social">LinkedIn</span>
//                                              </a>
//                                         </div>
//                                    </div>
//                               </div>
//                          </div>

//                     </div>
//                     <div className="row"></div>
//                     <br /><br /><br /><br /><br />
//                     <hr /><br /><br /><br />

//                     <div className="row">
//                          <div className="col-1"></div>
//                          <div className="col-5">
//                               <fieldset className="talk" >
//                                    <legend className="text">Get in touch !</legend><br />
//                                    <form >
//                                         <hr />
//                                         <br />
//                                         <div className="form-floating mb-3">
//                                              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
//                                              <label for="floatingInput">Email address</label>
//                                         </div>
//                                         <div className="form-floating">
//                                              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
//                                              <label for="floatingPassword">Password</label>
//                                         </div><br />

//                                         <div className="form-floating">
//                                              <textarea className="form-control" placeholder="Leave a comment here"
//                                                   id="floatingTextarea"></textarea>
//                                              <label for="floatingTextarea">Send us a couple lines about your project...</label>
//                                         </div><br />
//                                         <button className="button2">Submit</button>
//                                    </form>
//                               </fieldset>
//                          </div>

//                          <div className="col-5">
//                               <fieldset className="second" style={{marginTop: "40px"}}><br />
//                                    <pre className="tk1">Thank You</pre>
//                                    <hr />
//                                    <span style={{letterSpacing: "1px"}}>
//                                         <pre className="tk2">Your details has been successfully
//                                              submitted. Thanks!
//                                         </pre>
//                                    </span>
//                               </fieldset>
//                          </div>
//                     </div>
//                </div>
//                <br /><br />
//           </>
//      )
// }

export default function Aboutus(){
     return(
          <>
               <Navbar isLogIn="1"></Navbar>
               <h4></h4>
          </>
     )
}