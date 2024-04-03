import React, { useEffect, useState } from "react";
import { getDataRandom } from "../../api";
import "../Schools/Schools.css";
import Random from "../Random/Random";
import AddCharacterForm from "../AddCharacterForm/AddCharacterForm";

function Randoms() {
  const [datas, setdata] = useState([]);

  // const addCharacter = (Character) => {
  //   setdata([...datas, Character]);
  // };

  const addCharacter = (formData) => {
    const newCharacter = {
      names: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        japanName: formData.japanName,
      },
      school: formData.school,
      birthday: formData.birthday,
      age: formData.age,
      photoUrl: formData.image,
      imageSchool: formData.imageSchool,
    };
  
    setdata([...datas, newCharacter]);
  };

  useEffect(() => {
    getDataRandom().then((result) => {
      setdata(result);
    });
  }, []);

  console.log(datas);

  return (
    <div className="batas">
      <h1 className="title">Characters Random</h1>
      <div className="card1">
        {datas.length > 0 ? (
          datas.map((isi) => {
            return (
              <Random
                firstName={isi.names.firstName ? isi.names.firstName : isi.firstName }
                lastName={isi.names.lastName ? isi.names.lastName : isi.lastName }
                japanName={isi.names.japanName ? isi.names.japanName : isi.japanName }
                school={isi.school}
                birthday={isi.birthday}
                age={isi.age}
                image={isi.photoUrl}
                imageSchool={isi.imageSchool}
              />
            );
          })
        ) : (
          <p>Maaf anda kurang beruntung.</p>
        )}
      </div>
      <AddCharacterForm onAddCharacter={addCharacter} />
    </div>
  );
}

export default Randoms;
