import { Tag } from "antd";
import styles from "../../styles/gsuserheader.module.css";

export default function GSUserHeader({ user }) {
  return (
    <div className={styles.userHeaderContainer}>
      <div className={styles.userHeaderColum}>
        <div className={styles.userHeaderRow}>
          <span className={styles.userHeaderName}>Nombre: {user.name}</span>
          <span className={styles.userHeaderName}>|</span>
          <span className={styles.userHeaderUser}>@{user.login}</span>{" "}
        </div>
        <span className={styles.userHeaderType}>
          Tipo: <Tag color="geekblue">{user.type}</Tag>
        </span>
      </div>
    </div>
  );
}
