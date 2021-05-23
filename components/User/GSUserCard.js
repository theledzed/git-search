import { Card, Avatar } from "antd";
import { useRouter } from "next/router";

const { Meta } = Card;

export default function GSUserCard({ user }) {
  const copies = {
    id: "Id:",
    type: "Tipo:",
  };

  const router = useRouter();
  return (
    <Card className={styles.card}>
      <Meta
        avatar={<Avatar src={user.avatar_url} />}
        title={
          <a
            onClick={() => {
              router.push({
                pathname: "/userDetail",
                query: { value: user.login },
              });
            }}
          >
            {user.login}
          </a>
        }
        description={
          <div>
            <p className={styles.containerLabelDescription}>
              <span className={styles.labelDescription}>{copies.id}</span>
              {user.id ? user.id : "---"}
            </p>
            <p className={styles.containerLabelDescription}>
              <span className={styles.labelDescription}>{copies.type}</span>
              {user.type ? user.type : "---"}
            </p>
          </div>
        }
      />
    </Card>
  );
}
