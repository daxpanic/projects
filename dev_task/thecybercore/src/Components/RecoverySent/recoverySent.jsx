import { useNavigate } from "react-router-dom";
import { CloseIcon, SuccessIcon } from "../../assets/icons";

function RecoverySent() {
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <div className="form-box">
        <button type="button" className="close-btn" aria-label="Close" onClick={() => navigate("/login")}>
          <CloseIcon />
        </button>

        <h1>Password recovery</h1>

        <p className="subtitle">
          We have sent you a recovery link via e-mail. Not seeing the e-mail?
          Please check your spam, or wait a few minutes.
        </p>

        <div className="success-icon"><SuccessIcon /></div>
      </div>
    </div>
  );
}

export default RecoverySent;