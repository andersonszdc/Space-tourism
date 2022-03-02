import Image from "next/image";
import React from "react";
import NavBar from "../../components/NavBar";
import { Main } from "../../styles/destination";

const Destination = () => {
  return (
    <Main>
      <div className="bg-img">
        <Image
          src="/destination/background-destination-desktop.jpg"
          layout="fill"
          alt="imagem de fundo"
        />
      </div>
      <div className="visual">
        <h1>
          <span className="emphasis">01</span> pick yout destination
        </h1>
        <Image
          src="/destination/image-moon.png"
          width={400}
          height={400}
          alt="foto da lua"
        />
      </div>
      <section className="information">
        <h1 className="information__name">moon</h1>
        <p className="information__description">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.See our planet as you’ve never seen it before. A perfect
          relaxing trip away to help regain perspective and come back refreshed.
          While you’re there, take in some history by visiting the Luna 2 and
          Apollo 11 landing sites.
        </p>
        <hr className="information__divider" />
        <div className="boxes">
          <div className="information__box">
            <h2 className="label">avg. distance</h2>
            <p className="answer">384,400 km</p>
          </div>
          <div className="information__box">
            <h2 className="label">est. travel time</h2>
            <p className="answer">3 days</p>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Destination;

Destination.layout = NavBar;
