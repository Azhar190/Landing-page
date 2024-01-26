import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      company: '',
      email: '',
    });
    sessionStorage.setItem('formSubmitted', 'true');
  };

  return (
    <div className="registration-form">

      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <div className="form-field">
            {/* <h3>Registration</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p> */}
          <label htmlFor="name">
            Name <span>*</span>
          </label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required/>
        </div>

        {/* Company input */}
        <div className="form-field">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Enter your company name"/>
        </div>

        {/* Email input */}
        <div className="form-field">
          <label htmlFor="email"> Email address <span>*</span></label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" required />
        </div>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
