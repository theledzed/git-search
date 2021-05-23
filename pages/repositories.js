import React, { useEffect, useState } from "react";
import { Input, Empty, Pagination } from "antd";
import GSLayout from "../components/GSLayout";
import GSRepositoryCard from "../components/Repository/GSRepositoryCard";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../styles/repositories.module.css";

const { Search } = Input;

export default function Repositories() {
  const router = useRouter();
  const [repositories, setRepositories] = useState({});
  const [repositorySearched, setRepositorySearched] = useState(
    router.query.value
  );
  const [isEmptyState, setIsEmpyState] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [numberPage, setNumberPage] = useState(1);
  const copies = {
    searchByUser: "Busca un repositorio",
    search: "Buscar",
  };

  useEffect(() => {
    getGitRepositories();
  }, []);

  useEffect(() => {
    getGitRepositories();
  }, [repositorySearched, numberPage, perPage]);

  const getGitRepositories = async () => {
    if (repositorySearched) {
      setIsEmpyState(false);
      const response = await axios.get(
        `https://api.github.com/search/repositories`,
        {
          params: {
            q: repositorySearched,
            per_page: perPage,
            page: numberPage,
          },
        }
      );
      setTotalPages(Math.floor(response.data.total_count / perPage));
      setRepositories(response.data.items);
    } else {
      setIsEmpyState(!repositorySearched);
    }
  };

  return (
    <GSLayout
      onSearch={(value) => {
        setRepositorySearched(value);
      }}
    >
      <div className={styles.cardsContainer}>
        {!isEmptyState && repositories.length ? (
          <div>
            {repositories.map((repositoryItem) => {
              return <GSRepositoryCard repository={repositoryItem} />;
            })}
            <Pagination
              current={numberPage}
              defaultCurrent={1}
              total={totalPages}
              onChange={(value) => {
                setNumberPage(value);
              }}
              showSizeChanger={false}
              onShowSizeChange={(pageNumber, perPage) => {
                setPerPage(perPage);
              }}
            />
          </div>
        ) : (
          <div className={styles.emptyRepoContainer}>
            <Empty
              description={
                <Search
                  placeholder={copies.searchByUser}
                  allowClear
                  enterButton={copies.search}
                  size="large"
                  onSearch={(value) => {
                    setRepositorySearched(value);
                  }}
                />
              }
            ></Empty>
          </div>
        )}
      </div>
    </GSLayout>
  );
}
