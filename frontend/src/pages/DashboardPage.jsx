import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, MessageSquare, AlertCircle, Settings, LogOut } from 'lucide-react';
import Navbar from '../components/HomePage/Navbar';
import Footer from '../components/HomePage/Footer';
import Profile from '../components/Dashboard/Profile';
import CommunityPosts from '../components/Dashboard/CommunityPosts';
import SubmittedFeedbacks from '../components/Dashboard/SubmittedFeedbacks';
import SettingsPanel from '../components/Dashboard/SettingsPanel';
import { BASE_URL } from '../config';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const userString = localStorage.getItem('user');
  const userObj = JSON.parse(userString);
  const [profileData, setProfileData] = useState(userObj);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login-register';
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'profile': return <Profile user={profileData} />;
      case 'posts': return <CommunityPosts />;
      case 'feedbacks': return <SubmittedFeedbacks />;
      case 'settings': return <SettingsPanel />;
      default: return <Profile user={profileData} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Navbar />
      
      {/* Grid Layout Container */}
      <div className="mt-20 grid grid-cols-[auto_1fr] flex-1">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="w-64 bg-slate-800/40 backdrop-blur-sm border-r border-slate-700 h-[calc(100vh-5rem)] sticky top-20 overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <img
                src={`${BASE_URL}media/${profileData.profile_picture}`}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="text-slate-100 font-medium">{profileData.first_name} {profileData.last_name}</h3>
                <p className="text-sm text-slate-400">{profileData.email}</p>
              </div>
            </div>

            <nav className="space-y-2">
              {[
                { id: 'profile', icon: <User size={20} />, label: 'Profile' },
                { id: 'posts', icon: <MessageSquare size={20} />, label: 'My Posts' },
                { id: 'feedbacks', icon: <AlertCircle size={20} />, label: 'Feedbacks' },
                { id: 'settings', icon: <Settings size={20} />, label: 'Settings' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                    activeTab === item.id 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                      : 'text-slate-300 hover:bg-slate-700/20'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-red-400 hover:bg-red-500/10 rounded-lg mt-8"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </motion.div>

        {/* Main Content */}
        <main className="h-[calc(100vh-5rem)] overflow-y-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 m-8"
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>

      <Footer className="mt-auto" />
    </div>
  );
};

export default DashboardPage;