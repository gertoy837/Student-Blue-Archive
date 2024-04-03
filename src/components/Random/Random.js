import React from "react";
import { NavLink } from "react-router-dom";

function School(props) {
  const {
    image,
    firstName,
    lastName,
    japanName,
    imageSchool,
    school,
    birthday,
    age,
  } = props;
  return (
    <div className="card-student1">
      <div className="card-header">
        <img src={image} alt="" />
      </div>
      <div className="card-body">
      <NavLink to={`/detail/${firstName}`} className="back">Detail</NavLink>
        <h2>{`${firstName} ${lastName}`}</h2>
        <h3>
          {japanName}
          <img src={imageSchool} alt="" />
        </h3>
        <table className="table">
          <tbody>
            <tr>
              <td>Age</td>
              <td>: {age}</td>
            </tr>
            <tr>
              <td>Birthday</td>
              <td>: {birthday}</td>
            </tr>
            <tr>
              <td style={{ width: 20 + "%" }}>School </td>
              <td>: {school}</td>
            </tr>
            <tr>
              <td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default School;
