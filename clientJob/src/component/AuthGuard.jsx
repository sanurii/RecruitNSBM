import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
// import {}
import { Navigate, useNavigate } from "react-router-dom";


// export function AuthGuard({children}){
//     let authPayload = useContext(AuthContext);
//     const navigate = useNavigate();
//     console.log(authPayload);
//     if(!authPayload || !authPayload.token){
//         console.log("redirect to login...");
//         return <Navigate to="/login" />;
//     }

//     // if (!authPayload || !authPayload.token ||  authPayload.token === null) {
//     //         console.log("redirect to Login...A");
//     //         // return <Navigate to="/login" />;
//     //         navigate("/login");
//     //         // window.location.reload();
//     //     }
//     // useEffect(() => {
//     //   if (!authPayload || !authPayload.token ) {
//     //       console.log("redirect to Login...");
//     //     navigate("/login");
//     //   }
//     //   // eslint-disable-next-line react-hooks/exhaustive-deps
//     // }, []); 
//     // console.log("redirect to login...");       
//     return <>{children}</>
// }


// export function GuestGuard({children}){
//     const navigate = useNavigate();
//     let authPayload = useContext(AuthContext);

//     if(authPayload || authPayload.token){
//         console.log("redirect to app...");
//               // navigate("/app");
//       return <Navigate to="/login" />;
//     }
//   //   if (authPayload && authPayload.token) {
//   //     console.log("redirect to app... G");
//   //   navigate("/app");
//   // }
//     // useEffect(() => {
//     //     if (authPayload && authPayload.token) {
//     //         console.log("redirect to app... G");
//     //       navigate("/app");
//     //     }
//     //     // eslint-disable-next-line react-hooks/exhaustive-deps
//     //   }, [authPayload]); 
           
//     return <>{children}</>
// }




export function AuthGuard({ children }) {
  let authPayload = useContext(AuthContext);
  const navigate = useNavigate();
  setTimeout(()=>{

   
      if (!authPayload || !authPayload.token) {
        if (authPayload.token === null){
          console.log("Login Auth");
          console.log(authPayload.token);
          return <Navigate to="/login" />;
          // navigate('/login');
        }
}
    
    
  } ,3000);
  // check if user exists
  
  return <>{children}</>;
}

export function GuestGuard({ children }) {
  let authPayload = useContext(AuthContext);
  // check if user exists
  if (authPayload && authPayload.token) {
    console.log("app Guest");
    // return <Navigate to={`{redirectPath}`} />;
    // return <Navigate to="/app" />;
  }
  return <>{children}</>;
}


 // const navigate = useNavigate();
  // setTimeout(function() {
  //   console.log(authPayload);
  //   if (authPayload.token === null) {
  //     console.log("Login Auth");
  //     // return <Navigate to="/login" />;
  //     navigate('/login');
  //   }
  // }, 2000);