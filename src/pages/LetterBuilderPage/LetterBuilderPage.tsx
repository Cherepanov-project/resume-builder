import LetterBuilderLeftSide from "../../../letter-builder/LetterBuilderLeftSide/LetterBuilderLeftSide";
import { LetterBuilderSetting } from "../../../letter-builder/LetterBuilderRightSide";
import LetterConstructorWorkspace from "../../../letter-builder/LetterConstructorWorkspace/LetterConstructorWorkspace";
import LetterBuilderHeader from "@/components/molecules/LetterBuilderHeader";

import { Box, Stack } from "@mui/material";

const LetterBuilderPage = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", overFlow: "hidden", scrollbarWidth: "none" }}>
      <LetterBuilderHeader />
      <Stack height={"100%"} direction={"row"}>
        <LetterBuilderLeftSide />
        <LetterConstructorWorkspace />
        <LetterBuilderSetting />
      </Stack>
    </Box>
  );
};

export default LetterBuilderPage;
