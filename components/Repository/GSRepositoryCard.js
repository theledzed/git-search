import { Card, Avatar, Typography } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import styles from "../../styles/gsrepositorycard.module.css";

const { Paragraph } = Typography;
const { Meta } = Card;

export default function GSRepositoryCard({ repository }) {
  const copies = {
    description: "Descripción:",
    language: "Lenguaje:",
    forks: "Forks:",
    clone: "Clonar el repositorio",
  };

  return (
    <Card className={styles.card}>
      <Meta
        avatar={<Avatar src={repository.owner.avatar_url} />}
        title={<a href={repository.html_url}>{repository.name}</a>}
        description={
          <div>
            <p className={styles.containerLabelDescription}>
              <span className={styles.labelDescription}>
                {copies.description}
              </span>
              {repository.description}
            </p>
            <p className={styles.containerLabelDescription}>
              <span className={styles.labelDescription}>{copies.language}</span>
              {repository.language}
            </p>
            <p className={styles.containerLabelDescription}>
              <span className={styles.labelDescription}>{copies.forks}</span>
              {repository.forks_count}
            </p>
            <p className={styles.containerLabelDescription}>
              <span className={styles.labelDescription}>
                <EyeOutlined />:
              </span>
              {repository.watchers_count}
            </p>
          </div>
        }
      />
      <div>
        <Paragraph copyable={{ text: `git clone ${repository.clone_url}` }}>
          {copies.clone}
        </Paragraph>
      </div>
    </Card>
  );
}
