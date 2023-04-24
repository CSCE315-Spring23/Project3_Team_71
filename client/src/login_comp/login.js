import { GoogleLogin } from "react-google-login";

const client_id =
    "910012439370-t5574l8cl6b2jsg0n2t4n55dg4cgqp7l.apps.googleusercontent.com";

function Login() {


    const onSuccess = (res) => {
        console.log("Login success! Curr user: ", res.profileObj);
    };

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
