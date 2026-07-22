import { Link } from "react-router-dom";
import {
  FaSchool,
  FaProjectDiagram,
  FaUsers,
  FaDonate,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaBell,
  FaArrowRight,
  FaTasks,
  FaChartLine,
  FaEye,
} from "react-icons/fa";

const stats = [
  {
    title: "Schools Supported",
    value: "52",
    color: "bg-blue-500",
    icon: <FaSchool />,
  },
  {
    title: "Active Projects",
    value: "18",
    color: "bg-green-500",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Funds Distributed",
    value: "₹42 Lakhs",
    color: "bg-orange-500",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Volunteers",
    value: "126",
    color: "bg-purple-500",
    icon: <FaUsers />,
  },
];

const requests = [
  {
    id: 1,
    school: "Govt High School",
    district: "Mysuru",
    issue: "Smart Classroom",
    amount: "₹2,00,000",
    priority: "High",
  },
  {
    id: 2,
    school: "Govt Primary School",
    district: "Udupi",
    issue: "Library",
    amount: "₹1,20,000",
    priority: "Medium",
  },
  {
    id: 3,
    school: "Govt PU College",
    district: "Shivamogga",
    issue: "Computer Lab",
    amount: "₹3,50,000",
    priority: "High",
  },
];

const actions = [
  {
    title: "Browse Projects",
    icon: <FaProjectDiagram />,
    link: "/browse-projects",
    color: "bg-blue-500",
  },
  {
    title: "Manage Funds",
    icon: <FaDonate />,
    link: "/manage-funds",
    color: "bg-green-500",
  },
  {
    title: "Progress Updates",
    icon: <FaChartLine />,
    link: "/progress-updates",
    color: "bg-orange-500",
  },
  {
    title: "Reports",
    icon: <FaClipboardCheck />,
    link: "/ngo-reports",
    color: "bg-purple-500",
  },
  {
    title: "Messages",
    icon: <FaTasks />,
    link: "/messages",
    color: "bg-pink-500",
  },
  {
    title: "Notifications",
    icon: <FaBell />,
    link: "/ngo-notifications",
    color: "bg-red-500",
  },
];

function NGODashboard() {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-12">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-bold">
            Welcome NGO Partner 👋
          </h1>

          <p className="mt-3 text-blue-100 max-w-2xl">
            Manage government school development projects,
            distribute funds, track progress, and collaborate
            with schools through the VIDYADAAN platform.
          </p>

        </div>

      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Statistics */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {item.value}
                  </h2>

                </div>

                <div
                  className={`${item.color} text-white p-4 rounded-xl text-2xl`}
                >
                  {item.icon}
                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Quick Actions */}

        <div className="mt-12">

          <h2 className="text-2xl font-bold mb-6">
            Quick Actions
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {actions.map((action, index) => (

              <Link
                key={index}
                to={action.link}
                className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition"
              >

                <div
                  className={`${action.color} w-14 h-14 rounded-xl text-white flex items-center justify-center text-2xl`}
                >
                  {action.icon}
                </div>

                <h3 className="text-xl font-bold mt-5">
                  {action.title}
                </h3>

                <div className="flex items-center mt-6 text-blue-600">

                  Open

                  <FaArrowRight className="ml-2" />

                </div>

              </Link>

            ))}

          </div>

        </div>

        {/* School Requests */}

        <div className="mt-14">

          <div className="flex justify-between items-center">

            <h2 className="text-2xl font-bold">
              Recent School Requests
            </h2>

            <Link
              to="/browse-projects"
              className="text-blue-600 font-semibold"
            >
              View All
            </Link>

          </div>

          <div className="overflow-x-auto mt-6 bg-white rounded-2xl shadow-lg">

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="text-left p-4">School</th>
                  <th className="text-left p-4">District</th>
                  <th className="text-left p-4">Issue</th>
                  <th className="text-left p-4">Required</th>
                  <th className="text-left p-4">Priority</th>
                  <th className="text-left p-4">Action</th>

                </tr>

              </thead>

              <tbody>

                {requests.map((item) => (

                  <tr
                    key={item.id}
                    className="border-t"
                  >

                    <td className="p-4">{item.school}</td>

                    <td className="p-4">
                      {item.district}
                    </td>

                    <td className="p-4">
                      {item.issue}
                    </td>

                    <td className="p-4">
                      {item.amount}
                    </td>

                    <td className="p-4">

                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">

                        {item.priority}

                      </span>

                    </td>

                    <td className="p-4">

                      <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">

                        <FaEye />

                        View

                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default NGODashboard;