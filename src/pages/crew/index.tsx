import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import { Container } from "../../styles/crew";

const Crew = ({ crew }) => {
  const [ovalActive, setOvalActive] = useState("0");
  const [person, setPerson] = useState<any>([]);
  const handleOvalActive = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setOvalActive((e.target as HTMLSpanElement).id);
  };
  useEffect(() => {
    setPerson(crew[parseInt(ovalActive)]);
  }, [crew, ovalActive]);

  useEffect(() => {
    console.log(person);
  });
  return person.length !== 0 && (
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
      <h2 className="role">{person.role}</h2>
      <h1 className="name">{person.name}</h1>
      <p className="description">{person.bio}</p>
      <div className="slider">
        <span
          className={`oval ${ovalActive === "0" && "active"}`}
          id="0"
          onClick={handleOvalActive}
        />
        <span
          className={`oval ${ovalActive === "1" && "active"}`}
          id="1"
          onClick={handleOvalActive}
        />
        <span
          className={`oval ${ovalActive === "2" && "active"}`}
          id="2"
          onClick={handleOvalActive}
        />
        <span
          className={`oval ${ovalActive === "3" && "active"}`}
          id="3"
          onClick={handleOvalActive}
        />
      </div>
      <div className="image">
        <Image
          src={person.images.png}
          width={514}
          objectFit="contain"
          height={700}
          alt="foto da lua"
        />
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/data.json", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();

  return {
    props: {
      crew: data.crew,
    },
  };
};

export default Crew;

Crew.layout = NavBar;
