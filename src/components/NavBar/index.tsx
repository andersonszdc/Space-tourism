import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Main, StyledItem } from "./styles";

const NavBar: React.FC = ({ children }) => {
  const [activeTopic, setActiveTopic] = useState("home");
  const router = useRouter();
  useEffect(() => {
    const { pathname } = router;
    setActiveTopic(pathname);
  }, [router]);
  return (
    <Main>
      <header className="header">
        <Image src="/shared/logo.svg" width={40} height={40} alt="logo" />
        <hr className="divider" />
        <nav className="navbar">
          <ul className="list">
            <Item number="00" isActive={activeTopic === "/"} topic="home" />
            <Item
              number="01"
              isActive={activeTopic === "/destination"}
              topic="destination"
            />
            <Item number="02" isActive={activeTopic === "/crew"} topic="crew" />
            <Item
              number="03"
              isActive={activeTopic === "/technology"}
              topic="technology"
            />
          </ul>
        </nav>
      </header>
      {children}
    </Main>
  );
};

const Item = ({ number, topic, isActive }) => {
  return (
    <StyledItem isActive={isActive}>
      <div className="content">
        <span>{number}</span>
        {topic}
      </div>
      <span className="flare" />
    </StyledItem>
  );
};

export default NavBar;
