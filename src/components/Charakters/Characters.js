import React, { useEffect, useState } from "react";
import { getDataCharacters } from "../../api";
import Home from "../Character/Character";
import "./Characters.css";

function Homes() {
  const [datas, setdata] = useState([]);

  useEffect(() => {
    getDataCharacters().then((result) => {
      setdata(result);
    });
  }, []);

  console.log(datas);

  return (
    <div className="batas">
      <h1 className="title">List Characters</h1>
      <div className="card">
        {datas.map((isi) => {
          return (
            <Home
              name={isi.name}
              birthday={isi.birthday}
              damageType={isi.damageType}
              image={isi.photoUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Homes;
