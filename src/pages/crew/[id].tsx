import React from "react";
import NavBar from "../../components/NavBar";

const Crew = () => {
  return (
    <main className="container">
      <h1>
        <span>02</span>meet your crew
      </h1>
      <section>
        <h2>commander</h2>
        <h1>douglas hurley</h1>
        <p>
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </section>
      <section className="img"></section>
    </main>
  );
};

export default Crew;

Crew.layout = NavBar;
