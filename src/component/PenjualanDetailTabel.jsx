import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  titleInfo: {
    width: "140px",
    padding: "10px 0 0 10px ",
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  pemisah: {
    width: "10px",
    padding: "0px",
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  detailInfo: {
    minwidth: "400px",
    padding: "0",
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  table: {
    width: "470px",
    marginLeft: "-15px",
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function createData(judul, pemisah, detail) {
  return { judul, pemisah, detail };
}

export default function DetailPesanan(props) {
  const classes = useStyles();
  const rows = [
    createData("Id pesanan", ": ", props.idPesanan),
    createData("Nama pembeli", ": ", props.pembeli),
    createData("Alamat pembeli", ": ", props.alamat),
    createData("Produk dibeli", ": ", props.produk),
    createData("Harga", ": ", props.harga),
    createData("Kode Resi", ": ", props.kodeResi),
    createData("Tanggal Pesan", ": ", props.tglPesan),
    createData("Tanggal Ditanggapi", ": ", props.tglDitanggapi),
  ];

  return (
    <Table className={classes.table}>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.judul}>
            <TableCell className={classes.titleInfo}>{row.judul}</TableCell>
            <TableCell className={classes.pemisah}>{row.pemisah}</TableCell>
            <TableCell className={classes.detailInfo}>{row.detail}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
