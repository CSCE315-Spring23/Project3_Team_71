import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import "../../css/Home.css";
import { useNavigate } from "react-router-dom";


/**

Home component that handles user login using Google accounts

@param {Object} user - User object

@param {Function} setUser - Function to update user object

@returns {JSX.Element} - Home component JSX elements
*/
const Home = ({ user, setUser }) => {
    const navigate = useNavigate();

    /**Callback function to handle Google accounts login response
    @param {Object} response - Google accounts login response
    */
    function handleCallbackREsponse(response) {
        console.log("Encode JWT ID Google" + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        console.log("logged in: ", user.email);
        document.location.assign("/customer");
    }

    
    /**

    A hook that initializes and renders the Google Sign-In button to allow users to sign in using their Google account.
    @function
    @name useGoogleSignIn
    @param {function} handleCallbackResponse - A function to handle the response from the Google Sign-In API.
    @returns {JSX.Element} - Returns a JSX element containing the Google Sign-In button.
    */
    useEffect(() => {
        const google = window.google;
        google.accounts.id.initialize({
            client_id:
                "910012439370-t5574l8cl6b2jsg0n2t4n55dg4cgqp7l.apps.googleusercontent.com",
            callback: handleCallbackREsponse,
        });

        google.accounts.id.renderButton(document.getElementById("signInDiv"), {
            theme: "outline",
            size: "large",
        });
    }, []);
    
    return (
        <div className="wrapper-home">
            <img
                src="/resource/food4.jpg"
                alt="backdrop"
                className="backdrop-img-home"
            />
            <div className="card-home">
                <h1>Log In</h1>
                <div id="signInDiv" />
            </div>
        </div>
    );
};

export default Home;
