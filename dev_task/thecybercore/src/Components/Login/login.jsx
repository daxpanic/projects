import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CloseIcon, CheckIcon, EyeOpenIcon, EyeClosedIcon } from "../../assets/icons";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFound, setIsEmailFound] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const navigate = useNavigate();

  useEffect(() => {

    const savedUserEmail = localStorage.getItem("userEmail");
    if (savedUserEmail) {
      setEmail(savedUserEmail);
      setIsEmailFound(true)
    }
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));

    localStorage.setItem("userEmail", email);

    navigate("/success");
  };

  const handleSwitchAccount = () => {
    localStorage.removeItem("userEmail");
    setPassword("");
    setErrors({});
    setIsEmailFound(false)
  };

  return (
    <div className="login-wrapper">
      <form className="form-box" onSubmit={handleSubmit}>
        <button type="button" className="close-btn" aria-label="Close" onClick={() => navigate("/")}>
          <CloseIcon />
        </button>

        <h1>{isEmailFound ? `Welcome back, ${email}!` : `Log in`}</h1>

        <div className="card-content">
          <p className="register-text">
            Don't have an account? <Link to="/register" className="link-accent">Register Now</Link>
          </p>

          <div className="form-fields">
            {!isEmailFound && (
              <div className="input-group">
                <label>E-mail</label>
                <div className={`input-wrapper ${errors.email ? "error" : ""} ${email && !errors.email ? "confirmed" : ""}`}>
                  <input
                    type="email"
                    placeholder="Enter e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {email && !errors.email && <span className="input-icon confirm"><CheckIcon /></span>}
                  {errors.email && <span className="input-icon error"><CloseIcon /></span>}
                </div>
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
            )}

            <div className="input-group">
              <label>Password</label>
              <div className={`input-wrapper password-wrapper ${errors.password ? "error" : ""} ${password && !errors.password ? "confirmed" : ""}`}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {password && !errors.password && <span className="input-icon confirm"><CheckIcon /></span>}
                {errors.password && <span className="input-icon error"><CloseIcon /></span>}
                <button
                  type="button"
                  className="eye-toggle"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                </button>
              </div>
              {errors.password && <span className="field-error">{errors.password}</span>}
            </div>
          </div>

          <button type="submit" className="login-btn" disabled={status === "loading"}>
            {status === "loading" ? "LOGGING IN..." : "LOG IN"}
          </button>

          <Link to="/forgot-password" className="forgot-link link-secondary">
            Forgot your password?
          </Link>

          {isEmailFound && (
            <div className="switch-account">
              <p>Not {email}?</p>
              <button type="button" className="link-button" onClick={handleSwitchAccount}>
                Log in with another account
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;