import React, { useEffect, useState } from "react";
import { Input, Avatar } from "antd";
import GSLayout from "../components/GSLayout";
import GSUserCard from "../components/User/GSUserCard";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../styles/repositories.module.css";

const { Search } = Input;

export default function Repositories() {
  const [repositories, setRepositories] = useState({});
  const router = useRouter();

  useEffect(() => {
    getGitRepositories();
  }, []);

  const getGitRepositories = async () => {
    const { value } = router.query;
    console.log("value", value);
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${value}`
    );
    setRepositories(response.data.items);
  };

  return (
    <GSLayout>
      <div className={styles.cardsContainer} >

      {repositories.length
        ? repositories.map((repository) => {
            console.log("------repository------", repository);
            return <GSUserCard repositories={repository} />;
          })
        : null}
      </div>
    </GSLayout>
  );
}
