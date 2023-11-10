import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Okta() {

    const { loginWithRedirect, logout } = useAuth0();

    useEffect(()=>{
        const queryParameters = new URLSearchParams(window.location.search)
        const flow = queryParameters.get("flow")

        console.log(flow)
        // const name = queryParameters.get("name")

        switch (flow) {
            case "register" :
                loginWithRedirect();
            break;
            case "login" :
                loginWithRedirect();
            break;
            case "logout" :
                logout();
            break;
        }
        
    }, [])
    return (
        <>
        </>
    );
}