import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("Appy");
  const tabs = ["Appy", "Profile", "Calendar", "Application Status", "Documents"];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <nav className="space-y-2">
        {tabs.map((tab) => (
          <Link
            key={tab}
            to={`/${tab.toLowerCase().replace(/\s+/g, "-")}`}
            className={`block p-3 rounded-lg hover:bg-gray-700 transition ${
              active === tab ? "bg-gray-700" : ""
            }`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </Link>
        ))}
      </nav>
    </div>
  );
};

const Appy = () => <div className="p-5">Appy Content</div>;
const Profile = () => <div className="p-5">Profile Content</div>;
const Calendar = () => <div className="p-5">Calendar Content</div>;
const ApplicationStatus = () => <div className="p-5">Application Status Content</div>;
const Documents = () => <div className="p-5">Documents Content</div>;

const Dashboard = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-5">
          <Routes>
            <Route path="/apply" element={<Appy />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/application-status" element={<ApplicationStatus />} />
            <Route path="/documents" element={<Documents />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
