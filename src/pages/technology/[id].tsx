import Image from "next/image";
import React from "react";
import NavBar from "../../components/NavBar";
import { Container } from "../../styles/technology";

const Technology = () => {
  return (
    <Container>
      <h1 className="title">
        <span className="emphasis">03</span>space launch 101
      </h1>
      <section className="content">
        <div className="info">
          <h2 className="info__sub">the terminology...</h2>
          <h1 className="info__name">launch vehicle</h1>
          <p className="info__description">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth&apos;s surface to space, usually
            to Earth orbit or beyond. Our WEB-X carrier rocket is the most
            powerful in operation. Standing 150 metres tall, it&apos;s quite an
            awe-inspiring sight on the launch pad!
          </p>
        </div>
        <Image
          src="/technology/image-launch-vehicle-portrait.jpg"
          width={515}
          height={527}
          alt="foto da lua"
        />
      </section>
    </Container>
  );
};

export default Technology;

Technology.layout = NavBar;
