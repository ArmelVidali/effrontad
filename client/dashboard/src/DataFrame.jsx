import { useEffect, useState } from "react";

const DataFrame = (props) => {
  const selected_table = props.selected_table;
  const dataframe_view = props.dataframe_view;
  const data = props.data;
  const setData = props.setData;

  useEffect(() => {
    const fetchData = async () => {
      console.log(`http://localhost:3001/?table=${selected_table}`);
      try {
        const res = await fetch(
          `http://localhost:3001/?table=${selected_table}`
        );
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [selected_table]);

  return (
    <div id="df">
      <table>
        <thead>
          <tr>
            {dataframe_view[selected_table].map((element, index) => (
              <td>{element}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr
              key={index}
              className={
                Object.keys(element).includes("status")
                  ? element["status"] === "Traitée"
                    ? "processed_order"
                    : "unprocessed_order"
                  : "null"
              }
            >
              {Object.values(element).map((value, index) => (
                <td>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataFrame;
