import styles from "../styles/index.module.css";

export default function Index() {
  return (
    <div className={styles.container}>
      <section className={styles.img}></section>
      <h2>so, you want to travel to</h2>
      <h1>space</h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <button>explore</button>
    </div>
  );
}
