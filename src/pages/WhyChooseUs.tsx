import { ShieldCheck, Clock, Users } from "lucide-react";

const benefits = [
  {
    title: "Safe & Secure",
    description:
      "Your money is protected with state-of-the-art encryption and fraud prevention.",
    icon: <ShieldCheck className="h-10 w-10 text-blue-500" />,
  },
  {
    title: "Fast Transactions",
    description: "Send and receive money instantly with zero delays.",
    icon: <Clock className="h-10 w-10 text-green-500" />,
  },
  {
    title: "Trusted by Users",
    description:
      "Millions of users trust SCash for their daily financial transactions.",
    icon: <Users className="h-10 w-10 text-purple-500" />,
  },
];

export default function WhyChooseSCash() {
  return (
    <section className="my-26">
      <div className="container mx-auto px-4 text-center">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Why Choose SCash?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn why millions trust SCash for safe, instant, and reliable
            digital transactions every day.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="border border-zinc-300 rounded-3xl p-8 flex-1 shadow-xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              {benefit.icon}
              <h3 className="mt-6 text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-3 text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
