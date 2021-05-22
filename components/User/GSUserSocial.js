import { Tag } from "antd";
import styles from "../../styles/gsusersocial.module.css";

export default function GSUserSocial({ user }) {
  return (
    <div className={styles.userSocialColumContainer}>
      <div className={styles.userSocialContainer}>
        <div className={styles.userSocialColumn}>
          <p className={styles.itemTitleSocial}>👥 Followers:</p>
          <p className={styles.itemSocial}>
            {user.followers ? user.followers : "---"}
          </p>
        </div>
        <div className={styles.userSocialColumn}>
          <p className={styles.itemTitleSocial}>👀 Following:</p>
          <p className={styles.itemSocial}>
            {user.company ? user.company : "---"}
          </p>
        </div>
      </div>
      <div className={styles.userSocialRedirectionsContainer}>
        <p>
          {" "}
          <a
            href={`https://github.com/${user.login}?tab=repositories`}
            className={styles.redirectionsLabel}
          >
            Ver Repositorios
          </a>
        </p>
        <p>
          <a href={user.html_url} className={styles.redirectionsLabel}>
            Ver Perfil
          </a>
        </p>
      </div>
    </div>
  );
}
