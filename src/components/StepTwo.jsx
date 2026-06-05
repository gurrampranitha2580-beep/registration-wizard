import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { PiEyeClosedBold } from "react-icons/pi";

function StepTwo({ formData, setFormData, nextStep, prevStep }){

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const emailError =
    formData.email !== "" &&
    !emailPattern.test(formData.email);

  const passwordError =
    formData.password !== "" &&
    formData.password.length < 8;

  const confirmError =
    formData.confirmPassword !== "" &&
    formData.confirmPassword !== formData.password;

  const canGoNext =
    emailPattern.test(formData.email) &&
    formData.password.length >= 8 &&
    formData.confirmPassword === formData.password;

  return(
    <div className="form-box">
      <h1>Account Details</h1>

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />

      {emailError && (
        <p className="error">Enter a valid email address</p>
      )}

      <div className="password-field">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button
          type="button"
          className="eye-btn"
          onClick={() => setShowPassword(!showPassword)}
          aria-label="Toggle password visibility"
        >
          {showPassword ? <FaEye /> : <PiEyeClosedBold />}
        </button>
      </div>

      {passwordError && (
        <p className="error">Password must be at least 8 characters</p>
      )}

      <div className="password-field">
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button
          type="button"
          className="eye-btn"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          aria-label="Toggle confirm password visibility"
        >
          {showConfirmPassword ? <FaEye /> : <PiEyeClosedBold />}
        </button>
      </div>

      {confirmError && (
        <p className="error">Passwords do not match</p>
      )}

      <div className="button-group">
        <button type="button" onClick={prevStep}>
          Back
        </button>

        <button
          type="button"
          onClick={nextStep}
          disabled={!canGoNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default StepTwo;