import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export class User {
  constructor(id, name, age, address, cpf) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
    this.cpf = cpf;
  }
}

export default function Users(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id </StyledTableCell>
            <StyledTableCell align="right">Nome</StyledTableCell>
            <StyledTableCell align="right">Idade</StyledTableCell>
            <StyledTableCell align="right">Endereço</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {Object.keys(props.values).map((keyName, i) => (
            <StyledTableRow key={props.values[keyName].id}>
              <StyledTableCell component="th" scope="row">
                {props.values[keyName].id}
              </StyledTableCell>
              <StyledTableCell align="right">{props.values[keyName].name}</StyledTableCell>
              <StyledTableCell align="right">{props.values[keyName].age}</StyledTableCell>
              <StyledTableCell align="right">{props.values[keyName].address}</StyledTableCell>
            </StyledTableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer> 
  );
}
