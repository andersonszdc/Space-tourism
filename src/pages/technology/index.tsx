import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import { Container } from "../../styles/technology";

const Technology = ({ tech }) => {
  const [currentTech, setCurrentTech] = useState<any>([]);
  const [ovalActive, setOvalActive] = useState(0);

  useEffect(() => {
    setCurrentTech(tech[ovalActive]);
  }, [ovalActive, tech]);

  const handleOval = (e: React.MouseEvent<HTMLSpanElement>) => {
    const newOval = parseInt((e.target as HTMLSpanElement).id);
    setOvalActive(newOval);
  };

  return (
    currentTech.length !== 0 && (
      <Container>
        <div className="bg-img">
          <Image
            src="/technology/background-technology-desktop.jpg"
            layout="fill"
            alt="imagem de fundo"
          />
        </div>
        <h1 className="title">
          <span className="emphasis">03</span>space launch 101
        </h1>
        <section className="content">
          <div className="slider">
            <span
              className={`oval ${ovalActive === 0 && "active"}`}
              id="0"
              onClick={handleOval}
            >
              1
            </span>
            <span
              className={`oval ${ovalActive === 1 && "active"}`}
              id="1"
              onClick={handleOval}
            >
              2
            </span>
            <span
              className={`oval ${ovalActive === 2 && "active"}`}
              id="2"
              onClick={handleOval}
            >
              3
            </span>
          </div>
          <div className="info">
            <h2 className="info__sub">the terminology...</h2>
            <h1 className="info__name">{currentTech.name}</h1>
            <p className="info__description">{currentTech.description}</p>
          </div>
          <div className="image">
            <Image
              src={currentTech.images.portrait}
              width={515}
              height={527}
              alt="foto da lua"
            />
          </div>
        </section>
      </Container>
    )
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
      tech: data.technology,
    },
  };
};

export default Technology;

Technology.layout = NavBar;
