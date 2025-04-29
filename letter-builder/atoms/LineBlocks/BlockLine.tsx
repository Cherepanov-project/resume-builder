import { FC, memo } from "react";
import { Table, TableBody, TableRow, ThemeProvider } from "@mui/material";
import { T_BlockElement } from "../../../src/types//landingBuilder";
import { BlockLineCellList } from "./BlockLineCellList";

import theme from "./Theme";
export interface BlockLineProps {
  id: string;
  widths: string[];
  children: T_BlockElement[] | undefined;
}

const BlockLine: FC<BlockLineProps> = ({ id, widths, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Table key={id}>
        <TableBody>
          <TableRow
            data-testid='0'
            id={id}
            draggable
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <BlockLineCellList id={id} widths={widths} children={children} />
          </TableRow>
        </TableBody>
      </Table>
    </ThemeProvider>
  );
};

export default memo(BlockLine);