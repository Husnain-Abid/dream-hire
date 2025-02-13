"use client"

import { Link } from "react-router-dom"
import icon1 from "../asset/images/footer/icon1.png";
import icon2 from "../asset/images/footer/icon2.png";
import icon3 from "../asset/images/footer/icon3.png";
import icon4 from "../asset/images/footer/icon4.png";
import icon5 from "../asset/images/footer/icon5.png";


export default function Footer() {
  const footerLinks = {
    "For Clients": [
      "How to hire",
      "Talent Marketplace",
      "Project Catalog",
      "Hire an agency",
      "Enterprise",
      "Any Hire",
      "Contract-to-hire",
      "Direct Contracts",
      "Hire worldwide",
      "Hire in the USA",
    ],
    "For Talent": [
      "How to find work",
      "Direct Contracts",
      "Find freelance jobs worldwide",
      "Find freelance jobs in the USA",
      "Win work with ads",
      "Exclusive resources with Freelancer Plus",
    ],
    Resources: [
      "Help & support",
      "Success stories",
      "Upwork reviews",
      "Resources",
      "Blog",
      "Affiliate programme",
      "Free Business Tools",
    ],
    Company: [
      "About us",
      "Leadership",
      "Investor relations",
      "Careers",
      "Our impact",
      "Press",
      "Contact us",
      "Partners",
      "Trust, safety & security",
      "Modern slavery statement",
    ],
  }

  const legalLinks = [
    "Terms of Service",
    "Privacy Policy",
    "CA Notice at Collection",
    "Cookie Settings",
    "Accessibility",
  ]

  const socialLinks = [
    { icon: icon1, href: "#" },
    { icon: icon2, href: "#" },
    { icon: icon3, href: "#" },
    { icon: icon4, href: "#" },
    { icon: icon5, href: "#" },
  ]

  return (
    <footer className=" md:mx-16 font-ppneuemontreal ">
      <div className="rounded-lg bg-[#111111] text-white px-16 py-20">
      
      <div className=" container mx-auto " >
        {/* Main Footer Links */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-4 text-sm">{category}</h3>
              <ul className="space-y-2 ">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-white text-sm hover:text-gray-400 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-b border-gray-400 pb-4 mb-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-sm">Follow us</span>
              <div className="flex gap-2">
                {socialLinks.map(({ icon, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-full border border-white p-2 hover:bg-white/10 transition-colors"
                  >
                    <img src={icon} alt="sdf" className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col gap-32 sm:flex-row sm:items-center sm:justify-start text-sm text-white">
          <div>
            <p>DreamHire Global Inc.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link key={link} href="#" className="hover:text-white transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>


      </div>
    </footer>
  )
}

