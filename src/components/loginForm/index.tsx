"use client";

import { styles } from "./styles";
import cadeadoImg from "../../../public/cadeado.png";
import Image from "next/image";
import { FormControl, TextField } from "@mui/material";

const Welcome = () => {
  //const router = useRouter() --> para rotas futuras

  return (
    <div style={styles.box}>
      <figure style={styles.divs}>
        <Image
          src={cadeadoImg}
          alt=""
          style={{ width: "30%", height: "60%" }}
        />
      </figure>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={styles.title}>LOGIN</h1>
        <p style={styles.slogan}>Entre com seu email e senha.</p>
      </header>
      <FormControl fullWidth>
        <TextField label='Email' style={styles.input} margin="dense" color='secondary' size="medium"/>
        <TextField label='Senha' style={styles.input} color='secondary'/>
      </FormControl>
    </div>
  );
};

export default Welcome;
