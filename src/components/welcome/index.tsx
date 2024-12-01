import { styles } from "./styles";
import cadeadoImg from "../../../public/cadeado.png";
import Image from "next/image";
import { Button} from "@mui/material";
const Welcome = () => {
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
          style={{ width: "60%", height: "80%" }}
        />
      </figure>
         <div style={styles.containerButton}>
         <Button color='secondary' size='medium' variant="contained" style={styles.button}>Login</Button>
         <Button color='secondary' size='medium' variant="contained" style={styles.button}>Cadastre-se</Button>
         </div>
    </div>
  );
};

export default Welcome