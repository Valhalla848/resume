import React from "react";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#1769aa",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FaceRetouchingNaturalIcon
        style={{ fontSize: "100px", margin: "0 auto" }}
      />

      <div>
        <p style={{ fontSize: "25px", textAlign: "center" }}>
          Ветер веет с юга И луна взошла, Что же ты, б*ядюга, Ночью не пришла?
          Не пришла ты ночью, Не явилась днем. Думаешь, мы дрочим? Нет! Других
          е*ём!(Есенин)
        </p>
      </div>
    </div>
  );
};

export default Footer;
