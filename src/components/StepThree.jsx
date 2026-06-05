function StepThree({ formData, prevStep, submitForm }){

  return(
    <div className="form-box">
      <h1>Review & Submit</h1>

      <div className="review-box">
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Date of Birth:</strong> {formData.dob}</p>
        <p><strong>Email:</strong> {formData.email}</p>
      </div>

      <div className="button-group">
        <button type="button" onClick={prevStep}>
          Back
        </button>

        <button type="button" onClick={submitForm}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default StepThree;