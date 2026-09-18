import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CloseIcon, CheckIcon } from "../../assets/icons";

function Recovery({ mode }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");

  const navigate = useNavigate();

  const isPassword = mode === "password";

  const content = {
    password: {
      title: "Password recovery",
      subtitle: "Don't worry, it happens. We'll send you reset instructions",
      button: "RESET PASSWORD",
      buttonLoading: "SENDING...",
    },
    username: {
      title: "Username recovery",
      subtitle:
        "Fill in your e-mail address and we will send you your username via e-mail. Contact us via support if you need further help.",
      button: "SEND LOGIN",
      buttonLoading: "SENDING...",
    },
  };

  const { title, subtitle, button, buttonLoading } = content[mode];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));

    if (isPassword) {
      navigate("/recovery-sent");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="form-box" onSubmit={handleSubmit}>
        <button type="button" className="close-btn" aria-label="Close" onClick={() => navigate("/login")}>
          <CloseIcon />
        </button>

        <h1>{title}</h1>

        <div className="card-content">
          <p className="subtitle">{subtitle}</p>

          <div className="input-group">
            <label>E-mail</label>
            <div className={`input-wrapper ${error ? "error" : ""} ${email && !error ? "confirmed" : ""}`}>
              <input
                type="email"
                placeholder="Enter e-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
              {email && !error && <span className="input-icon confirm"><CheckIcon /></span>}
              {error && <span className="input-icon error"><CloseIcon /></span>}
            </div>
            {error && <span className="field-error">{error}</span>}
          </div>

          <button type="submit" className="login-btn" disabled={status === "loading"}>
            {status === "loading" ? buttonLoading : button}
          </button>

          <p className="chat-link">
            Check out our <Link to="#" className="link-primary">Live Chat</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Recovery;