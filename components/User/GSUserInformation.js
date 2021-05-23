import styles from "../../styles/gsuserinformation.module.css";

export default function GSUserInformation({ user }) {
  const copies = {
    location: "Locación:",
    company: "Empresa:",
    blog: "Blog:",
    email: "Correo electrónico",
  };

  return (
    <div className={styles.userInformationContainer}>
      <p className={styles.itemTitleInformation}>📍 {copies.location}</p>
      <p className={styles.itemInformation}>
        {user.location ? user.location : "---"}
      </p>
      <p className={styles.itemTitleInformation}>🏢 {copies.company}</p>
      <p className={styles.itemInformation}>
        {user.company ? user.company : "---"}
      </p>
      <p className={styles.itemTitleInformation}>📝 {copies.blog}</p>
      <p className={styles.itemInformation}>
        {user.blog ? <a href={user.blog}>{user.blog}</a> : "---"}
      </p>
      <p className={styles.itemTitleInformation}>📧 {copies.email}</p>
      <p className={styles.itemInformation}>
        {user.email ? user.email : "---"}
      </p>
    </div>
  );
}
