import Image from "next/image";
import { styles } from "./styles";
import fundo from '../../../public/fundo.jpeg'
import { Button } from "@mui/material";
const LoginForm = () => {
  return (
    <div style={styles.box}>
        <Image
            style={{ 
                height:'5%',
                width: "100%",}}
            src={fundo}
            alt=''
        />
      <form action="" style={styles.backgroundForm}>
        <h1 style={styles.title}>Login</h1>
        <label style={styles.label} htmlFor="email">Email</label>
        <input id='email' style={styles.input}/>
        <label style={styles.label} htmlFor="password">Senha</label>
        <input id='password' style={styles.input}/>
        <Button variant="contained">
            Entrar
        </Button>
        <Button variant="contained">
            Entrar
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
