import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="login-wrapper">
      <div className="form-box">
        <h1>Register</h1>
        <p className="subtitle">Registration page coming soon.</p>
        <Link to="/login">Back to login</Link>
      </div>
    </div>
  );
}

export default Register;