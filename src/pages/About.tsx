import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 space-y-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our journey, mission, and the amazing team working to bring this vision to life.
        </p>
      </motion.div>

      {/* Our Story */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Our journey began with a simple idea — to create a platform that makes life easier
          through technology. What started as a small project has now grown into a full-fledged
          service that empowers users with tools designed for simplicity, efficiency, and trust.
        </p>
      </motion.section>

       <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
              <p className="text-gray-600">
                To empower people with seamless solutions that make life easier, 
                smarter, and more connected.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
              <p className="text-gray-600">
                To become a trusted platform that brings people together, 
                fostering growth and innovation for everyone.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Our Team */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example Team Member */}
          <Card className="shadow-md rounded-2xl">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Avatar className="h-20 w-20 mb-4">
                <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="Team Member" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">Alex Brown</h3>
              <p className="text-sm text-gray-500">Founder & CEO</p>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Avatar className="h-20 w-20 mb-4">
                <AvatarImage src="https://i.pravatar.cc/150?img=2" alt="Team Member" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">Maria Smith</h3>
              <p className="text-sm text-gray-500">Lead Developer</p>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Avatar className="h-20 w-20 mb-4">
                <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="Team Member" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500">Product Designer</p>
            </CardContent>
          </Card>
        </div>
      </motion.section>
    </div>
  );
}
