import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ShieldCheck, Wallet } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-4 my-26 space-y-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Digital Wallet System
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A modern, secure, and role-based digital wallet frontend built to
          manage wallets, transactions, and users efficiently.
        </p>
      </motion.div>

      {/* Story + Image */}
      <div className="grid md:grid-cols-2 gap-12 items-center justify-between">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-5 justify">
            The Digital Wallet System frontend was designed to provide a clean
            and intuitive user experience for handling digital transactions. It
            supports multiple roles such as Admin, User, Agent, and Super Admin
            with clear access control.
          </p>
          <p className="text-muted-foreground leading-relaxed justify">
            By leveraging modern frontend technologies, the application ensures
            performance, security, and scalability while maintaining a smooth
            user experience across all devices.
          </p>
        </motion.div>

        {/* Image (React friendly) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-xl bg-zinc-500 p-3"
        >
          <img
            src="https://res.cloudinary.com/dtb6o7zzr/image/upload/v1766509266/Wavy_Tech-31_Single-01_1_jxcsoq.jpg"
            alt="Digital wallet dashboard"
            className="w-full h-full  rounded-2xl"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Mission / Vision / Security */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-indigo-600" />
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-muted-foreground">
              To deliver a reliable and user-friendly digital wallet interface
              with secure authentication and role-based navigation.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Wallet className="text-emerald-600" />
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-muted-foreground">
              To become a scalable and modern frontend solution for digital
              finance applications.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-rose-600" />
              <h3 className="text-xl font-semibold">Security First</h3>
            </div>
            <p className="text-muted-foreground">
              Built with JWT authentication, HTTP-only cookies, and secure
              cross-origin API communication.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
