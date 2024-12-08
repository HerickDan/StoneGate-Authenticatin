'use client'
import { styles } from "./styles";
import dynamic from "next/dynamic";

const WelcomeComponent = dynamic(()=>import('../components/welcomeBox'),{
  ssr:false
})


export default function Home() {
  return (
    <div style={styles.pageSize}>
      <WelcomeComponent/>
    </div>
  );
}
