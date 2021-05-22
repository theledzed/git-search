import React, { useEffect, useState } from "react";
import { Input, Avatar, Empty } from "antd";
import GSLayout from "../components/GSLayout";
import { useRouter } from "next/router";
import GSUserHeader from "../components/User/GSUserHeader";
import GSUserInformation from "../components/User/GSUserInformation";
import GSUserSocial from "../components/User/GSUserSocial";
import axios from "axios";
import styles from "../styles/user.module.css";

const { Search } = Input;

export default function Users() {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState(router.query.value);
  const [isEmptyState, setIsEmpyState] = useState(false);
  const copies = {
    searchByUser: "Busca un usuario",
    search: "Buscar",
  };

  useEffect(() => {
    console.log(router);
    getGitUser();
  }, []);

  useEffect(() => {
    getGitUser();
  }, [userName]);

  const getGitUser = async () => {
    if (userName) {
      setIsEmpyState(false);
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      setUser(response.data);
    } else {
      setIsEmpyState(!userName);
    }
  };

  return (
    <GSLayout
      onSearch={(value) => {
        setUserName(value);
      }}
    >
      {isEmptyState ? (
        <div className={styles.userInfoContainer}>
          <Empty
            description={
              <Search
                placeholder={copies.searchByUser}
                allowClear
                enterButton={copies.search}
                size="large"
                onSearch={(value) => {
                  setUserName(value);
                }}
              />
            }
          ></Empty>
        </div>
      ) : (
        <div className={styles.userInfoContainer}>
          <div className={styles.containerHeaderInfo}>
            <Avatar className={styles.userAvatar} src={user.avatar_url} />
            <GSUserHeader user={user} />
          </div>
          <div className={styles.containerUserInfo}>
            <GSUserInformation user={user} />
            <GSUserSocial user={user} />
          </div>
        </div>
      )}
    </GSLayout>
  );
}
