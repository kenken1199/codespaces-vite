import { User } from "../types/types";

const Display = (props: User) => {
  return (
    <div>
      <h2>user-id:{props.userId}</h2>
      <h3>title:{props.title}</h3>
    </div>
  );
};

export default Display;
