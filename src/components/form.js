import React, { useState, useEffect } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
  });

  const [validationMessages, setValidationMessages] = useState({
    name: '',
    email: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const isFormSubmitted = sessionStorage.getItem('formSubmitted');
    if (isFormSubmitted === 'true') {
      setFormSubmitted(true);
      disableFormFields();
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setValidationMessages({
      ...validationMessages,
      [e.target.name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        company: '',
        email: '',
      });
      sessionStorage.setItem('formSubmitted', 'true');
      setFormSubmitted(true);
      disableFormFields();
    }
  };

  const validateForm = () => {
    let valid = true;

    if (formData.name.trim() === '') {
      setValidationMessages({
        ...validationMessages,
        name: 'Name is required',
      });
      valid = false;
    } else {
      setValidationMessages({
        ...validationMessages,
        name: '',
      });
    }

    if (formData.email.trim() === '') {
      setValidationMessages({
        ...validationMessages,
        email: 'Email is required',
      });
      valid = false;
    } else {
      setValidationMessages({
        ...validationMessages,
        email: '',
      });
    }

    return valid;
  };

  const disableFormFields = () => {
    const formFields = document.querySelectorAll('.form-control');
    formFields.forEach((field) => {
      field.setAttribute('disabled', 'true');
    });

    const submitButton = document.querySelector('.btn-primary');
    submitButton.setAttribute('disabled', 'true');
  };

  return (
    <div className="form-container">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className='img-container'>
              <div className="img-fluid">
                <img className='top-image' src="/assets/image1.png" alt="Investment" />
              </div>
            </div>

            <div className='registration-form'>
              <form onSubmit={handleSubmit}>
                <h1><strong>Registration</strong></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>

                <div className="form-field">
                  <label htmlFor="name"> Name <span>*</span></label>
                  <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} placeholder="Enter your name"/>
                  <span className="validation-message">{validationMessages.name}</span>
                </div>

                <div className="form-field">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" className="form-control" value={formData.company} onChange={handleChange} placeholder="Enter your company name"/>
                </div>

                <div className="form-field">
                  <label htmlFor="email"> Email address <span>*</span></label>
                  <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} placeholder="Enter your email address"/>
                  <span className="validation-message">{validationMessages.email}</span>
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>

                {formSubmitted && ( <div className="form-submitted-message"> Form has been submitted successfully! Thank you. </div>)}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
