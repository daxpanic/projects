import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CloseIcon, CheckIcon } from "../../assets/icons";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!oldPassword.trim()) {
      newErrors.old = "Old password is required";
    }

    if (!newPassword.trim()) {
      newErrors.new = "New password is required";
    } else if (newPassword.length < 8) {
      newErrors.new = "Minimum 8 characters";
    }

    if (!repeatPassword.trim()) {
      newErrors.repeat = "Please repeat your password";
    } else if (newPassword !== repeatPassword) {
      newErrors.repeat = "Passwords do not match";
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

        <h1>Change password</h1>

        <div className="card-content">
          <p className="subtitle">
            Please create and enter your new password.
          </p>

          <div className="form-fields">
            <div className="input-group">
              <label>Old password</label>
              <div className={`input-wrapper ${errors.old ? "error" : ""} ${oldPassword && !errors.old ? "confirmed" : ""}`}>
                <input
                  type="password"
                  placeholder="Enter old password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                {oldPassword && !errors.old && <span className="input-icon confirm"><CheckIcon /></span>}
                {errors.old && <span className="input-icon error"><CloseIcon /></span>}
              </div>
              {errors.old && <span className="field-error">{errors.old}</span>}
            </div>

            <div className="input-group">
              <label>New password</label>
              <div className={`input-wrapper ${errors.new ? "error" : ""} ${newPassword && !errors.new ? "confirmed" : ""}`}>
                <input
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                {newPassword && !errors.new && <span className="input-icon confirm"><CheckIcon /></span>}
                {errors.new && <span className="input-icon error"><CloseIcon /></span>}
              </div>
              <span className="hint">
                At least 1 uppercase character, 1 number, 1 lowercase character, minimum 8 symbols
              </span>
              {errors.new && <span className="field-error">{errors.new}</span>}
            </div>

            <div className="input-group">
              <label>Repeat new password</label>
              <div className={`input-wrapper ${errors.repeat ? "error" : ""} ${repeatPassword && !errors.repeat ? "confirmed" : ""}`}>
                <input
                  type="password"
                  placeholder="Repeat new password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
                {repeatPassword && !errors.repeat && <span className="input-icon confirm"><CheckIcon /></span>}
                {errors.repeat && <span className="input-icon error"><CloseIcon /></span>}
              </div>
              {errors.repeat && <span className="field-error">{errors.repeat}</span>}
            </div>
          </div>

          <button type="submit" className="login-btn" disabled={status === "loading"}>
            {status === "loading" ? "SAVING..." : "SAVE"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;