"use client";

import { styles } from "./styles";
import cadeadoImg from "../../../public/cadeado.png";
import Image from "next/image";
import { TextField, Switch, Button } from "@mui/material";
import { useState } from "react";
const RegisterForm = () => {
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
        <h1 style={styles.title}>Registro</h1>
        <p style={styles.slogan}>
          Insira seus dados para realizar seu registro.
        </p>
      </header>
      <form style={styles.form}>
        <article style={styles.lineInput}>
          <TextField size="small" label="Nome" />
          <TextField size="small" label="Sobre nome" />
        </article>
        <article style={styles.lineInput}>
          <TextField size="small" label="Email" />
          <TextField size="small" label="Confirmar email" />
        </article>
        <article style={styles.lineInput}>
          <TextField
            size="small"
            label="Senha"
            type={checked === true ? "text" : "password"}
          />
          <TextField
            size="small"
            label="confirmar senha"
            type={checked === true ? "text" : "password"}
          />
        </article>

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
          Registrar
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
