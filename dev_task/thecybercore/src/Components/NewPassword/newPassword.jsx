import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CloseIcon, CheckIcon, EyeOpenIcon, EyeClosedIcon } from "../../assets/icons";

function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Minimum 8 characters";
    }

    if (!confirmPassword.trim()) {
      newErrors.confirm = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirm = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    navigate("/login");
  };

  return (
    <div className="login-wrapper">
      <form className="form-box" onSubmit={handleSubmit}>
        <button type="button" className="close-btn" aria-label="Close" onClick={() => navigate("/login")}>
          <CloseIcon />
        </button>

        <h1>New password</h1>

        <div className="card-content">
          <div className="form-fields">
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
              <span className="hint">
                At least 1 uppercase character, 1 number, 1 lowercase character, minimum 8 symbols
              </span>
              {errors.password && <span className="field-error">{errors.password}</span>}
            </div>

            <div className="input-group">
              <label>Confirm new password</label>
              <div className={`input-wrapper password-wrapper ${errors.confirm ? "error" : ""} ${confirmPassword && !errors.confirm ? "confirmed" : ""}`}>
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmPassword && !errors.confirm && <span className="input-icon confirm"><CheckIcon /></span>}
                {errors.confirm && <span className="input-icon error"><CloseIcon /></span>}
                <button
                  type="button"
                  className="eye-toggle"
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <EyeOpenIcon /> : <EyeClosedIcon />}
                </button>
              </div>
              {errors.confirm && <span className="field-error">{errors.confirm}</span>}
            </div>
          </div>

          <button type="submit" className="login-btn" disabled={status === "loading"}>
            {status === "loading" ? "RESETTING..." : "RESET AND LOGIN"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPassword;