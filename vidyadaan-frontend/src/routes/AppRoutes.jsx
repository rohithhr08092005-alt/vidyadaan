import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Public Pages
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Donation from "../pages/Donation/Donation";

// Auth Pages
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

// School / Principal
import SchoolDashboard from "../pages/School/SchoolDashboard";
import PrincipalDashboard from "../pages/School/PrincipalDashboard";
import SchoolProfile from "../pages/School/SchoolProfile";
import Infrastructure from "../pages/School/Infrastructure";
import CreateIssue from "../pages/School/CreateIssue";
import ManageIssues from "../pages/School/ManageIssues";
import IssueDetails from "../pages/School/IssueDetails";
import DonationHistory from "../pages/School/DonationHistory";
import ProjectProgress from "../pages/School/ProjectProgress";
import Gallery from "../pages/School/Gallery";
import Documents from "../pages/School/Documents";
import Reports from "../pages/School/Reports";
import Notifications from "../pages/School/Notifications";

// NGO
import NGODashboard from "../pages/NGO/NGODashboard";
import NGOProfile from "../pages/NGO/NGOProfile";
import BrowseProjects from "../pages/NGO/BrowseProjects";
import ProjectDetails from "../pages/NGO/ProjectDetails";
import AssignedProjects from "../pages/NGO/AssignedProjects";
import ManageFunds from "../pages/NGO/ManageFunds";
import ProgressUpdates from "../pages/NGO/ProgressUpdates";
import Volunteers from "../pages/NGO/Volunteers";
import NGOReports from "../pages/NGO/Reports";
import NGONotifications from "../pages/NGO/Notifications";
import Messages from "../pages/NGO/Messages";
import NGOSettings from "../pages/NGO/Settings";

// Admin
import AdminDashboard from "../pages/Admin/AdminDashboard";
import VerifySchools from "../pages/Admin/VerifySchools";
import ManageSchools from "../pages/Admin/ManageSchools";
import AdminSchoolDetails from "../pages/Admin/SchoolDetails";
import ManageDonors from "../pages/Admin/ManageDonors";
import DonorDetails from "../pages/Admin/DonorDetails";
import ManageNGOs from "../pages/Admin/ManageNGOs";
import NGODetails from "../pages/Admin/NGODetails";
import ManageProjects from "../pages/Admin/ManageProjects";
import AdminProjectDetails from "../pages/Admin/ProjectDetails";
import ManageDonations from "../pages/Admin/ManageDonations";
import DonationDetails from "../pages/Admin/DonationDetails";
import Analytics from "../pages/Admin/Analytics";
import AdminReports from "../pages/Admin/Reports";
import AdminNotifications from "../pages/Admin/Notifications";
import Users from "../pages/Admin/Users";
import AdminSettings from "../pages/Admin/Settings";
import AuditLogs from "../pages/Admin/AuditLogs";

// Donor
import DonorDashboard from "../pages/Donor/DonorDashboard";
import BrowseSchools from "../pages/Donor/BrowseSchools";
import SchoolDetails from "../pages/Donor/SchoolDetails";
import Donate from "../pages/Donor/Donate";
import DonorDonationHistory from "../pages/Donor/DonationHistory";
import Wishlist from "../pages/Donor/Wishlist";
import SavedSchools from "../pages/Donor/SavedSchools";
import ImpactTracker from "../pages/Donor/ImpactTracker";
import PaymentSuccess from "../pages/Donor/PaymentSuccess";
import PaymentFailure from "../pages/Donor/PaymentFailure";
import DonorProfile from "../pages/Donor/Profile";
import DonorNotifications from "../pages/Donor/Notifications";

// Common
import Profile from "../pages/Profile/Profile";
import Projects from "../pages/Projects/Projects";
import Issues from "../pages/Issues/Issues";
import Transparency from "../pages/Transparency/Transparency";
import GeneralSettings from "../pages/Settings/Settings";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schools" element={<SchoolDashboard />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/ngos" element={<NGODashboard />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Authentication */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Dashboard */}
      <Route element={<DashboardLayout />}>

        {/* Admin */}
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/verify-schools" element={<VerifySchools />} />
        <Route path="/manage-schools" element={<ManageSchools />} />
        <Route path="/admin-school-details" element={<AdminSchoolDetails />} />
        <Route path="/manage-donors" element={<ManageDonors />} />
        <Route path="/donor-details" element={<DonorDetails />} />
        <Route path="/manage-ngos" element={<ManageNGOs />} />
        <Route path="/ngo-details" element={<NGODetails />} />
        <Route path="/manage-projects" element={<ManageProjects />} />
        <Route path="/admin-project-details" element={<AdminProjectDetails />} />
        <Route path="/manage-donations" element={<ManageDonations />} />
        <Route path="/donation-details" element={<DonationDetails />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/admin-reports" element={<AdminReports />} />
        <Route path="/admin-notifications" element={<AdminNotifications />} />
        <Route path="/users" element={<Users />} />
        <Route path="/admin-settings" element={<AdminSettings />} />
        <Route path="/audit-logs" element={<AuditLogs />} />

        {/* Principal */}
        <Route path="/principal-dashboard" element={<PrincipalDashboard />} />
        <Route path="/school-profile" element={<SchoolProfile />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/create-issue" element={<CreateIssue />} />
        <Route path="/manage-issues" element={<ManageIssues />} />
        <Route path="/issue-details" element={<IssueDetails />} />
        <Route path="/donation-history" element={<DonationHistory />} />
        <Route path="/project-progress" element={<ProjectProgress />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/notifications" element={<Notifications />} />

        {/* NGO */}
        <Route path="/ngo-profile" element={<NGOProfile />} />
        <Route path="/browse-projects" element={<BrowseProjects />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/assigned-projects" element={<AssignedProjects />} />
        <Route path="/manage-funds" element={<ManageFunds />} />
        <Route path="/progress-updates" element={<ProgressUpdates />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/ngo-reports" element={<NGOReports />} />
        <Route path="/ngo-notifications" element={<NGONotifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/ngo-settings" element={<NGOSettings />} />

        {/* Donor */}
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route path="/browse-schools" element={<BrowseSchools />} />
        <Route path="/school-details" element={<SchoolDetails />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donor-history" element={<DonorDonationHistory />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/saved-schools" element={<SavedSchools />} />
        <Route path="/impact-tracker" element={<ImpactTracker />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failure" element={<PaymentFailure />} />
        <Route path="/donor-profile" element={<DonorProfile />} />
        <Route path="/donor-notifications" element={<DonorNotifications />} />

        {/* Common */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/settings" element={<GeneralSettings />} />

      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;