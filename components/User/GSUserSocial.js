import { Tag } from "antd";
import styles from "../../styles/gsusersocial.module.css";

export default function GSUserSocial({ user }) {
  const copies = {
    followers: "Seguidores:",
    following: "Siguiendo:",
    viewRepos: "Ver Repositorios",
    viewProfile: "Ver Perfil",
  };

  return (
    <div className={styles.userSocialColumnContainer}>
      <div className={styles.userSocialContainer}>
        <div className={styles.userSocialColumn}>
          <p className={styles.itemTitleSocial}>👥 {copies.followers}</p>
          <p className={styles.itemSocial}>
            {user.followers ? user.followers : "---"}
          </p>
        </div>
        <div className={styles.userSocialColumn}>
          <p className={styles.itemTitleSocial}>👀 {copies.following}</p>
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
            {copies.viewRepos}
          </a>
        </p>
        <p>
          <a href={user.html_url} className={styles.redirectionsLabel}>
            {copies.viewProfile}
          </a>
        </p>
      </div>
    </div>
  );
}
