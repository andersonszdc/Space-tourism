import Image from "next/image";
import Link from "next/link";
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
            <Item
              href="/"
              number="00"
              isActive={activeTopic === "/"}
              topic="home"
            />
            <Item
              href="/destination/1"
              number="01"
              isActive={activeTopic.includes("/destination")}
              topic="destination"
            />
            <Item
              href="/crew/1"
              number="02"
              isActive={activeTopic.includes("/crew")}
              topic="crew"
            />
            <Item
              href="/technology/1"
              number="03"
              isActive={activeTopic.includes("/technology")}
              topic="technology"
            />
          </ul>
        </nav>
      </header>
      {children}
    </Main>
  );
};

const Item = ({ number, topic, isActive, href }) => {
  return (
    <Link passHref href={href}>
      <StyledItem isActive={isActive}>
        <div className="content">
          <span>{number}</span>
          {topic}
        </div>
        <span className="flare" />
      </StyledItem>
    </Link>
  );
};

export default NavBar;
