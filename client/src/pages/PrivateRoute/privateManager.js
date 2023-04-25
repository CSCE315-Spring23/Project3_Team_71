import React from "react";
import { useLocalState } from "../util/useLocalStorage";
import { useEffect, useState } from "react";

const PrivateRouteManager = React.memo(({ children }) => {
    const [user, setUser] = useLocalState("", "user");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [privilege, setPrivilege] = useState(null);
    const [shouldRender, setShouldRender] = useState(false);

    const make_request = React.useCallback(async () => {
        return await fetch("http://localhost:3001/check-authorization", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: user.email }),
        })
            .then((res) => res.json())
            .then((data) => data);
    }, [user]);

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
                // setShouldRender(true); // not needed
                setShouldRender(true);

            } else {
                console.log("priv failed");
                // do something here if it failed
                // setShouldRender(false); // not needed
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
