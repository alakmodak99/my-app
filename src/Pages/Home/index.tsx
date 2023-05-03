import React, { useEffect, useState } from "react";
import "../../App.css";
import { getAPIData } from "../../Components/utils";
import Button from "../../Components/Button";
import Table from "../../Components/Table";

function Home() {
  const [currPage, setCurrPage] = useState<number>(1);
  const [tableContent, setTableContent] = useState<any>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const getTableContent = async () => {
    try {
      setLoading(true);
      const resp = await getAPIData({
        url: "parent-data",
        data: {
          page: currPage,
        },
      });
      setTotal(resp?.data?.totalPage);
      setTableContent(resp?.data?.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };
  useEffect(() => {
    getTableContent();
  }, [currPage]);
  if (loading) return <div className="App">Loading...</div>;
  return (
    <div className="App">
      <Table
        header={[
          "ID",
          "Sender",
          "Receiver",
          "Total Amount",
          "Total Paid Amount",
        ]}
        data={tableContent}
        bool={true}
      />
      <div className="btn-container">
        <Button
          disabled={!(currPage - 1 >= 1)}
          text="Prev"
          onClick={() => {
            if (currPage - 1 >= 1) {
              setCurrPage(currPage - 1);
            }
          }}
        />
        <Button
          disabled={!(currPage + 1 <= total)}
          text="Next"
          onClick={() => {
            if (currPage + 1 <= total) {
              setCurrPage(currPage + 1);
            }
          }}
        />
      </div>
    </div>
  );
}

export default Home;
