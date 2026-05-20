"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
Menu,
X,
} from "lucide-react";

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

const links = [
    { href: "#", label: "Início", },
    { href: "#about", label: "Sobre", },
    { href: "#goals", label: "Objetivos", },
    { href: "#function", label: "Função", },
    { href: "#impact", label: "Impacto",},
    { href: "#support", label: "Apoie",},
    { href: "#fellows", label: "Parceiros",}

];

return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 html">
    <div className="max-w-6xl  mx-auto  py-3 flex justify-between items-center">
        {/* Logo + Nome */}
        <div  className="flex items-center gap-3" > 
            <Image src="/logo.png" alt="Logo do Projeto" width={40} height={40}/>
            <a href="#" className="text-green-700 font-semibold text-g">Mãos que Ajudam</a>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex gap-6">
        {links.map((link) => (
            <li key={link.href}>
            <Link
                href={link.href}
                className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition"
            >
                {link.label}
            </Link>
            </li>
        ))}
        </ul>
        <div className="text-md p-2 px-6 hidden lg:flex   rounded-lg text-[#3B821D]  bg-[#E7C94C] font-medium hover:scale-105 hover:bg-yellow-300 transition-all duration-300">
            <button>
                Entre em contato
            </button>
        </div>

        {/* Botão Mobile */}
        <button
        className="lg:hidden text-green-700"
        onClick={() => setMenuOpen(!menuOpen)}
        >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
    </div>


    {/* Menu Mobile */}
    {menuOpen && (
        <div className="lg:hidden bg-white shadow-md absolute top-16 left-0 w-full p-6 space-y-4">
        {links.map((link) => (
            <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition"
            >
            {link.label}
            </Link>
        ))}
        <div className="border- text-lg p-2 px-6 rounded-lg text-[#3B821D]  bg-[#E7C94C] font-medium hover:scale-105 hover:bg-yellow-300 transition-all duration-300">
            <button>
                Entre em contato
            </button>
        </div>
        </div>
    )}
    </nav>
);
};

export default Navbar;
