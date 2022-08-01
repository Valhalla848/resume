import React from "react";

const Body = () => {
  return (
    <div>
      <div className="block1">
        <img
          src="https://naked-science.ru/wp-content/uploads/2017/11/field_image_0_kritiki_maska3.png"
          alt="#"
          width="30%"
          style={{ height: "50%", margin: "0 auto" }}
        />
        <div className="info">
          <h1 style={{ margin: "30px", color: "white" }}>Eldiyr Tulemishev</h1>
          <p style={{ marginLeft: "20px", fontSize: "20px" }}>
            Разрабатываю интерфейс для доступа к урокам на симуляторах и
            обрабатываю результаты их прохождения. Для этого разработал плагин
            на PHP, который интегрируется в СДО Moodle через API этой платформы
            и обменивается данными с симуляторами по HTTP. Плагином
            поддерживается LTI, что делает его и точкой доступа к симуляторам из
            других СДО.
          </p>
          <p
            style={{ marginLeft: "20px", marginTop: "20px", fontSize: "20px" }}
          >
            Веб-интерфейс доступа к симуляторам в виде отдельного плагина
            позволяет установить его на любой СДО Moodle в автоматическом
            режиме. Поддержка LTI предоставляет заказчикам (30 вузов)
            возможность начать урок на симуляторе из привычной им СДО
            Blackboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
