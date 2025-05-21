import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import classes from "./Avatars.module.scss";
import { IElementsProps } from "@/types/landingBuilder";
import { setProps } from "@/store/landingBuilder/layoutSlice";

interface AvatarItem {
  id: string;
  img: string;
  title: string;
}

interface AvatarsProps extends IElementsProps {
  props: {
    Avatars: AvatarItem[];
  };
}

const Avatars = ({ props, layout }: AvatarsProps) => {
  const dispatch = useDispatch();
  const { Avatars } = props;
  const currentList = Avatars || [];

  useEffect(() => {
    if (currentList.length === 0) {
      const secondItem = {
        id: layout.i || nanoid(),
        values: [
          {
            id: nanoid(),
            img: "",
            title: "",
          },
        ],
        size: 1,
      };
      console.log("ava", secondItem);
      dispatch(setProps(secondItem));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentList.length, layout.i, dispatch]);

  return (
    <Stack
      key={nanoid()}
      direction="row"
      spacing={2}
      className={classes.wrapper}
      sx={{ flexDirection: "column" }}
    >
      {currentList ? (
        currentList.map((item) => (
          <div key={item.id} className={classes.wrap}>
            <Avatar
              className={classes.avatar}
              src={item.img}
              alt={String(item.title)}
              sx={{ objectFit: "cover" }}
            />
            <div className={classes.nick}>{item.title || "Enter name"}</div>
          </div>
        ))
      ) : (
        <>
          <Avatar className={classes.avatar} alt="avatar" src={"url"} sx={{ objectFit: "cover" }} />
          <div key={nanoid()} className={classes.nick}>
            Enter name
          </div>
        </>
      )}
    </Stack>
  );
};

export default Avatars;
