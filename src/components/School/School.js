import React from "react";
import { NavLink } from "react-router-dom";

function School(props) {
  const {
    image,
    image1,
    firstName,
    lastName,
    japanName,
    background,
    imageSchool,
    school,
    birthday,
    damageType,
  } = props;
  return (
    <div className="card-student">
      <div className="card-header">
        <img src={image} alt="" />
      </div>
      <div className="card-body">
        <NavLink to={`/detail/${firstName}`} className="back">
          Detail
        </NavLink>
        <h2>{`${firstName} ${lastName}`}</h2>
        <h3>
          {japanName}
          <img src={imageSchool} alt="" />
        </h3>
        <table className="table">
          <tbody>
            <tr>
              <td style={{ width: 20 + "%" }}>School </td>
              <td>: {school}</td>
            </tr>
            <tr>
              <td>Birthday</td>
              <td>: {birthday}</td>
            </tr>
            <tr>
              <td>Background</td>
              <td>: {background}</td>
            </tr>
            <tr>
              <td>Damage Type</td>
              <td>: {damageType}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card-footer">
        {image1 ? <img src={image1} alt={image1} /> : ""}
      </div>
    </div>
  );
}

export default School;
