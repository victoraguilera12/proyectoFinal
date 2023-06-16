import { createContext  } from "react";

const AuthContext = createContext({
    authenticated:false,
    setAuthenticated: (auth) =>{},
    user:null,
    setUser: (user) =>{}
});


export default AuthContext;