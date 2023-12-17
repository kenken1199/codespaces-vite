import { User } from "../types/types";

const Display = ({ userId, title }: User) => {
  return (
    <div>
      <h2>user-id:{userId}</h2>
      <h3>title:{title}</h3>
    </div>
  );
};

export default Display;
