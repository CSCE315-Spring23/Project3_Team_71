import React from "react";
import { useLocalState } from "../util/useLocalStorage";
import { useEffect, useState } from "react";
import { HOST } from "../../host";


/**

A higher-order component that renders its children only if the user is authorized as a manager.

@param {Object} props - The component props.

@param {React.ReactNode} props.children - The children to be rendered if the user is authorized.

@return {React.ReactNode} The rendered component or an empty string.
*/
const PrivateRouteManager = React.memo(({ children }) => {
    const [user, setUser] = useLocalState("", "user");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [privilege, setPrivilege] = useState(null);
    const [shouldRender, setShouldRender] = useState(false);

    /**
    Makes a request to the server to check if the user is authorized.
    @return {Promise<Object>} A promise that resolves to an object containing authorization data.
    */
    const make_request = React.useCallback(async () => {
        return await fetch(`${HOST}/check-authorization`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: user.email }),
        })
            .then((res) => res.json())
            .then((data) => data);
    }, [user]);

    /**
    Checks if the user is authorized as a manager.

    If authorized, sets the shouldRender state to true and renders the children.

    If not authorized, sets the shouldRender state to false and redirects the user to the homepage.
    */
    const checkPriv = React.useCallback(async () => {
        if (user.hasOwnProperty("email")) {
            const data = await make_request();

            console.log(
                "data: ",
                data,
                "is authorized: ",
                data.isAuthorized,
                "is priv: ",
                data.privilege
            );
            setIsAuthorized(data.isAuthorized);
            setPrivilege(data.privilege);
            console.log("got data back");
            console.log(privilege);

            if (data.isAuthorized && data.privilege === "manager") {
                console.log("user found");
                // do something here if success
                setShouldRender(true);
            } else {
                console.log("priv failed");
                // do something here if it failed
                setShouldRender(false);
                // since you want to navigate to "/" if the check is false, you can simply do it here
                document.location.assign("/");
            }
        } else {
            document.location.assign("/");
        }
    }, [user]);

    useEffect(() => {
        checkPriv();
    }, []);

    return shouldRender ? children : "";
});

export default PrivateRouteManager;
