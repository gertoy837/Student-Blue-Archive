import React from "react";
import { NavLink } from "react-router-dom";

function home(props) {
  const { image, name, birthday, damageType } = props;
  return (
    <div className="kartu">
      <div className="card-gambar">
        <img src={image} alt="" />
      </div>
      <div className="card-body1">
        <p>Name : {name} </p>
        <p>Birhtday : {birthday}</p>
        <p>Damage Type : {damageType}</p>
        <div className="tombol">
          <NavLink to={`/detail/${name}`} className="tombol">
            Detail
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default home;
