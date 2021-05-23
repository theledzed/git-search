import { Layout, Menu, Input } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/gslayout.module.css";

const { Header, Content } = Layout;
const { Search } = Input;

export default function GSLayout({ children, onSearch }) {
  const [menuItemSelected, setMenuItemSelected] = useState([""]);
  const router = useRouter();
  const copies = {
    user: "Usuario",
    repositories: "Repositorios",
    searchByUser: "Busca por usuarios",
    searchRepositories: "Busca por repositorios",
  };
  useEffect(() => {
    switch (router.route) {
      case "/users":
        setMenuItemSelected(["1"]);
        break;
      case "/userDetail":
        setMenuItemSelected(["1"]);
        break;
      case "/repositories":
        setMenuItemSelected(["2"]);
        break;
      case "/":
        setMenuItemSelected([""]);
        break;
    }
  }, []);

  return (
    <Layout className="layout">
      <Header>
        <img
          src="logo.png"
          onClick={() => {
            router.push("/");
          }}
          className={styles.logo}
        />
        <Menu
          onClick={(menuItem) => {
            if (menuItem.key == "1") {
              router.push("/users");
            } else {
              router.push("/repositories");
            }
          }}
          theme="light"
          on
          selectedKeys={menuItemSelected}
          mode="horizontal"
        >
          <Menu.Item key="1">{copies.user}</Menu.Item>
          <Menu.Item key="2">{copies.repositories}</Menu.Item>
        </Menu>
        <div className={styles.searchBar}>
          <Search
            placeholder={
              router.route == "/users" || router.route == "/userDetail"
                ? copies.searchByUser
                : copies.searchRepositories
            }
            onSearch={(value) => {
              onSearch(value);
            }}
            enterButton
          />
        </div>
      </Header>
      <Content>
        <div className={styles.siteLayoutContent}>{children}</div>
      </Content>
    </Layout>
  );
}
