import { Link } from "react-router-dom";
function Register()
{
    function accCreated()
    {
        alert("Account Created");
    }
    return (
        <div>
            <h1>Register Page</h1>
            <Link to="/login" onClick={accCreated}>Register</Link>
        </div>
    );
}

export default Register;