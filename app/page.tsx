"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Globe, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaWhatsapp } from "react-icons/fa";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const skills = [
    { name: "Next.js", icon: <Globe className="w-6 h-6" />, level: 10 },
    { name: "React", icon: <Code className="w-6 h-6" />, level: 40 },
    { name: "TypeScript", icon: <Database className="w-6 h-6" />, level: 40 },
    { name: "JavaScript", icon: <Code className="w-6 h-6" />, level: 50 },
    { name: "UI/UX Design", icon: <Palette className="w-6 h-6" />, level: 80 },
  ]

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com Next.js, TypeScript e Stripe",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo para análise de dados com gráficos em tempo real",
      tech: ["React", "TypeScript", "Chart.js", "Node.js"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "App Mobile",
      description: "Aplicativo mobile desenvolvido com React Native e TypeScript",
      tech: ["React Native", "TypeScript", "Expo", "Firebase"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #1e293b 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, #374151 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, #4b5563 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #1e293b 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 60% 30%, #6366f1 0%, transparent 50%)",
              "radial-gradient(circle at 30% 70%, #8b5cf6 0%, transparent 50%)",
              "radial-gradient(circle at 70% 60%, #06b6d4 0%, transparent 50%)",
              "radial-gradient(circle at 60% 30%, #6366f1 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Fixed Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Dev
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? "text-blue-400" : "text-gray-300 hover:text-blue-300"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section === "home"
                    ? "Início"
                    : section === "about"
                      ? "Sobre"
                      : section === "skills"
                        ? "Habilidades"
                        : section === "projects"
                          ? "Projetos"
                          : "Contato"}
                </motion.button>
              ))}
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
        <motion.div className="text-center px-6" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className="mb-8">
            <motion.h1 className="text-7xl md:text-8xl font-bold mb-4">
              {"Desenvolvedor".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h2 className="text-2xl md:text-4xl text-gray-300 mb-6">
              {"Full Stack".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h2>
          </motion.div>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Criando experiências digitais incríveis com tecnologias modernas
          </motion.p>
          <motion.div variants={itemVariants} className="flex justify-center space-x-4">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            >
              Contato
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Sobre Mim
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Photo/Logo Section */}
              <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
                <div className="relative">
                  <motion.div
                    className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                      {/* Placeholder for photo/logo - replace with your actual image */}
                      <img
                        src="/foto02.png"
                        alt="Foto do desenvolvedor"
                        className="w-full h-full rounded-full"
                        style={{
                          objectFit: 'cover',
                          transform: 'scale(1.1) translateY(15px)' ,
                          objectPosition: 'center'
                        }}
                      />
                      {/* Alternative: Icon placeholder if no image */}
                      {/* <User className="w-32 h-32 text-gray-400" /> */}
                    </div>
                  </motion.div>
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div variants={itemVariants} className="space-y-6">
                <motion.p variants={itemVariants} className="text-xl text-gray-300 leading-relaxed">
                  Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras. Com experiência em
                  desenvolvimento full-stack, trabalho com as tecnologias mais modernas do mercado para entregar
                  produtos de alta qualidade.
                </motion.p>
                <motion.p variants={itemVariants} className="text-lg text-gray-400 leading-relaxed">
                  Minha jornada começou com curiosidade sobre como as coisas funcionam na web, e hoje transformo ideias
                  em realidade através do código. Estou sempre aprendendo novas tecnologias e buscando desafios que me
                  permitam crescer profissionalmente.
                </motion.p>
                <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-4">
                  {["Criativo", "Dedicado", "Inovador", "Colaborativo"].map((trait) => (
                    <span
                      key={trait}
                      className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {trait}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Habilidades
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-blue-400 mr-3">{skill.icon}</div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{skill.level}%</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Projetos
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div key={project.title} variants={itemVariants} whileHover={{ y: -10 }}>
                  <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 text-white h-full">
                    <CardHeader>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <Button size="sm" variant="outline" className="border-blue-400 text-blue-400">
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </Button>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Contato
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-12">
              Vamos trabalhar juntos? Entre em contato!
            </motion.p>
            <motion.div variants={itemVariants} className="flex justify-center space-x-8">
              <motion.a
                href="mailto:matheuscloud21@gmail.com?subject=Olá&body=Gostaria%20de%20te%20Contratar!"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-700/50 transition-colors"
              >
                <Mail className="w-6 h-6 text-blue-400" />
                <span>Email</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/matheus-oliveira-260727243/"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-700/50 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-blue-400" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://github.com/Matheuscloud21"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-700/50 transition-colors"
              >
                <Github className="w-6 h-6 text-blue-400" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href="https://wa.me/5561981893088?text=Ol%C3%A1%20Matheus%2C%20gostaria%20de%20trabalhar%20com%20voc%C3%AA%20%3AD"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-700/50 transition-colors"
              >
                
                <FaWhatsapp className="w-6 h-6 text-blue-400" />
                <span>GitHub</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

