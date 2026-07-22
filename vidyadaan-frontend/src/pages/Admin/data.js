export const overviewStats = [
  { label: 'Total Schools', value: '184', change: '+12%', icon: 'FiSchool', color: 'from-blue-600 to-blue-500' },
  { label: 'Verified Schools', value: '148', change: '+8%', icon: 'FiCheckCircle', color: 'from-emerald-500 to-emerald-600' },
  { label: 'Pending Verifications', value: '36', change: '-4%', icon: 'FiClock', color: 'from-orange-500 to-orange-600' },
  { label: 'Total Donors', value: '2.4K', change: '+18%', icon: 'FiUsers', color: 'from-violet-500 to-violet-600' },
  { label: 'Total NGOs', value: '64', change: '+7%', icon: 'FiBriefcase', color: 'from-teal-500 to-teal-600' },
  { label: 'Active Projects', value: '91', change: '+5%', icon: 'FiTarget', color: 'from-rose-500 to-rose-600' },
  { label: 'Total Donations', value: '₹12.8Cr', change: '+22%', icon: 'FiDollarSign', color: 'from-amber-500 to-amber-600' },
  { label: 'Students Benefited', value: '18.6K', change: '+15%', icon: 'FiBookOpen', color: 'from-cyan-500 to-cyan-600' },
];

export const monthlyDonations = [
  { month: 'Jan', value: 180 },
  { month: 'Feb', value: 240 },
  { month: 'Mar', value: 210 },
  { month: 'Apr', value: 320 },
  { month: 'May', value: 290 },
  { month: 'Jun', value: 380 },
];

export const stateSchools = [
  { state: 'Telangana', schools: 58 },
  { state: 'Andhra Pradesh', schools: 42 },
  { state: 'Karnataka', schools: 31 },
  { state: 'Tamil Nadu', schools: 27 },
  { state: 'Maharashtra', schools: 26 },
];

export const projectStatus = [
  { name: 'Completed', value: 48 },
  { name: 'In Progress', value: 31 },
  { name: 'Planning', value: 12 },
  { name: 'Delayed', value: 9 },
];

export const donationCategories = [
  { name: 'Infrastructure', value: 42 },
  { name: 'Education', value: 28 },
  { name: 'Health', value: 18 },
  { name: 'Digital', value: 12 },
];

export const pendingSchools = [
  { name: 'ZPHS Chintal', principal: 'Ramesh Rao', district: 'Medchal', state: 'Telangana', udiise: '12345678901', status: 'Pending' },
  { name: 'GHS Keesara', principal: 'Shanthi Devi', district: 'Rangareddy', state: 'Telangana', udiise: '23456789012', status: 'Pending' },
];

export const schools = [
  { name: 'ZPHS Chintal', principal: 'Ramesh Rao', district: 'Medchal', students: 620, status: 'Verified', projects: 4, state: 'Telangana' },
  { name: 'GHS Keesara', principal: 'Shanthi Devi', district: 'Rangareddy', students: 540, status: 'Pending', projects: 2, state: 'Telangana' },
  { name: 'MPPS Narayanpet', principal: 'Asha Reddy', district: 'Narayanpet', students: 410, status: 'Suspended', projects: 1, state: 'Telangana' },
];

export const donors = [
  { name: 'Asha Kumar', email: 'asha@example.com', phone: '+91 98765 43210', donations: '₹2.4L', schools: 3, status: 'Active' },
  { name: 'Vikram S', email: 'vikram@example.com', phone: '+91 91234 56789', donations: '₹1.8L', schools: 2, status: 'Pending' },
];

export const ngos = [
  { name: 'BrightFuture Foundation', registration: 'NGO/2024/001', projects: 8, funds: '₹18L', status: 'Active' },
  { name: 'EduCare Trust', registration: 'NGO/2024/002', projects: 5, funds: '₹12L', status: 'Review' },
];

export const projects = [
  { name: 'Digital Learning Lab', school: 'ZPHS Chintal', ngo: 'BrightFuture', budget: '₹2.4L', raised: '₹1.9L', remaining: '₹50K', status: 'In Progress', priority: 'High' },
  { name: 'Library Upgrade', school: 'GHS Keesara', ngo: 'EduCare', budget: '₹1.6L', raised: '₹1.4L', remaining: '₹20K', status: 'Completed', priority: 'Medium' },
];

export const donations = [
  { donor: 'Asha Kumar', school: 'ZPHS Chintal', project: 'Digital Learning Lab', amount: '₹25,000', method: 'UPI', status: 'Completed', receipt: 'RCPT-1001' },
  { donor: 'Vikram S', school: 'GHS Keesara', project: 'Library Upgrade', amount: '₹10,000', method: 'Card', status: 'Pending', receipt: 'RCPT-1002' },
];

export const users = [
  { name: 'Ravi Sharma', role: 'Principal', email: 'ravi@example.com', status: 'Active' },
  { name: 'Nina Thomas', role: 'Admin', email: 'nina@example.com', status: 'Inactive' },
  { name: 'Meera Joshi', role: 'NGO Lead', email: 'meera@example.com', status: 'Active' },
];

export const auditLogs = [
  { admin: 'Nina Thomas', action: 'Approved school', module: 'Verification', date: '2026-07-20', status: 'Success' },
  { admin: 'Ravi Sharma', action: 'Assigned NGO', module: 'Projects', date: '2026-07-19', status: 'Success' },
];

export const notifications = [
  { title: 'New school registered', detail: 'ZPHS Chintal submitted verification documents.', time: '10 min ago' },
  { title: 'Donation received', detail: '₹25,000 received for Digital Learning Lab.', time: '1 hr ago' },
  { title: 'Project completed', detail: 'Library Upgrade marked complete by NGO.', time: '3 hrs ago' },
];
