import Title from "./components/Title";
import Grid from "./components/Grid";
import {destinos} from "@/lib/destinos";
import Link from "next/link";
import styles from "./page.module.css";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <h1>Portal de Viagens</h1>
        <p>Descubra destinos incríveis e planeje sua próxima viagem!</p>
        <Link href="/destinos" className={styles.hero__button}>Explorar destinos</Link>
      </div>
    </section>

    <Title title="Destinos em destaque"/>
    <Carousel />

    <Title title="Explore mais destinos" />
    <Grid destinos={destinos} />
    </>
  );
}
