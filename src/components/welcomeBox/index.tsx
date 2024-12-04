"use client";

import { styles } from "./styles";
import cadeadoImg from "../../../public/cadeado.png";
import Image from "next/image";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const router = useRouter();
  return (
    <div style={styles.box}>
      <figure style={styles.divs}>
        <Image
          src={cadeadoImg}
          alt=""
          style={{ width: "35%", height: "65%" }}
        />
      </figure>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={styles.title}>WELCOME TO</h1>
        <h2 style={styles.logoName}>SECUREPASS</h2>
      </header>
      <p style={styles.slogan}>
        O melhor sistema de cadastro, <br/>
        gestão e autenticação de usuários
      </p>
      <div style={styles.containerButton}>
        <Button
          size="medium"
          variant="contained"
          style={{...styles.button, backgroundColor:"#3f0087"}}
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
        <Button size="medium" variant="contained" style={styles.button}>
         Registrar
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
