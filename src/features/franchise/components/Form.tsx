import { Title, Text } from "../../../ui/components";

import {
  inputFields,
  investmentOptions,
  timelineOptions,
  headerFranchiseData
} from "../data/form.data";

import { useFranchiseForm } from "../hooks/useFranchiseForm";

export const Form = () => {
  const { formData, handleChange, handleSubmit } = useFranchiseForm();

  return (
    <section className="franchise-form">
      <Title
        title={headerFranchiseData.title}
        as="h2"
        size="sm"
        className="franchise-form__title"
      />

      <Text
        text={headerFranchiseData.description}
        size="lg"
        className="franchise-form__description"
      />

      <form className="franchise-form__form" onSubmit={handleSubmit}>

        <div className="franchise-form__grid">
          {inputFields.map(({ name, placeholder, type }) => (
            <input
              key={name}
              className={`franchise-form__input ${
                type === "date"
                  ? "franchise-form__input--date"
                  : ""
              }`}
              name={name}
              placeholder={placeholder}
              type={type ?? "text"}
              value={formData[name]}
              onChange={handleChange}
              required
            />
          ))}
        </div>

        <input
          className="franchise-form__input franchise-form__input--full-width"
          name="address"
          placeholder="Address*"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <div className="franchise-form__radio-group">
          <h3 className="franchise-form__radio-title">
            What is the amount of personal funds you plan to dedicate to your project?*
          </h3>

          {investmentOptions.map((option) => (
            <label key={option} className="franchise-form__radio-label">
              <input
                className="franchise-form__radio-input"
                type="radio"
                name="investment"
                value={option}
                checked={formData.investment === option}
                onChange={handleChange}
                required
              />
              <span className="franchise-form__radio-text">
                {option}
              </span>
            </label>
          ))}
        </div>

        <div className="franchise-form__radio-group franchise-form__radio-group--mn">
          <h3 className="franchise-form__radio-title">
            How soon would you like to open your own Qargo Coffee store?*
          </h3>

          {timelineOptions.map((option) => (
            <label key={option} className="franchise-form__radio-label">
              <input
                className="franchise-form__radio-input"
                type="radio"
                name="timeline"
                value={option}
                checked={formData.timeline === option}
                onChange={handleChange}
                required
              />
              <span className="franchise-form__radio-text">
                {option}
              </span>
            </label>
          ))}
        </div>

        <div className="franchise-form__actions">
          <button
            type="submit"
            className="franchise-form__button"
          >
            Submit Franchise Application
          </button>
        </div>
      </form>
    </section>
  );
};