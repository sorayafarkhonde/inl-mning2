import React from "react";
import {Route,Redirect} from "react-router-dom";
import {useAuth} from "./context/auth";
function PrivateRoute({component:Component, ...rest})
{
   // const isAuthenticated=useAuth();
   const {authTokens}=useAuth();
   const user=localStorage.getItem("user")
    return (
        <Route 
        {...rest}
        render={props => 
           (user != null && user !== "") ?(
                <Component  {...props} />

            ) : (
                <Redirect to="/Login" />
            ) 
    

        }
        />
    );
}
export default PrivateRoute;