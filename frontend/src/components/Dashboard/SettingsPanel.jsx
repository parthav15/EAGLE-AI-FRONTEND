import { useState } from 'react';

const SettingsPanel = () => {
    const [passwordData, setPasswordData] = useState({
      current: '',
      new: '',
      confirm: ''
    });
  
    const [emailData, setEmailData] = useState({
      current: '',
      new: ''
    });
  
    return (
      <div className="space-y-8">
        {/* Password Update */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-100">Change Password</h3>
          <form className="space-y-3">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full bg-slate-700/20 border border-slate-600 rounded-lg px-4 py-2 text-slate-300"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full bg-slate-700/20 border border-slate-600 rounded-lg px-4 py-2 text-slate-300"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full bg-slate-700/20 border border-slate-600 rounded-lg px-4 py-2 text-slate-300"
            />
            <button className="bg-cyan-500/20 text-cyan-400 px-6 py-2 rounded-lg hover:bg-cyan-500/30">
              Update Password
            </button>
          </form>
        </div>
  
        {/* Email Update */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-100">Change Email</h3>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Current Email"
              className="w-full bg-slate-700/20 border border-slate-600 rounded-lg px-4 py-2 text-slate-300"
            />
            <input
              type="email"
              placeholder="New Email"
              className="w-full bg-slate-700/20 border border-slate-600 rounded-lg px-4 py-2 text-slate-300"
            />
            <button className="bg-cyan-500/20 text-cyan-400 px-6 py-2 rounded-lg hover:bg-cyan-500/30">
              Update Email
            </button>
          </form>
        </div>
      </div>
    );
  };
  
export default SettingsPanel;
