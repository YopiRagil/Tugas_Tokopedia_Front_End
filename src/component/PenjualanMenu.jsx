import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PenjualanMenuTop from "./PenjualanMenuTop";
import HomeSideBar from "./HomeSideBar";
import Divider from "@material-ui/core/Divider";
import PenjualanSubMenuTop from "./PenjualanSubMenuTop";
import PenjualanList from "./PenjualanList";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  boxCard: {
    margin: theme.spacing(2, 0, 2, 0),
    backgroundColor: "#fafafa",
  },
}));

const PenjualanMenu = (props) => {
  // console.log("home menu", props.orderData);
  const classes = useStyles();
  const handleCategoryOrder = async (statusOrder) => {
    await props.history.replace("/penjualan/" + statusOrder);
    props.getOrderCategory(statusOrder);
  };
  return (
    <div className={classes.root}>
      <HomeSideBar />
      <main className={classes.content} style={{ backgroundColor: "#fafafa" }}>
        <div className={classes.toolbar} />
        <div>
          <PenjualanMenuTop />
          <Divider />
          <PenjualanSubMenuTop
            inputCategory={(statusOrder) => handleCategoryOrder(statusOrder)}
            allData={() => props.getOrderList()}
          />
          <Card className={classes.boxCard}>
            {props.orderData.map((item) => (
              <PenjualanList
                idPesanan={item.id}
                pembeli={item.nama_pembeli}
                alamat={item.alamat_pembeli}
                produk={item.produk_dipesan}
                harga={item.harga}
                status={item.status}
                kodeResi={item.kode_resi}
                tglPesan={item.created_at}
                tglDitanggapi={item.updated_at}
              />
            ))}
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PenjualanMenu;
