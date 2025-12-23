import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  CreditCard,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    title: "Instant Money Transfer",
    description: "Send and receive money instantly to any SCash user.",
    icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Secure Wallet",
    description:
      "Your funds are protected with advanced encryption and security.",
    icon: <ShieldCheck className="h-8 w-8 text-green-500" />,
  },
  {
    title: "Cash-In & Cash-Out",
    description: "Top-up your wallet or withdraw cash easily from agents.",
    icon: <CreditCard className="h-8 w-8 text-purple-500" />,
  },
  {
    title: "Sign Up & Verify",
    description: "Create your account and verify your identity securely.",
    icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Add Money to Wallet",
    description: "Top-up your wallet using bank transfer, card, or agent.",
    icon: <ArrowRight className="h-8 w-8 text-green-500" />,
  },
  {
    title: "Send & Receive Money",
    description: "Instantly transfer funds to other users or pay merchants.",
    icon: <CheckCircle className="h-8 w-8 text-purple-500" />,
  },
  {
    title: "Withdraw Cash Anytime",
    description: "Withdraw funds from agents or bank whenever you need.",
    icon: <ArrowRight className="h-8 w-8 text-orange-500" />,
  },
];

const loopedFeatures = [...features, ...features];

export default function FeaturesSlider() {
  return (
    <section className="container mx-auto my-24 px-4">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-center mb-3">SCash Features</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover the core SCash capabilities designed to make your wallet
          experience fast, secure, and seamless.
        </p>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {loopedFeatures.map((feature, idx) => (
          <SwiperSlide key={idx} className="w-[280px] sm:w-[320px] cursor-grab">
            <Card className="shadow-2xl rounded-2xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              {feature.icon}
              <CardTitle className="mt-4 text-lg font-semibold">
                {feature.title}
              </CardTitle>
              <CardDescription className="mt-2 text-gray-500">
                {feature.description}
              </CardDescription>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
