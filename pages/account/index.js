import * as React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import s from "./account.module.css";

import mellat from "../../src/assets/images/Melaat_bank.png";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FCFAF8",
    color: "#5F5E5E",
    padding: "1.5rem",
    border: "none",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "1rem",
    color: "#1A1919",
    paddingTop: "2.5rem",
    paddingBottom: "2.5rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    border: "none",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#FCFAF8",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  {
    id: 0,
    Image: "",
    bankName: "ملت",
    title: "ملت",
    accountNumber: "9522-40-555556-1",
    shebaNumber: "IR890190000000111506037005",
    cardNumber: "6037.9918.9998.9663",
    status: "فعال",
  },
  {
    id: 1,
    Image: "",
    bankName: " آینده",
    title: "آینده",
    accountNumber: "9522-40-555556-1",
    shebaNumber: "IR890190000000111506037005",
    cardNumber: "6037.9918.9998.9663",
    status: "غیرفعال",
  },
  {
    id: 2,
    Image: "",
    bankName: " پارسیان",
    title: "پارسیان",
    accountNumber: "9522-40-555556-1",
    shebaNumber: "IR890190000000111506037005",
    cardNumber: "6037.9918.9998.9663",
    status: "فعال",
  },
];

export default function CustomizedTables() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      className={s.root}
      alignItems="center"
    >
      <Grid item xs={8}>
        <TableContainer component={Paper} className={s.tableContainer}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ minWidth: 120 }}>
                  نام بانک
                </StyledTableCell>
                <StyledTableCell style={{ minWidth: 120 }}>
                  عنوان
                </StyledTableCell>
                <StyledTableCell style={{ minWidth: 170 }}>
                  شماره حساب
                </StyledTableCell>
                <StyledTableCell style={{ minWidth: 280 }}>
                  شماره شبا
                </StyledTableCell>
                <StyledTableCell style={{ minWidth: 200 }}>
                  شماره کارت
                </StyledTableCell>
                <StyledTableCell style={{ minWidth: 71 }}>
                  وضعیت
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    <Image
                      src={mellat}
                      alt="Picture of the author"
                      width={35}
                      height={36}
                      className={s.bankImg}
                      
                    />
                    {row.bankName}
                  </StyledTableCell>
                  <StyledTableCell>{row.title}</StyledTableCell>
                  <StyledTableCell>{row.accountNumber}</StyledTableCell>
                  <StyledTableCell>{row.shebaNumber}</StyledTableCell>
                  <StyledTableCell>{row.cardNumber}</StyledTableCell>
                  <StyledTableCell>{row.status}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
