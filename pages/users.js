import React, { useEffect, useState } from "react";
import { Input, Avatar } from "antd";
import GSLayout from "../components/GSLayout";
import { useRouter } from "next/router";
import GSUserHeader from "../components/User/GSUserHeader";
import GSUserInformation from "../components/User/GSUserInformation";
import GSUserSocial from "../components/User/GSUserSocial";
import axios from "axios";
import styles from "../styles/user.module.css";

const { Search } = Input;

export default function Users() {
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    getGitUser();
  }, []);

  const getGitUser = async () => {
    const { value } = router.query;
    const response = await axios.get(`https://api.github.com/users/${value}`);
    setUser(response.data);
  };

  return (
    <GSLayout>
      <div className={styles.userInfoContainer}>
        <div className={styles.containerHeaderInfo}>
          <Avatar
            className={styles.userAvatar}
            src={user.avatar_url}
          />
          <GSUserHeader user={user} />
        </div>
        <div className={styles.containerUserInfo}>
          <GSUserInformation user={user} />
          <GSUserSocial user={user} />
        </div>
      </div>
    </GSLayout>
  );
}
