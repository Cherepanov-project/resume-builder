interface ButtonStyle {
  mt: number;
  mr: number;
  backgroundColor: string;
  color: string;
  border: string;
  ":hover": {
    backgroundColor: string;
    color: string;
    border: string;
  };
}

export const buttonStyle: ButtonStyle = {
  mt: 1,
  mr: 1,
  backgroundColor: "#462174",
  color: "white",
  border: "1px solid #462174",
  ":hover": {
    backgroundColor: "white",
    color: "#462174",
    border: "1px solid #462174",
  },
};
