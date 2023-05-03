import React from "react";
import { Navigate } from "react-router-dom";
import { useLocalState } from "../util/useLocalStorage";
import { useEffect, useState, useMemo } from "react";
import { HOST } from "../../host";

/**

A React memoized component that wraps the given children in a Private Route that restricts access to authorized users only.

@param {Object} props - Component props.

@param {JSX.Element} props.children - The component(s) to be wrapped in the Private Route.

@returns {JSX.Element} - The Private Route component.
*/
const PrivateRouteCashier = React.memo(({ children }) => {
    const [user, setUser] = useLocalState("", "user");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [privilege, setPrivilege] = useState(null);
    const [shouldRender, setShouldRender] = useState(false);

    /**
    Sends a POST request to the server to check authorization and returns the response.
    @returns {Promise<Object>} - The response from the server.
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

    Checks the privileges of the user to determine if they are authorized to access the Private Route.

    If the user is authorized, it sets the shouldRender state to true.

    If the user is not authorized, it sets the shouldRender state to false and redirects to the home page.

    @returns {Promise<void>}
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

            if (
                data.isAuthorized &&
                (data.privilege === "manager" || data.privilege === "cashier")
            ) {
                console.log("user found");

                setShouldRender(true);
            } else {
                console.log("priv failed");

                setShouldRender(false);
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

export default PrivateRouteCashier;
