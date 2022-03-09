import Image from "next/image";
import React from "react";
import NavBar from "../../components/NavBar";
import { Container } from "../../styles/crew";

const Crew = () => {
  return (
    <Container>
      <div className="bg-img">
        <Image
          src="/crew/background-crew-desktop.jpg"
          layout="fill"
          alt="imagem de fundo"
        />
      </div>
      <section className="info">
        <h1 className="info__title">
          <span className="emphasis">02</span>meet your crew
        </h1>
        <h2 className="info__role">commander</h2>
        <h1 className="info__name">douglas hurley</h1>
        <p className="info__description">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </section>
      <Image
        src="/crew/image-douglas-hurley.png"
        width={514}
        objectFit="contain"
        height={700}
        alt="foto da lua"
      />
    </Container>
  );
};

export default Crew;

Crew.layout = NavBar;
