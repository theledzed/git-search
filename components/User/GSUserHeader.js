import { Tag } from "antd";
import styles from "../../styles/gsuserheader.module.css";

export default function GSUserHeader({ user }) {
  const  copies ={
    type: "Tipo:",
    name: 'Nombre:'
  }

  return (
    <div className={styles.userHeaderContainer}>
      <div className={styles.userHeaderColumn}>
        <div className={styles.userHeaderRow}>
          <span className={styles.userHeaderName}>{copies.name} {user.name}</span>
          <span className={styles.userHeaderNameSeparator}>|</span>
          <span className={styles.userHeaderUser}>@{user.login}</span>{" "}
        </div>
        <span className={styles.userHeaderType}>
          {copies.type} <Tag color="geekblue">{user.type}</Tag>
        </span>
      </div>
    </div>
  );
}
