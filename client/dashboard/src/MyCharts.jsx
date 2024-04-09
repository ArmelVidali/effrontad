import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const MyLineChart = (props) => {
  const data = props.data;

  const result = [];

  // Extract unique dates
  const uniqueDates = [...new Set(data.map((item) => item.date))];

  // Count the number of objects for each unique date and create an array of objects
  uniqueDates.forEach((date) => {
    const count = data.filter((item) => item.date === date).length;
    result.push({ date, count });
  });

  console.log(result);
  return (
    <div id="charts_container">
      <LineChart
        width={600}
        height={300}
        data={result}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};
export default MyLineChart;
