import React, { useEffect, useState } from "react";
import { Input, Empty, Pagination } from "antd";
import GSLayout from "../components/GSLayout";
import GSUserCard from "../components/User/GSUserCard";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../styles/userdetail.module.css";

const { Search } = Input;

export default function Repositories() {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [userSearched, setUserSearched] = useState(
    router.query.value
  );
  const [isEmptyState, setIsEmpyState] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [perPage, setPerPage] = useState(9);
  const [numberPage, setNumberPage] = useState(1);
  const copies = {
    searchByUser: "Busca por usuario",
    search: "Buscar",
  };

  useEffect(() => {
    getGitRepositories();
  }, []);

  useEffect(() => {
    getGitRepositories();
  }, [userSearched, numberPage, perPage]);

  const getGitRepositories = async () => {
    if (userSearched) {
      setIsEmpyState(false);
      const response = await axios.get(`https://api.github.com/search/users`, {
        params: {
          q: userSearched,
          per_page: perPage,
          page: numberPage,
        },
      });
      setTotalPages(Math.floor(response.data.total_count / perPage));
      setUser(response.data.items);
    } else {
      setIsEmpyState(!userSearched);
    }
  };

  return (
    <GSLayout
      onSearch={(value) => {
        setUserSearched(value);
      }}
    >
      <div className={styles.cardsContainer}>
        {!isEmptyState && user.length ? (
          <div className={styles.wrapContainer}>
            {user.map((repositoryItem, index) => {
              return <GSUserCard key={index} user={repositoryItem} />;
            })}
            {totalPages > 0 ? (
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
            ) : null}
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
                    setUserSearched(value);
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
