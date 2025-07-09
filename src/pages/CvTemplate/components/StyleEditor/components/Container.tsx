import { ContainerProps } from "../type";

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: 5,
        padding: "10px",
        margin: "10px 0",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
