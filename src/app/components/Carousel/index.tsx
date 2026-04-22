"use client";
import { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import { destinos } from "@/lib/destinos";

const Carousel = () => {

  const destaques = destinos.filter(destino => destino.destaque);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % destaques.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const destino = destaques[index];

  return (
    <div className={styles.carousel}>
      <img src={destino.imagem} alt={destino.nome} />
      <h3 className={styles.title}>{destino.nome}</h3>
    </div>
  );
};

export default Carousel;