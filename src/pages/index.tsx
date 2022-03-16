import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import MainButton from "../components/MainButton";
import NavBar from "../components/NavBar";
import { useResizeObserver } from "../hooks/useResizeObserver";
import { Main } from "../styles";

export default function Index() {
  const bgRef = useRef(null);
  const [width, height] = useResizeObserver(bgRef);
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    if (width > 768) {
      setDevice("desktop");
    } else if (width < 768 && width > 375) {
      setDevice("tablet");
    } else {
      setDevice("mobile");
    }
  }, [width]);

  return (
    <Main>
      <div ref={bgRef} className="bg-img">
        <Image
          src={`/home/background-home-${device}.jpg`}
          layout="fill"
          alt="imagem de fundo"
        />
      </div>
      <div className="content">
        <h2 className="call">so, you want to travel to</h2>
        <h1 className="emphasis">space</h1>
        <p className="explanation">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="action">
        <MainButton />
      </div>
    </Main>
  );
}

Index.layout = NavBar;
