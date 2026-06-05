function StepOne({ formData, setFormData, nextStep }){

  const today = new Date().toISOString().split("T")[0];

  const isDobValid =
    formData.dob >= "1900-01-01" &&
    formData.dob <= today;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const canGoNext =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    isDobValid;

  return(
    <div className="form-box">
      <h1>Personal Info</h1>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />

      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        min="1900-01-01"
        max={today}
      />

      {formData.dob !== "" && !isDobValid && (
        <p className="error">
          Please enter a valid date of birth
        </p>
      )}

      <button
        type="button"
        onClick={nextStep}
        disabled={!canGoNext}
      >
        Next
      </button>
    </div>
  )
}

export default StepOne;