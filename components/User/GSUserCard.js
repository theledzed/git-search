import { Card, Avatar, Typography } from "antd";
const { Paragraph } = Typography;
import { EditOutlined, EllipsisOutlined, EyeOutlined } from "@ant-design/icons";
import styles from "../../styles/gsusercard.module.css";

const { Meta } = Card;

export default function GSUserCard({ repositories }) {
  return (
    <Card className={styles.card}>
      <Meta
        avatar={<Avatar src={repositories.owner.avatar_url} />}
        title={<a href={repositories.html_url}>{repositories.name}</a>}
        description={
          <div>
            <p>
              <span className={styles.labelDescription}>Description:</span>
              {repositories.description}
            </p>
            <p>
              <span className={styles.labelDescription}>Language:</span>
              {repositories.language}
            </p>
            <p>
              <span className={styles.labelDescription}>Forks:</span>
              {repositories.forks_count}
            </p>
            <p>
              <span className={styles.labelDescription}>
                <EyeOutlined />:
              </span>
              {repositories.watchers_count}
            </p>
          </div>
        }
      />
      <div>
        <Paragraph  copyable={{ text: `git clone ${repositories.clone_url}` }}>
          Clone repository
        </Paragraph>
      </div>
    </Card>
  );
}
