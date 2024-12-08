"use client";

import { styles } from "./styles";
import cadeadoImg from "../../../public/cadeado.png";
import Image from "next/image";
import { TextField, Switch, Button } from "@mui/material";
import { useState } from "react";
const Welcome = () => {
  //const router = useRouter() --> para rotas futuras
  const [checked, setChecked] = useState(false);
  const verifyChecked = checked === true ? false : true;

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
      <form style={styles.form}>
        <TextField label="Email" color="secondary" size="medium" />
        <TextField
          label="Senha"
          color="secondary"
          type={checked === true ? "text" : "password"}
        />
        <article
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a href="" style={{ textDecoration: "none" }}>
            Esqueceu a senha?
          </a>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>Mostrar senha</span>
            <Switch
              color="secondary"
              size="medium"
              checked={checked}
              onClick={() => setChecked(verifyChecked)}
            />
          </div>
        </article>
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#3f0087", marginTop: "5%" }}
        >
          Entrar
        </Button>
      </form>
    </div>
  );
};

export default Welcome;
