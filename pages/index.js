import React, { useEffect, useState } from "react";
import { Input, Radio } from "antd";
import axios from "axios";
import RepositoriesContext from "../utils/context/UserContext";
import UserContext from "../utils/context/UserContext";
import styles from "../styles/Home.module.css";

const { Search } = Input;

export default function Home() {
  const [user, setUser] = useState({});
  const [repositories, setRepositories] = useState({});
  const [optionSearch, setOptionSearch] = useState();


  const searchBy = async (value) => {
    if (optionSearch == "user") {
      const response = await axios.get(`https://api.github.com/users/${value}`);
    } else {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${value}`
      );
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/logo.png" />
      <Search
        placeholder="input search text"
        allowClear
        className={styles.searchInput}
        enterButton="Search"
        size="large"
        onSearch={(value) => {
          searchBy(value);
        }}
      />
      <Radio.Group
        defaultValue="a"
        size="large"
        onChange={(event) => {
          setOptionSearch(event.target.value);
        }}
      >
        <Radio.Button value="user">Users</Radio.Button>
        <Radio.Button value="repositories">Repositories</Radio.Button>
      </Radio.Group>
    </div>
  );
}
