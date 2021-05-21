import { Input, Space } from "antd";
import styles from "../styles/Home.module.css";

const { Search } = Input;

export default function Home() {
  return (
    <div className={styles.container}>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={()=>{
          console.log('----------')
        }}
      />
    </div>
  );
}
