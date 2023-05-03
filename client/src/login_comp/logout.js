import {GoogleLogout} from 'react-google-login';

const client_id = "910012439370-t5574l8cl6b2jsg0n2t4n55dg4cgqp7l.apps.googleusercontent.com";

/**

The Logout component's UI, which renders a Google logout button that can be used to log out of the Google API
@function
@returns {JSX.Element} - The Logout component's UI
*/
function Logout(){

    /**

    A function that handles the successful logout of a user via the Google API
    @function
    @returns {void}
    */
    const onSuccess = () =>{
        console.log("Logout successful!");
    }


    return(
        <div id = "signOutButton">
            <GoogleLogout
            client_id={client_id}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;