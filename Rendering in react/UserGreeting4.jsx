import PropTypes from "prop-types";

function UserGreeting(props)
{

const welcomeMessage = <h2 className="welcome-message">welcome {props.username}</h2>

const loginPrompt = <h2 className="login-prompt"> Please Login </h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.proptypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string,
};

UserGreeting. defaultProps = {
    isLoggedIn: false,
    username: "Guesst",
};


export default UserGreeting;