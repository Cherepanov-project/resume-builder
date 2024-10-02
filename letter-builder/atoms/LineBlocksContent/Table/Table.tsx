import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"

const TableComponent = () => {
  return (
    <Table>
      <TableHead sx={{
        backgroundColor: 'rgb(234, 234, 234)',
        color: 'rgb(80, 86, 89)',
        fontSize: '14px',
        lineHeight: '120%',
        textAlign: 'left',
      }}>
        <TableCell>Заголовок</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Параграф</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Параграф</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Параграф</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>   
  ) 
}

export default TableComponent