import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../asset/images/logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" border-gray-200 font-ppneuemontreal">
      {/* Top Navigation */}
      <div className="px-4 md:px-16">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex gap-10">
            <Link to="/" className="text-2xl font-bold text-[#6366F1]">
              <img src={logo} alt="logo" />
            </Link>

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center space-x-5">
              <div className="relative group">
                <Link to="/seller" className="flex items-center space-x-1 text-xs font-medium hover:text-gray-600">
                  <span>Find talent</span>
                  <ChevronDown className="h-3 w-3 self-center" />
                </Link>
              </div>
              <div className="relative group">
                <Link to="/search" className="flex items-center space-x-1 text-xs font-medium hover:text-gray-600">
                  <span>Find work</span>
                  <ChevronDown className="h-3 w-3 self-center" />
                </Link>
              </div>
              <div className="relative group">
                <Link to="/why-us" className="flex items-center space-x-1 text-xs font-medium hover:text-gray-600">
                  <span>Why DreamHire</span>
                  <ChevronDown className="h-3 w-3 self-center" />
                </Link>
              </div>
              <div className="relative group">
                <Link to="/category" className="flex items-center space-x-1 text-xs font-medium hover:text-gray-600">
                  <span>What's new</span>
                  <ChevronDown className="h-3 w-3 self-center" />
                </Link>
              </div>
              <Link
                to="/enterprise"
                className="flex items-center space-x-1 text-xs font-medium hover:text-gray-600"
              >
                Profile
              </Link>
              <Link
                to="/pricing"
                className="flex items-center space-x-1 text-xs font-medium hover:text-gray-600"
              >
                Pricing
              </Link>
            </nav>

          </div>

          {/* Search and Auth */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden lg:block">
              <div className="flex items-center rounded-2xl border border-black px-4 py-1.5 ">
                <Search className="h-3 w-3 text-black" />
                <input
                  type="text"
                  placeholder="Search"
                  className="ml-2 outline-none text-xs"
                />
                <button className="flex items-center space-x-1 ml-2 border-l border-gray-400 pl-2 text-xs">
                  <span>Talent</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
              </div>
            </div>
            <Link
              to="/login"
              className="hidden text-xs font-medium lg:block hover:text-gray-600"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="hidden text-xs lg:block rounded-[10px] bg-[#6366F1] px-4 py-1.5 text-white hover:bg-[#5558E3]"
            >
              Sign up
            </Link>
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="border-t border-gray-200">
        <div className=" px-16">
          <nav className="hidden lg:flex h-12 items-center space-x-5">
            <Link href="/development" className="text-xs font-medium hover:text-gray-600">
              Development & IT
            </Link>
            <Link href="/ai-services" className="text-xs font-medium hover:text-gray-600">
              AI Services
            </Link>
            <Link href="/design" className="text-xs font-medium hover:text-gray-600">
              Design & Creative
            </Link>
            <Link href="/sales" className="text-xs font-medium hover:text-gray-600">
              Sales & Marketing
            </Link>
            <Link href="/admin" className="text-xs font-medium hover:text-gray-600">
              Admin & Customer Support
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-xs font-medium  hover:text-gray-600">
                <span>More</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              href="/find-talent"
              className="block px-3 py-2 hover:bg-gray-50"
            >
              Find talent
            </Link>
            <Link
              href="/find-work"
              className="block px-3 py-2 hover:bg-gray-50"
            >
              Find work
            </Link>
            <Link href="/why" className="block px-3 py-2 hover:bg-gray-50">
              Why DreamHire
            </Link>
            <Link
              href="/whats-new"
              className="block px-3 py-2 hover:bg-gray-50"
            >
              What&apos;s new
            </Link>
            <Link
              href="/enterprise"
              className="block px-3 py-2 hover:bg-gray-50"
            >
              Enterprise
            </Link>
            <Link href="/pricing" className="block px-3 py-2 hover:bg-gray-50">
              Pricing
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Link href="/login" className="block px-3 py-2 hover:bg-gray-50">
                Log in
              </Link>
              <Link
                href="/signup"
                className="block px-3 py-2 mt-1 text-white bg-[#6366F1] hover:bg-[#5558E3]"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
