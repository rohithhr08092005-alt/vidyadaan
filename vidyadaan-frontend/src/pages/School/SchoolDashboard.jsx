import {
  FaSchool,
  FaUsers,
  FaChalkboardTeacher,
  FaDonate,
  FaExclamationTriangle,
  FaChartLine,
  FaCamera,
  FaFileAlt,
  FaPlus,
  FaEye,
} from "react-icons/fa";

function SchoolDashboard() {
  const stats = [
    {
      title: "Students",
      value: "520",
      icon: <FaUsers className="text-3xl text-blue-600" />,
    },
    {
      title: "Teachers",
      value: "28",
      icon: <FaChalkboardTeacher className="text-3xl text-green-600" />,
    },
    {
      title: "Open Issues",
      value: "12",
      icon: <FaExclamationTriangle className="text-3xl text-red-500" />,
    },
    {
      title: "Donations",
      value: "₹8.5L",
      icon: <FaDonate className="text-3xl text-orange-500" />,
    },
  ];

  const issues = [
    {
      title: "Smart Classroom",
      amount: "₹2,00,000",
      progress: 65,
      priority: "High",
    },
    {
      title: "Computer Lab",
      amount: "₹3,50,000",
      progress: 40,
      priority: "Medium",
    },
    {
      title: "Library",
      amount: "₹75,000",
      progress: 100,
      priority: "Completed",
    },
  ];

  const donations = [
    {
      donor: "Asha",
      amount: "₹10,000",
      date: "Today",
    },
    {
      donor: "Infosys Foundation",
      amount: "₹50,000",
      date: "Yesterday",
    },
    {
      donor: "Rahul",
      amount: "₹5,000",
      date: "Last Week",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* Hero */}
      <div className="bg-blue-700 rounded-3xl text-white p-8 shadow-lg">

        <div className="flex justify-between items-center flex-wrap gap-4">

          <div>
            <h1 className="text-4xl font-bold">
              Government High School
            </h1>

            <p className="mt-3 text-blue-100">
              Welcome back! Manage your school,
              projects and donations from one place.
            </p>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
            <FaPlus />
            Create Issue
          </button>

        </div>

      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-1 transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500">{item.title}</p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>
              </div>

              {item.icon}
            </div>
          </div>
        ))}

      </div>

      {/* School Info + Recent Donations */}
      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        {/* School Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
            <FaSchool className="text-blue-600" />
            School Information
          </h2>

          <div className="space-y-3 text-slate-700">

            <p><strong>Principal :</strong> Ramesh Kumar</p>

            <p><strong>District :</strong> Mysuru</p>

            <p><strong>State :</strong> Karnataka</p>

            <p><strong>Established :</strong> 1984</p>

            <p><strong>Students :</strong> 520</p>

            <p><strong>Teachers :</strong> 28</p>

          </div>

        </div>

        {/* Recent Donations */}
        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
            <FaDonate className="text-orange-500" />
            Recent Donations
          </h2>

          <div className="space-y-4">

            {donations.map((donation, index) => (
              <div
                key={index}
                className="flex justify-between border-b pb-3"
              >
                <div>
                  <h3 className="font-semibold">
                    {donation.donor}
                  </h3>

                  <p className="text-slate-500 text-sm">
                    {donation.date}
                  </p>
                </div>

                <span className="font-bold text-green-600">
                  {donation.amount}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Current Issues */}
      <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FaExclamationTriangle className="text-red-500" />
          Current Issues
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {issues.map((issue, index) => (
            <div
              key={index}
              className="border rounded-2xl p-5 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold">
                {issue.title}
              </h3>

              <p className="mt-2 text-slate-500">
                Required : {issue.amount}
              </p>

              <p className="mt-2">
                Priority :
                <span className="font-semibold text-orange-600">
                  {" "}
                  {issue.priority}
                </span>
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3 mt-4">

                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{
                    width: `${issue.progress}%`,
                  }}
                />

              </div>

              <p className="mt-2 text-sm">
                {issue.progress}% Funded
              </p>

              <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2">
                <FaEye />
                View Details
              </button>

            </div>
          ))}

        </div>

      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          <button className="bg-blue-600 text-white rounded-xl py-4 hover:bg-blue-700">
            <FaPlus className="mx-auto mb-2 text-xl" />
            Create Issue
          </button>

          <button className="bg-green-600 text-white rounded-xl py-4 hover:bg-green-700">
            <FaCamera className="mx-auto mb-2 text-xl" />
            Upload Photos
          </button>

          <button className="bg-orange-500 text-white rounded-xl py-4 hover:bg-orange-600">
            <FaFileAlt className="mx-auto mb-2 text-xl" />
            Generate Report
          </button>

          <button className="bg-purple-600 text-white rounded-xl py-4 hover:bg-purple-700">
            <FaChartLine className="mx-auto mb-2 text-xl" />
            View Analytics
          </button>

        </div>

      </div>

    </div>
  );
}

export default SchoolDashboard;