import React, { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    areaInterest: "",
    birthDate: "",
    address: "",
    investment: "",
    timeline: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="franchise-form">
      <h1 className="franchise-form__title">Franchise Inquiry Form</h1>
      <p className="franchise-form__description">
        Start your journey with Qargo Coffee by filling out this form
      </p>

      <form className="franchise-form__form" onSubmit={handleSubmit}>

        <div className="franchise-form__grid">
          <input
            className="franchise-form__input"
            name="firstName"
            placeholder="First name*"
            onChange={handleChange}
          />
          <input
            className="franchise-form__input"
            name="lastName"
            placeholder="Last name*"
            onChange={handleChange}
          />
          <input
            className="franchise-form__input"
            name="email"
            placeholder="Email*"
            onChange={handleChange}
          />
          <input
            className="franchise-form__input"
            name="phone"
            placeholder="Phone*"
            onChange={handleChange}
          />
          <input
            className="franchise-form__input"
            name="state"
            placeholder="State*"
            onChange={handleChange}
          />
          <input
            className="franchise-form__input"
            name="city"
            placeholder="City*"
            onChange={handleChange}
          />
          <input
            className="franchise-form__input"
            name="areaInterest"
            placeholder="Area of interest*"
            onChange={handleChange}
          />
          <input
            className="franchise-form__input franchise-form__input--date"
            type="date"
            name="birthDate"
            onChange={handleChange}
          />
        </div>

        <input
          className="franchise-form__input franchise-form__input--full-width"
          name="address"
          placeholder="Address*"
          onChange={handleChange}
        />

        <div className="franchise-form__radio-group">
          <h3 className="franchise-form__radio-title">
            What is the amount of personal funds you plan to dedicate to your project?*
          </h3>

          {["$50,000 - $100,000", "$100,000 - $300,000", "$300,000 - $500,000", "$500,000 +"].map((option) => (
            <label key={option} className="franchise-form__radio-label">
              <input
                className="franchise-form__radio-input"
                type="radio"
                name="investment"
                value={option}
                onChange={handleChange}
              />
              <span className="franchise-form__radio-text">{option}</span>
            </label>
          ))}
        </div>

        <div className="franchise-form__radio-group">
          <h3 className="franchise-form__radio-title">
            How soon would you like to open your own Qargo Coffee store?*
          </h3>

          {["1-3 months", "3-6 months", "6-12 months", "+12 months"].map((option) => (
            <label key={option} className="franchise-form__radio-label">
              <input
                className="franchise-form__radio-input"
                type="radio"
                name="timeline"
                value={option}
                onChange={handleChange}
              />
              <span className="franchise-form__radio-text">{option}</span>
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="franchise-form__button"
        >
          Submit Franchise Application
        </button>
      </form>
    </section>

  );
}
