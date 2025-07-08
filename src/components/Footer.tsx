import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
    const footerLinks = {
        product: [
            { name: 'Features', href: '#features' },
            { name: 'Architecture', href: '#architecture' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'Security', href: '#security' },
        ],
        resources: [
            { name: 'Documentation', href: '#docs' },
            { name: 'API Reference', href: '#api' },
            { name: 'Examples', href: '#examples' },
            { name: 'Blog', href: '#blog' },
        ],
        company: [
            { name: 'About Us', href: '#about' },
            { name: 'Careers', href: '#careers' },
            { name: 'Contact', href: '#contact' },
            { name: 'Press Kit', href: '#press' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '#privacy' },
            { name: 'Terms of Service', href: '#terms' },
            { name: 'Cookie Policy', href: '#cookies' },
            { name: 'GDPR', href: '#gdpr' },
        ],
    }

    const socialLinks = [
        { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-300' },
        { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
        { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
        { name: 'Email', icon: Mail, href: 'mailto:info@elchi.io', color: 'hover:text-green-400' },
    ]

    return (
        <footer className="relative py-20 px-6 border-t border-white/10">
            <div className="container mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Logo */}
                        <div className="flex items-center space-x-3 mb-6">
                            <img
                                src="/logo.png"
                                alt="Elchi Logo"
                                className="w-26 h-20 object-contain"
                            />
                        </div>
                        

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Stack solution combining React TypeScript frontend with Go backend
                            for simplifying Envoy proxy management with xDS protocol support.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm text-gray-400">
                            <div className="flex items-center space-x-2">
                                <MapPin size={16} />
                                <span>Istanbul, Turkey</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone size={16} />
                                <span>+90 (212) 555-0123</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail size={16} />
                                <span>info@elchi.io</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Links Sections */}
                    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {Object.entries(footerLinks).map(([category, links], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-white font-semibold mb-4 capitalize">
                                    {category === 'product' && 'Product'}
                                    {category === 'resources' && 'Resources'}
                                    {category === 'company' && 'Company'}
                                    {category === 'legal' && 'Legal'}
                                </h3>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <motion.a
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                                whileHover={{ x: 5 }}
                                            >
                                                {link.name}
                                            </motion.a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Newsletter Section */}
                <motion.div
                    className="glass-effect p-8 rounded-2xl mb-12 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Stay Updated
                    </h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        Stay informed about new features, experimental updates, and
                        project developments.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                        />
                        <motion.button
                            className="btn-primary px-8 py-3 whitespace-nowrap"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Subscribe
                        </motion.button>
                    </div>
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* Copyright */}
                    <div className="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2025 Elchi. All rights reserved.
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center space-x-6">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                className={`text-gray-400 ${social.color} transition-colors duration-300`}
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <social.icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>
        </footer>
    )
}

export default Footer 