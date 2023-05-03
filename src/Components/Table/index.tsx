import React from "react";
import { useNavigate } from "react-router-dom";

const Table = ({
  header,
  data,
  bool,
}: {
  header?: any;
  data: any;
  bool?: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <div style={{ marginTop: "70px" }}>
      <table>
        <thead>
          <tr>
            {header &&
              header?.map((e: any, i: React.Key | null | undefined) => {
                return <th key={i}>{e}</th>;
              })}
          </tr>
        </thead>
        {data?.length > 0 ? (
          <tbody>
            {data?.map((e: any, i: React.Key) => {
              return (
                <tr className="table-row" key={i}>
                  <td data-label={header?.[0]} className="table-cell">
                    {e?.id}
                  </td>
                  <td data-label={header?.[1]} className="table-cell">
                    {e?.sender}
                  </td>
                  <td data-label={header?.[2]} className="table-cell">
                    {e?.receiver}
                  </td>
                  <td data-label={header?.[3]} className="table-cell">
                    {e?.totalAmount}
                  </td>
                  <td
                    onClick={() => {
                      if (!bool) return;
                      navigate(`/price-details/${e?.id}`);
                    }}
                    data-label={header?.[4]}
                    className={`table-cell ${bool ? 'click' :""}`}
                  >
                    {bool ? e?.totalPaidAmount : e?.paidAmount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <td>No Data Found</td>
        )}
      </table>
    </div>
  );
};

export default Table;
