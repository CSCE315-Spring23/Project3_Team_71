import {GoogleLogout} from 'react-google-login';

const client_id = "910012439370-t5574l8cl6b2jsg0n2t4n55dg4cgqp7l.apps.googleusercontent.com";

function Logout(){

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