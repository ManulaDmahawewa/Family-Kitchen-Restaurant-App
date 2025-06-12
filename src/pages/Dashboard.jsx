import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 700 },
  { name: "Mar", users: 600 },
  { name: "Apr", users: 900 },
];

function Dashboard() {
  return (
    <div className="dashboard-container">
      <p className="welcome-tex">Welcome to the Admin Dashboard</p>
      <h1 className="text-2xl font-semibold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chart */}
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-lg font-bold mb-2">User Growth</h2>
          <LineChart width={400} height={250} data={data}>
            <Line type="monotone" dataKey="users" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>

        {/* Example card */}
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-lg font-bold mb-2">Total Users</h2>
          <p className="text-3xl font-semibold">1,240</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
