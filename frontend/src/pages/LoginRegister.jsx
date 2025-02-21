import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Mail, User } from 'lucide-react';
import Navbar from '../components/HomePage/Navbar';
import Footer from '../components/HomePage/Footer';
import surveillanceBg from '../assets/surveillance-bg.jpg';
import { BASE_URL } from '../config';
import { toast, ToastContainer } from 'react-toastify';

const LoginRegister = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isRegister, setIsRegister] = useState(() => {
        return localStorage.getItem("isRegister") === "true";
    });

    useEffect(() => {
        localStorage.setItem("isRegister", isRegister);
    }, [isRegister]);

    const toggleForm = () => {
        setIsRegister((prev) => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const endpoint = isRegister
            ? `${BASE_URL}users/user_register/`
            : `${BASE_URL}users/user_login/`;

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(isRegister ? {
                    email: data.email,
                    password: data.password,
                    first_name: data.firstName,
                    last_name: data.lastName,
                    phone_number: data.phone
                } : {
                    email: data.email,
                    password: data.password
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Something went wrong');
            }

            if (!isRegister) {
                const userResponse = await fetch(`${BASE_URL}users/user_details/`, {
                    headers: {
                        Authorization: `Bearer ${result.token}`,
                    },
                });
                const userData = await userResponse.json();

                localStorage.setItem("token", result.token);
                localStorage.setItem("user", JSON.stringify(userData.user_details));

                toast.success("Logged in successfully!");
                setTimeout(() => navigate("/", { replace: true }), 2000);
            } else {
                toast.success("Registered successfully!");
                setIsRegister(false);
            }
        } catch (error) {
            setError(error.message);
            toast.error(error.message);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col">
            <Navbar />
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <div className="flex-1 flex overflow-hidden mt-20">
                <motion.div
                    className="hidden md:flex w-1/2 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${surveillanceBg})` }}
                    initial={{ x: 0 }}
                    animate={{ x: isRegister ? "10%" : "10%" }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
                    <div className="relative z-10 flex flex-col justify-center p-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <Shield className="w-12 h-12 text-cyan-400" />
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                                EAGLE AI
                            </h1>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-slate-300 text-lg"
                        >
                            Secure Access to Next-Gen Surveillance Solutions
                        </motion.p>
                    </div>
                </motion.div>

                {/* Right Side - Form Section */}
                <motion.div
                    className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-slate-800/50 backdrop-blur-lg"
                    initial={{ x: 0 }}
                    animate={{ x: isRegister ? "5%" : "0%" }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-cyan-400 mb-8">
                        {isRegister ? 'Create Secure Account' : 'Authorization Required'}
                    </h2>

                    <form className="w-full max-w-sm space-y-6" onSubmit={handleSubmit}>
                        {isRegister && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="relative"
                                >
                                    <User className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-slate-700/40 rounded-lg border border-slate-600 text-slate-300 placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                                        placeholder="First Name"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="relative"
                                >
                                    <User className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-slate-700/40 rounded-lg border border-slate-600 text-slate-300 placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                                        placeholder="Last Name"
                                    />
                                </motion.div>
                            </>
                        )}

                        <div className="relative">
                            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full pl-10 pr-4 py-3 bg-slate-700/40 rounded-lg border border-slate-600 text-slate-300 placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                                placeholder="Security Email"
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                            <input
                                type="password"
                                name="password"
                                required
                                className="w-full pl-10 pr-4 py-3 bg-slate-700/40 rounded-lg border border-slate-600 text-slate-300 placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                                placeholder="Encryption Key"
                            />
                        </div>

                        {isRegister && (
                            <div className="relative">
                                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    required
                                    className="w-full pl-10 pr-4 py-3 bg-slate-700/40 rounded-lg border border-slate-600 text-slate-300 placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                                    placeholder="Confirm Encryption Key"
                                />
                            </div>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 py-3 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all"
                        >
                            <Shield className="w-5 h-5 text-white" />
                            <span className="text-lg font-semibold text-white">
                                {isRegister ? 'Activate System' : 'Authenticate'}
                            </span>
                        </motion.button>
                    </form>

                    <p className="mt-6 text-slate-400">
                        {isRegister ? 'Existing Operator?' : 'New Security Agent?'}
                        <button
                            onClick={toggleForm}
                            className="ml-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                        >
                            {isRegister ? 'Access Terminal' : 'Request Clearance'}
                        </button>
                    </p>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default LoginRegister;