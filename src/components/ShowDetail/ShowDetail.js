import React from "react";
import "../Schools/Schools.css";
import { NavLink } from "react-router-dom";

function ShowDetail(props) {
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
    hobbies,
    role,
    voice,
    voices,
    weaponUnique,
    armorType,
    realeaseDate,
  } = props;
  return (
    <div className="card-student">
      <div className="card-header">
        <img src={image} alt="" />
      </div>
      <div className="card-body">
        <NavLink to={"/character"} className="back">
          Back
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
              <td>Hobbies</td>
              <td>: {hobbies}</td>
            </tr>
            <tr>
              <td>Background</td>
              <td>: {background}</td>
            </tr>
            <tr>
              <td>Role</td>
              <td>: {role}</td>
            </tr>
            <tr>
              <td>Voice</td>
              <td>: {voice}</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <audio src={voices} controls></audio>
              </td>
            </tr>
            <tr>
              <td>Damage Type</td>
              <td>: {damageType}</td>
            </tr>
            <tr>
              <td>Armor Type</td>
              <td>: {armorType}</td>
            </tr>
            <tr>
              <td>Weapon</td>
              <td>: {weaponUnique}</td>
            </tr>
            <tr>
              <td>Realease Date</td>
              <td>: {realeaseDate}</td>
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

export default ShowDetail;
