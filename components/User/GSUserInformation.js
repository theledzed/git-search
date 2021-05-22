import { Tag } from "antd";
import styles from "../../styles/gsuserinformation.module.css";

export default function GSUserInformation({ user }) {
  return (
    <div className={styles.userInformationContainer}>
      <p className={styles.itemTitleInformation}>📍 Location:</p>
      <p className={styles.itemInformation}>
        {user.location ? user.location : "---"}
      </p>
      <p className={styles.itemTitleInformation}>🏢 Company:</p>
      <p className={styles.itemInformation}>
        {user.company ? user.company : "---"}
      </p>
      <p className={styles.itemTitleInformation}>📝 Blog:</p>
      <p className={styles.itemInformation}>
        {user.blog ? <a href={user.blog}>{user.blog}</a> : "---"}
      </p>
      <p className={styles.itemTitleInformation}>📧 Email:</p>
      <p className={styles.itemInformation}>
        {user.email ? user.email : "---"}
      </p>
    </div>
  );
}
