import { Layout, Menu, Breadcrumb } from "antd";
import styles from "../styles/gslayout.module.css";

const { Header, Content, Footer } = Layout;

export default function GSLayout({ children }) {
  return (
    <Layout className="layout">
      <Header>
        <img src="logo.png" className={styles.logo} />
        <Menu theme="light" mode="horizontal">
          <Menu.Item key="1">Users</Menu.Item>
          <Menu.Item key="2">Repositories</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className={styles.siteLayoutContent}>{children}</div>
      </Content>
    </Layout>
  );
}
