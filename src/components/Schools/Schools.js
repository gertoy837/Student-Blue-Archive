import React, { useEffect, useState } from "react";
import { getDataStudent } from "../../api";
import "./Schools.css";
import School from "../School/School";

function Schools() {
  const [datas, setdata] = useState([]);

  useEffect(() => {
    getDataStudent().then((result) => {
      setdata(result);
    });
  }, []);

  return (
    <div className="batas">
      <h1 className="title">List Characters Students</h1>
      <div className="card1">
        {datas.map((isi) => {
          return (
            <School
              firstName={isi.names.firstName}
              lastName={isi.names.lastName}
              japanName={isi.names.japanName}
              school={isi.school}
              birthday={isi.birthday}
              damageType={isi.damageType}
              image={isi.photoUrl}
              background={isi.background}
              imageSchool={isi.imageSchool}
              image1={isi.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Schools;
