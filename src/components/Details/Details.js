import React, { useEffect, useState } from "react";
import { getDetailCharacter } from "../../api";
import { useParams } from "react-router-dom";
import ShowDetail from "../ShowDetail/ShowDetail";

function Detail() {
  let { name } = useParams();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getDetailCharacter(name).then((result) => {
      setDatas(result);
    });
  }, [name]);

  console.log(datas);

  return (
    <div className="batas">
      <h1 className="title">Detail Characters</h1>
      <div className="card1">
        {datas.map((isi) => {
          return (
            <ShowDetail
              firstName={isi.names.firstName}
              lastName={isi.names.lastName}
              japanName={isi.names.japanName}
              school={isi.school}
              birthday={isi.birthday}
              damageType={isi.damageType}
              image={isi.photoUrl}
              background={isi.background}
              imageSchool={isi.imageSchool}
              hobbies={isi.hobbies}
              role={isi.role}
              image1={isi.image}
              voice={isi.voice}
              voices={isi.voices}
              weaponUnique={isi.weaponUnique}
              armorType={isi.armorType}
              realeaseDate={isi.realeaseDate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Detail;
