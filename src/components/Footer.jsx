import React from 'react';
import { Link } from 'react-router';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaGithub, FaPinterest } from 'react-icons/fa';
import logo from '../assets/logo/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 mt-20">
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div>
                        <div className="flex flex-col items-start mb-4">
                            <img src={logo} alt="GreenNest Logo" className="w-20 h-20 mb-2" />
                            <h3 className="text-2xl font-bold">GreenNest</h3>
                        </div>
                        <p className="text-gray-600">
                            Nurture your space with thriving indoor plants. Your trusted partner in plant care and expert consultation.
                        </p>
                    </div>

                    <div className="text-center">
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        <div className="flex items-center justify-center gap-3 text-gray-600">
                            <Link to="/about-us" className="hover:text-green-600 transition">About Us</Link>
                            <span>•</span>
                            <Link to="/portfolio" className="hover:text-green-600 transition">Portfolio</Link>
                            <span>•</span>
                            <Link to="/location" className="hover:text-green-600 transition">Location</Link>
                        </div>
                    </div>

                    <div className="text-center md:text-right">
                        <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                        <div className="flex gap-4 justify-center md:justify-end">
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green-600 transition text-2xl"
                            >
                                <FaInstagram />
                            </a>
                            <a 
                                href="https://facebook.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green-600 transition text-2xl"
                            >
                                <FaFacebook />
                            </a>
                            <a 
                                href="https://pinterest.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green-600 transition text-2xl"
                            >
                                <FaPinterest />
                            </a>
                            <a 
                                href="https://youtube.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green-600 transition text-2xl"
                            >
                                <FaYoutube />
                            </a>
                            <a 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green-600 transition text-2xl"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-300 mt-8 pt-6 text-center">
                    <p className="text-gray-600">© 2026 GreenNest. All rights reserved by Maruf Sakhawat.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
