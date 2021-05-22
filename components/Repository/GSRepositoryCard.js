import { Card, Avatar, Typography } from "antd";
const { Paragraph } = Typography;
import { EditOutlined, EllipsisOutlined, EyeOutlined } from "@ant-design/icons";
import styles from "../../styles/gsrepository.module.css";

const { Meta } = Card;

export default function GSRepositoryCard({ repository }) {
  return (
    <Card className={styles.card}>
      <Meta
        avatar={<Avatar src={repository.owner.avatar_url} />}
        title={<a href={repository.html_url}>{repository.name}</a>}
        description={
          <div>
            <p>
              <span className={styles.labelDescription}>Description:</span>
              {repository.description}
            </p>
            <p>
              <span className={styles.labelDescription}>Language:</span>
              {repository.language}
            </p>
            <p>
              <span className={styles.labelDescription}>Forks:</span>
              {repository.forks_count}
            </p>
            <p>
              <span className={styles.labelDescription}>
                <EyeOutlined />:
              </span>
              {repository.watchers_count}
            </p>
          </div>
        }
      />
      <div>
        <Paragraph  copyable={{ text: `git clone ${repository.clone_url}` }}>
          Clone repository
        </Paragraph>
      </div>
    </Card>
  );
}
