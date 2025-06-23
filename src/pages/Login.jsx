import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

import google from "../asset/images/social_icon_1.png"
import facebook from "../asset/images/social_icon_2.png"
import apple from "../asset/images/social_icon_3.png"
import { Link } from "react-router-dom"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
    }

    return (
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:my-20 font-inter">
            <div className="max-w-[580px] w-full space-y-8">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-[#333333]">Log in</h2>
                </div>

                {/* Social Login Buttons */}
                <div className="space-y-4">
                    <button className="w-full flex items-center justify-center gap-4 px-4 py-2 md:py-4 text-sm md:text-lg text-[#333333] border border-[#333333]  rounded-full shadow-sm  hover:bg-gray-50 transition-colors">
                        <img src={google} alt="Google"   />
                        <span >Continue with Google</span>
                    </button>

                    <button className="w-full flex items-center justify-center gap-4 px-4 py-2 md:py-4 text-sm md:text-lg text-[#333333] border border-[#333333]  rounded-full shadow-sm  hover:bg-gray-50 transition-colors">
                        <img src={facebook} alt="Facebook"   />
                        <span >Continue with Facebook</span>
                    </button>

                    <button className="w-full flex items-center justify-center gap-4 px-4 py-2 md:py-4 text-sm md:text-lg text-[#333333] border border-[#333333]  rounded-full shadow-sm  hover:bg-gray-50 transition-colors">
                        <img src={apple} alt="Apple"   />
                        <span >Continue with Apple</span>
                    </button>
                </div>

                {/* Divider */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-[#D9D9D9]">
                        <span className="px-4 bg-white text-[#111111]">OR</span>
                    </div>
                </div>

                {/* Login Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm md:text-base text-[#666666] mb-1.5">
                            Email address or user name
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 md:py-3 border border-gray-300 text-sm  md:text-lg rounded-lg  focus:border-transparent"
                        />
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <label htmlFor="email" className="block text-sm md:text-base text-[#666666] mb-1.5">
                                Password
                            </label>
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-sm text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-2 md:py-3 border border-gray-300 text-sm  md:text-lg rounded-lg  focus:border-transparent"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                                {showPassword ? (
                                    <EyeOff className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <Eye className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="rememberMe"
                                type="checkbox"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                                className="h-4 w-4 border-gray-300 rounded accent-black"
                                />
                            <label htmlFor="remember-me" className="ml-2 text-sm md:text-base text-[#333333] ">
                                Remember me
                            </label>
                        </div>





                        <Link href="#" className="text-sm md:text-base underline underline-offset-2 text-[#333333] hover:text-blue-800 ">
                            Forget your password
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 md:py-4 px-4 text-white text-base md:text-[22px] bg-[#C3C3C3] hover:bg-gray-400 rounded-full transition-colors"
                    >
                        Log in
                    </button>
                </form>


<div className="w-full border-t bg-[#C3C3C3]"></div>

                {/* Sign Up Section */}
                <div className="text-center space-y-4">
                    <p className="text-[#111111] text-base md:text-2xl">Don't have an account?</p>
                    <button className="w-full py-2 md:py-4 px-4 border text-base md:text-[22px] border-[#111111] rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login

