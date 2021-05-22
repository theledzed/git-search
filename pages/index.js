import React, { useState } from "react";
import { Input, Radio } from "antd";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const { Search } = Input;

export default function Home() {
  const router = useRouter();
  const [optionSearch, setOptionSearch] = useState();

  const searchBy = async (value) => {
    if (optionSearch === "user") {
      router.push({ pathname: "/users", query: { value, optionSearch } });
    }else{
      router.push({ pathname: "/repositories", query: { value, optionSearch } });
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
