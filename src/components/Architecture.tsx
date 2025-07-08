import { motion } from 'framer-motion'
import { Server, Database, Globe, Shield, Layers } from 'lucide-react'

const Architecture = () => {
    const components = [
        {
            id: 'elchi',
            Icon: Globe,
            title: 'Elchi Frontend',
            description: 'React TypeScript UI',
            position: { x: 30, y: 10 },
            color: 'from-blue-500 to-cyan-500',
        },
        {
            id: 'elchi-backend',
            Icon: Server,
            title: 'Elchi Backend',
            description: 'Controller + Control Plane',
            position: { x: 50, y: 40 },
            color: 'from-purple-500 to-pink-500',
        },
        {
            id: 'mongodb',
            Icon: Database,
            title: 'MongoDB Store',
            description: 'Configuration storage',
            position: { x: 80, y: 60 },
            color: 'from-green-500 to-emerald-500',
        },
        {
            id: 'envoy',
            Icon: Layers,
            title: 'Envoy Proxies',
            description: 'Multi-version support',
            position: { x: 75, y: 20 },
            color: 'from-indigo-500 to-purple-500',
        },
        {
            id: 'xds',
            Icon: Shield,
            title: 'xDS Protocol',
            description: 'go-control-plane',
            position: { x: 25, y: 65 },
            color: 'from-orange-500 to-red-500',
        },
        {
            id: 'go-control-plane',
            Icon: Shield,
            title: 'Versioned Go Control Plane',
            description: 'versioned-go-control-plane',
            position: { x: 5, y: 30 },
            color: 'from-green-500 to-green-900',
        }

    ]

    const architectureSteps = [
        {
            number: '01',
            title: 'Proto to TypeScript',
            description: 'Envoy proto files converted to TypeScript enabling dynamic UI generation and real-time validation',
            icon: Globe
        },
        {
            number: '02',
            title: 'Dual-Purpose Backend',
            description: 'Elchi backend serves both Controller for UI & agent operations and control plane for xDS protocol configuration distribution',
            icon: Server
        },
        {
            number: '03',
            title: 'Configuration Validation',
            description: 'Two-step validation ensures reliability: frontend TypeScript validation and backend protoc-gen-validate',
            icon: Shield
        },
        {
            number: '04',
            title: 'Multi-Version Support',
            description: 'Dynamic routing based on bootstrap files enables centralized management of different Envoy versions',
            icon: Layers
        }
    ]

    return (
        <section id="architecture" className="py-24 px-6 relative">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                        <span className="text-gradient">Distributed Architecture</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Elchi distributed architecture combines React TypeScript frontend
                        with Go backend
                    </p>
                </motion.div>

                {/* Architecture Diagram */}
                <div className="relative mb-20">
                    <motion.div
                        className="glass-effect p-8 rounded-3xl relative overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Background Grid */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="w-full h-full" style={{
                                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                                backgroundSize: '20px 20px'
                            }}></div>
                        </div>

                        {/* Components */}
                        <div className="relative h-96">
                            {components.map((component, index) => (
                                <motion.div
                                    key={component.id}
                                    className="absolute"
                                    style={{
                                        left: `${component.position.x}%`,
                                        top: `${component.position.y}%`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <div className={`glass-effect p-4 rounded-xl bg-gradient-to-r ${component.color} bg-opacity-20 min-w-40 text-center group cursor-pointer`}>
                                        <component.Icon className="w-8 h-8 mx-auto mb-2 text-white group-hover:scale-110 transition-transform duration-300" />
                                        <h4 className="text-sm font-bold text-white mb-1">{component.title}</h4>
                                        <p className="text-xs text-gray-300">{component.description}</p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <defs>
                                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                                    </linearGradient>
                                </defs>
                                {/* Animated connection lines can be added here */}
                            </svg>
                        </div>
                    </motion.div>
                </div>

                {/* Architecture Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {architectureSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative mb-6">
                                <div className="w-20 h-20 mx-auto glass-effect rounded-full flex items-center justify-center mb-4 group hover:scale-110 transition-transform duration-300">
                                    <step.icon className="w-8 h-8 text-blue-400" />
                                </div>
                                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {step.number}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Specs */}
                <motion.div
                    className="mt-20 glass-effect p-8 rounded-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Technology Stack</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gradient mb-2">Go + xDS</div>
                            <div className="text-gray-400">go-control-plane integration</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gradient mb-2">React TS</div>
                            <div className="text-gray-400">Proto-generated components</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gradient mb-2">MongoDB</div>
                            <div className="text-gray-400">Configuration persistence</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Architecture 