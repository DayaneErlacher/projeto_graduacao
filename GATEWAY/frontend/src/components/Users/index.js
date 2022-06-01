import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'


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
  constructor(id, username, user_password, age, address, cpf) {
    this.id = id;
    this.username = username;
    this.user_password = user_password;
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
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {Object.keys(props.values).map((keyName, i) => (
            <StyledTableRow key={props.values[keyName].id}>
              <StyledTableCell component="th" scope="row">
                {props.values[keyName].id}
              </StyledTableCell>
              <StyledTableCell align="right">{props.values[keyName].username}</StyledTableCell>
              <StyledTableCell align="right">{props.values[keyName].age}</StyledTableCell>
              <StyledTableCell align="right">{props.values[keyName].address}</StyledTableCell>
              <StyledTableCell align="right">
                <button onClick={() => props.edit(props.values[keyName])} ><FaEdit /></button>
              </StyledTableCell>
              <StyledTableCell align="right">

                <button onClick={() => props.delete(props.values[keyName].id)}><FaTrashAlt /></button>
              </StyledTableCell>

            </StyledTableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer> 
  );
}
