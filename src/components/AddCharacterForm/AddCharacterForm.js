import React, { useState } from "react";
import "./AddCharacterForm.css";

const AddCharacterForm = ({ onAddCharacter }) => {
  const [formData, setFormData] = useState({
    image: "",
    firstName: "",
    lastName: "",
    japanName: "",
    imageSchool: "",
    school: "",
    birthday: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCharacter(formData);
  };

  console.log(formData);

  return (
    <div className="containerMovie">
      <section className="form">
        <div className="form-left">
          <img
            src="https://picsum.photos/200/300"
            alt="img-form"
            className="form-image"
          />
        </div>
        <div className="form-right">
          <h1 className="form-title">Add Character</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-inputgroup">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="japanName" className="form-label">
                Japan Name
              </label>
              <input
                type="text"
                name="japanName"
                id="japanName"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="imageSchool" className="form-label">
                Image School
              </label>
              <input
                type="text"
                name="imageSchool"
                id="imageSchool"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="school" className="form-label">
                School
              </label>
              <input
                type="text"
                name="school"
                id="school"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="birthday" className="form-label">
                Birthday
              </label>
              <input
                type="date"
                name="birthday"
                id="birthday"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                name="age"
                id="age"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="text"
                name="image"
                id="image"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <button className="form-button">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddCharacterForm;