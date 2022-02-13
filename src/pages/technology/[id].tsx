import React from "react";
import styles from "../../styles/technology.module.css";

const Technology = () => {
  return (
    <main>
      <h1>
        <span>03</span>space launch 101
      </h1>
      <section>
        <div>
          <h2>the terminology</h2>
          <h1>launch vehicle</h1>
          <p>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth&apos;s surface to space, usually
            to Earth orbit or beyond. Our WEB-X carrier rocket is the most
            powerful in operation. Standing 150 metres tall, it&apos;s quite an
            awe-inspiring sight on the launch pad!
          </p>
        </div>
        <div className={styles.img}></div>
      </section>
    </main>
  );
};

export default Technology;
