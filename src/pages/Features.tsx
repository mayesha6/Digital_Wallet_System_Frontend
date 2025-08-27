import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CreditCard, ShieldCheck, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Instant Money Transfer",
    description: "Send and receive money instantly to any SCash user.",
    icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Secure Wallet",
    description: "Your funds are protected with advanced encryption and security.",
    icon: <ShieldCheck className="h-8 w-8 text-green-500" />,
  },
  {
    title: "Cash-In & Cash-Out",
    description: "Top-up your wallet or withdraw cash easily from agents.",
    icon: <CreditCard className="h-8 w-8 text-purple-500" />,
  },
 
];

const Features = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto py-12 px-4"
    >
      <h2 className="text-3xl font-bold text-center mb-12">SCash Features</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <Card
            key={idx}
            className="shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <CardHeader className="flex flex-col items-center text-center p-6">
              {feature.icon}
              <CardTitle className="mt-4 text-lg font-semibold">{feature.title}</CardTitle>
              <CardDescription className="mt-2 text-gray-500">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </motion.section>
  );
};

export default Features;
