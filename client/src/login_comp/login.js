import { GoogleLogin } from "react-google-login";

const client_id =
    "910012439370-t5574l8cl6b2jsg0n2t4n55dg4cgqp7l.apps.googleusercontent.com";

/**

The Login component's UI, which renders a Google login button that can be used to authenticate with the Google API
@function
@returns {JSX.Element} - The Login component's UI
*/
function Login() {

    /**

    A function that handles the successful authentication of a user via the Google API
    @function
    @param {Object} res - The response object returned by the Google API after successful authentication
    @param {Object} res.profileObj - The user profile object returned by the Google API after successful authentication
    */
    const onSuccess = (res) => {
        console.log("Login success! Curr user: ", res.profileObj);
    };

    /**

    A function that handles the failed authentication of a user via the Google API
    @function
    @param {Object} res - The response object returned by the Google API after failed authentication
    */
    const onFailure = (res) => {
        console.log("Login failes! res: ", res);
    };
    return (
        <div id="signInButton">
            <GoogleLogin
                client_id={client_id}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;
