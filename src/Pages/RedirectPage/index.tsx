import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAPIData } from "../../Components/utils";
import Table from "../../Components/Table";
import Button from "../../Components/Button";

const PriceDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [tableContent, setTableContent] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getTableContent = async () => {
    try {
      setLoading(true);
      const resp = await getAPIData({
        url: "child-data" + `/${params?.id}`,
      });
      setTableContent(resp?.data?.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };
  useEffect(() => {
    getTableContent();
  }, []);
  if (loading) return <div className="App">Loading...</div>;
  return (
    <div>
      {" "}
      <div className="backBtn">
        {" "}
        <Button
          text={"Back"}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <Table
        header={["ID", "Sender", "Receiver", "Total Amount", "Paid Amount"]}
        data={tableContent}
      />
    </div>
  );
};

export default PriceDetails;
