import Image from "next/image";
import MainButton from "../components/MainButton";
import { Main } from "../styles";

export default function Index() {
  return (
    <Main>
      <div className="bg-img">
        <Image src="/home/background-home-desktop.jpg" layout="fill" alt="imagem de fundo" />
      </div>
      <div className="content">
        <h2>so, you want to travel to</h2>
        <h1>space</h1>
        <p>
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
