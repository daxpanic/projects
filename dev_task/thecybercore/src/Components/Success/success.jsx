import { Link } from "react-router-dom";
import { SuccessIcon } from "../../assets/icons";

function Success() {
  return (
    <div className="login-wrapper">
      <div className="form-box">
        <div className="success-icon"><SuccessIcon /></div>
        <h1>Login successful!</h1>
        <p className="subtitle">You are now logged in.</p>
        <Link to="/" className="login-btn-link">CONTINUE</Link>
      </div>
    </div>
  );
}

export default Success;