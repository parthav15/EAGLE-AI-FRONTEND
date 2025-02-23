import React, { useState } from 'react';
import { Pencil } from 'lucide-react';
import { BASE_URL } from '../../config';
import axios from 'axios';
import { toast } from 'react-toastify';

const Profile = ({ user }) => {
  const [profileData, setProfileData] = useState(user);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const { data } = await axios.post(`${BASE_URL}users/edit_user_details/`, new FormData(e.target), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data.success) {
      localStorage.setItem('user', JSON.stringify(data.user_details));
      setProfileData(data.user_details);
      toast.success(data.message, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.error(data.message, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleProfilePictureChange = async (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const formData = new FormData();
      formData.append('profile_picture', file);

      const token = localStorage.getItem('token');
      const { data } = await axios.post(`${BASE_URL}users/edit_profile_picture/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.user_details));
        setProfileData(data.user_details);
        toast.success(data.message, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error(data.message, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Profile Settings
      </h2>
      
      <div className="flex items-center gap-6">
        <div className="relative group">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 p-1">
            <div className="w-full h-full bg-slate-800 rounded-full overflow-hidden">
              <img
                src={`${BASE_URL}media/${profileData.profile_picture}`}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleProfilePictureChange} 
            className="absolute inset-0 opacity-0 cursor-pointer" 
          />
          <button className="absolute bottom-0 right-0 bg-slate-800/80 rounded-full p-1.5 border border-slate-600 hover:border-cyan-400">
            <Pencil className="w-4 h-4 text-cyan-400" />
          </button>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-slate-100">{profileData.name}</h3>
          <p className="text-slate-400">{profileData.email}</p>
          <p className="text-slate-400">{profileData.username}</p>
          <p className="text-slate-400">{profileData.phone_number}</p>
        </div>
      </div>

      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full bg-slate-700/20 border border-slate-600 rounded-lg px-4 py-2 text-slate-300"
            name="first_name"
            value={profileData.first_name}
            onChange={(e) => setProfileData({...profileData, first_name: e.target.value})}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full bg-slate-700/20 border border-slate-600 rounded-lg px-4 py-2 text-slate-300"
            name="last_name"
            value={profileData.last_name}
            onChange={(e) => setProfileData({...profileData, last_name: e.target.value})}
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-slate-700/20 border border-slate-600 rounded-lg px-4 py-2 text-slate-300"
            name="username"
            value={profileData.username}
            onChange={(e) => setProfileData({...profileData, username: e.target.value})}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full bg-slate-700/20 border border-slate-600 rounded-lg px-4 py-2 text-slate-300"
            name="phone_number"
            value={profileData.phone_number}
            onChange={(e) => setProfileData({...profileData, phone_number: e.target.value})}
          />
        </div>
        <button className="bg-cyan-500/20 text-cyan-400 px-6 py-2 rounded-lg hover:bg-cyan-500/30">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;

