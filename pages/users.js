import React, { useEffect, useState } from "react";
import { Input, Avatar, Empty, Result } from "antd";
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
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(router.query.value);
  const [isEmptyState, setIsEmpyState] = useState(false);
  const [isError, setIsError] = useState(false);
  const copies = {
    searchByUser: "Busca un usuario",
    search: "Buscar",
    notFound: 'No se encontro ningun usuario con ese username'
  };

  useEffect(() => {
    console.log(router);
    getGitUser();
  }, []);

  useEffect(() => {
    getGitUser();
  }, [userName]);

  const getGitUser = async () => {
    try {
      setIsError(false);
      if (userName) {
        setIsEmpyState(false);
        const response = await axios.get(
          `https://api.github.com/users/${userName}`
        );
        setUser(response.data);
      } else {
        setIsEmpyState(!userName);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  console.log("Result", user);

  return (
    <GSLayout
      onSearch={(value) => {
        setUserName(value);
      }}
    >
      {isError ? (
        <div className={styles.userInfoContainer}>
          <Result
            status="404"
            title="404"
            subTitle={copies.notFound}
            // extra={<Button type="primary">Back Home</Button>}
          />
        </div>
      ) : null}
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
      ) : user ? (
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
      ) : null}
    </GSLayout>
  );
}
