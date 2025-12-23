import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, ShieldCheck, TrendingUp, CreditCard, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Instant Money Transfer",
    description:
      "Send and receive money instantly to any SCash user. Transactions are processed in real-time and fully secure.",
    icon: <TrendingUp className="h-10 w-10 text-blue-500" />,
    image: "https://res.cloudinary.com/dtb6o7zzr/image/upload/v1766520800/laptop-smartphone-money-male-hands-close-up_jormd0.jpg", 
  },
  {
    title: "Secure Wallet",
    description:
      "Your funds are protected with advanced encryption and security protocols.",
    icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
    image: "https://res.cloudinary.com/dtb6o7zzr/image/upload/v1766520801/top-view-passport-with-money-wood-background-tourism-concept_s4qkcc.jpg",
  },
  {
    title: "Cash-In & Cash-Out",
    description:
      "Top-up your wallet or withdraw cash easily from agents or bank accounts.",
    icon: <CreditCard className="h-10 w-10 text-purple-500" />,
    image: "https://res.cloudinary.com/dtb6o7zzr/image/upload/v1766520800/laptop-smartphone-money-male-hands-close-up_jormd0.jpg",
  },
  {
    title: "Sign Up & Verify",
    description:
      "Create your account and verify your identity securely to access wallet features.",
    icon: <CheckCircle className="h-10 w-10 text-blue-500" />,
    image: "https://res.cloudinary.com/dtb6o7zzr/image/upload/v1766520800/authorized-guaranteed-certificate-approved-product_ocyb7k.jpg",
  },
  {
    title: "Add Money to Wallet",
    description:
      "Easily top-up your wallet using bank transfer, card, or authorized agents.",
    icon: <ArrowRight className="h-10 w-10 text-green-500" />,
    image: "https://res.cloudinary.com/dtb6o7zzr/image/upload/v1766520800/smartphone-money-near-tourist-stuff_a8u0fx.jpg",
  },
  {
    title: "Send & Receive Money",
    description:
      "Instantly transfer funds to other users or pay merchants with SCash.",
    icon: <CheckCircle className="h-10 w-10 text-purple-500" />,
    image: "https://res.cloudinary.com/dtb6o7zzr/image/upload/v1766520801/top-view-passport-with-money-wood-background-tourism-concept_s4qkcc.jpg",
  },
  {
    title: "Withdraw Cash Anytime",
    description:
      "Withdraw your funds from agents or banks whenever needed.",
    icon: <ArrowRight className="h-10 w-10 text-orange-500" />,
    image: "https://res.cloudinary.com/dtb6o7zzr/image/upload/v1766520800/laptop-smartphone-money-male-hands-close-up_jormd0.jpg",
  },
];

export default function FeatureDetails() {
  return (
    <section className="container mx-auto my-24 px-4">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-3">SCash Feature Details</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A complete overview of all SCash features, briefly describing each functionality in the system.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {features.map((feature, idx) => (
          <Card
            key={idx}
            className="shadow-2xl rounded-2xl p-6 flex flex-col  transition-transform duration-300 hover:scale-105"
          >
            <CardTitle className="mt-4 text-2xl font-semibold">{feature.title}</CardTitle>
            {/* Feature Image */}
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-[350px] object-cover mb-4"
            />
            
            <CardDescription className="mt-2 flex items-center">
              <span className="pe-3">{feature.icon}</span>{feature.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}
