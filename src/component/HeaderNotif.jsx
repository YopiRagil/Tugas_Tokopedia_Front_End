import React from "react";
import { Card, Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

const Notif = () => {
  return (
    <Card style={{ width: "25rem" }}>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="transaksi" title="Transaksi">
          <div style={{ padding: "0 3px 0 10px" }}>
            <div className="row" style={{ paddingBottom: "15px" }}>
              <div className="col-4">
                <strong>Penjualan</strong>
              </div>
              <div className="col-4"></div>
              <div className="col-4">
                <strong>Lihat semua</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-3 statusPesanan">Pesan Baru</div>
              <div className="col-3 statusPesanan">Siap Dikirim</div>
              <div className="col-3 statusPesanan">Sedang Dikirim</div>
              <div className="col-3 statusPesanan">Sampai tujuan</div>
            </div>
            <br />
            <hr />
            <div>
              <p>
                <strong>Untuk kamu</strong>
              </p>
              <img src={require("../media/imageinnotif.jpg")} />
            </div>
          </div>
        </Tab>
        <Tab eventKey="update" title="Update"></Tab>
      </Tabs>
    </Card>
  );
};
export default Notif;
