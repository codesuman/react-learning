import './UserGreeting.css';

const UserGreeting = ({userName, isLoggedIn}) => {
    const welcomeMessage = <h2 className="user-greeting welcome-msg">Welcome, {userName}</h2>;
    const loginMessage = <h2 className="user-greeting login-msg">Please login to continue</h2>;

    return (isLoggedIn ? welcomeMessage : loginMessage);
}

export default UserGreeting;