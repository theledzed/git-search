import React, { useState } from "react";
import { Input, Radio } from "antd";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const { Search } = Input;

export default function Home() {
  const router = useRouter();
  const [optionSearch, setOptionSearch] = useState('repositories');

  const copies = {
    user: "Usuario",
    repositories: "Repositorios",
    search: "Buscar",
    searchByUser: "Buscar por nombre de usuario",
    searchByRepositories: "Buscar por nombre de repositorio",
  };

  const searchBy = async (value) => {
    if (optionSearch === "user") {
      router.push({ pathname: "/users", query: { value, optionSearch } });
    } else {
      router.push({
        pathname: "/repositories",
        query: { value, optionSearch },
      });
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/logo.png" />
      <Search
        placeholder={
          optionSearch == "repositories"
            ? copies.searchByRepositories
            : copies.searchByUser
        }
        allowClear
        className={styles.searchInput}
        enterButton={copies.search}
        size="large"
        onSearch={(value) => {
          searchBy(value);
        }}
      />
      <Radio.Group
        defaultValue="repositories"
        size="large"
        onChange={(event) => {
          setOptionSearch(event.target.value);
        }}
      >
        <Radio.Button value="repositories">{copies.repositories}</Radio.Button>
        <Radio.Button value="user">{copies.user}</Radio.Button>
      </Radio.Group>
    </div>
  );
}
