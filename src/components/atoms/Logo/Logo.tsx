import { ILayoutBlock } from "@/types/landingBuilder";
import { useState, useEffect, memo } from "react";

type StyleType = {
  [key: string]: string | number;
};

const Logo: React.FC<ILayoutBlock> = ({ props }) => {
  const [stringFields, setStringFields] = useState<{ [k: string]: string }>({
    text: props?.text || "",

    imgUrl: props?.imgUrl || "",
  });

  useEffect(() => {
    setStringFields({
      text: props?.text || "",

      imgUrl: props?.imgUrl || "",
    });
  }, [props]);

  const wrapperStyle: StyleType = {
    ...props?.wrapperStyle,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    flexDirection: "column",
    backgroundSize: "contain",
    width: "auto",
    backgroundRepeat: "no-repeat",
  };

  const content = () => {
    return (
      <div
        style={{
          ...props.style,

          ...{ width: "130px", height: "130px", margin: "10px" },
        }}
      >
        {stringFields.imgUrl ? (
          <img src={stringFields.imgUrl} alt={stringFields.text}></img>
        ) : (
          stringFields.text
        )}
      </div>
    );
  };

  return <div style={{ ...props.style, ...wrapperStyle }}>{content()}</div>;
};

export default memo(Logo);
