'use client'

import { styles } from "./styles";
import cadeadoImg from "../../../public/cadeado.png";
import Image from "next/image";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const router = useRouter()
  return (
    <div style={styles.box}>
      <div style={styles.divs}>
        <h1 style={styles.title}>Welcome to</h1>
        <p style={styles.logoName}>SecurePass</p>
        <p style={styles.slogan}>
          O melhor e mais seguro sistema de login,
          <br />
          cadastro e gerenciamento de usuários!
        </p>
      </div>
      <figure style={styles.divs}>
        <Image
          src={cadeadoImg}
          alt=""
          style={{ width: "35%", height: "65%" }}
        />
      </figure>
      <div style={styles.containerButton}>
        <Button
          size="medium"
          variant="contained"
          style={styles.button}
          onClick={()=>router.push('/login')}
        >
          Login
        </Button>
        <Button
          size="medium"
          variant="contained"
          style={styles.button}
        >
          Cadastre-se
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
