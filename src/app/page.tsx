import Welcome from "@/components/welcome";
import { styles } from "./styles";

export default function Home() {
  return (
    <div style={styles.pageSize}>
      <Welcome/>
    </div>
  );
}
