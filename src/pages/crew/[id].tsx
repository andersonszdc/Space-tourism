import Image from "next/image";
import React from "react";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import { Container } from "../../styles/crew";

const Crew = () => {
  const [ovalActive, setOvalActive] = useState("douglas");
  const handleOvalActive = (e) => {
    setOvalActive(e.target.id);
  };
  return (
    <Container>
      <div className="bg-img">
        <Image
          src="/crew/background-crew-desktop.jpg"
          layout="fill"
          alt="imagem de fundo"
        />
      </div>
      <h1 className="title">
        <span className="emphasis">02</span>meet your crew
      </h1>
      <h2 className="role">commander</h2>
      <h1 className="name">douglas hurley</h1>
      <p className="description">
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
        and former NASA astronaut. He launched into space for the third time as
        commander of Crew Dragon Demo-2.
      </p>
      <div className="slider">
        <span
          className={`oval ${ovalActive === "douglas" && "active"}`}
          id="douglas"
          onClick={handleOvalActive}
        />
        <span
          className={`oval ${ovalActive === "mark" && "active"}`}
          id="mark"
          onClick={handleOvalActive}
        />
        <span
          className={`oval ${ovalActive === "victor" && "active"}`}
          id="victor"
          onClick={handleOvalActive}
        />
        <span
          className={`oval ${ovalActive === "anousheh" && "active"}`}
          id="anousheh"
          onClick={handleOvalActive}
        />
      </div>
      <div className="image">
        <Image
          src="/crew/image-douglas-hurley.png"
          width={514}
          objectFit="contain"
          height={700}
          alt="foto da lua"
        />
      </div>
    </Container>
  );
};

export default Crew;

Crew.layout = NavBar;
