import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  ShieldCheck,
  Zap,
  Wallet,
} from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is SCash?",
      answer:
        "SCash is a secure and fast digital wallet service that allows you to send money, make payments, recharge mobile balance, and manage your finances anytime, anywhere.",
    },
    {
      question: "How do I create an SCash account?",
      answer: "Sign up on our website using your mobile number.",
    },
    {
      question: "How can I add money to my SCash wallet?",
      answer:
        "You can cash-in through SCash agents, bank transfers, or linked debit/credit cards directly into your wallet.",
    },
    {
      question: "Can I send money to someone who does not use SCash?",
      answer:
        "No. You cannot send money to a non-SCash registered mobile number.",
    },
    {
      question: "Is my money safe with SCash?",
      answer:
        "Absolutely. SCash uses bank-grade encryption, two-factor authentication, and advanced fraud detection systems.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="container mx-auto px-4 my-26"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <div className="flex justify-center mb-3">
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            <HelpCircle size={28} />
          </div>
        </div>
        <h2 className="text-4xl font-bold mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Clear answers and platform highlights to help you use SCash confidently.
        </p>
      </div>

      {/* FAQ + Trust Panel */}
      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* FAQ Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-3xl border bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-xl p-3 md:p-6">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-2xl px-4"
                >
                  <AccordionTrigger className="text-base md:text-lg font-medium py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Trust / Feature Panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between h-full gap-4"
        >
          {/* Card 1 */}
          <div className="rounded-2xl border bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-md p-6">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="text-emerald-600" />
              <h3 className="font-semibold text-lg">Secure & Trusted</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Bank-grade encryption, secure authentication, and fraud protection
              keep your money safe.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-md p-6">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="text-indigo-600" />
              <h3 className="font-semibold text-lg">Fast Transactions</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Send and receive money instantly with real-time transaction updates.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-md p-6">
            <div className="flex items-center gap-3 mb-2">
              <Wallet className="text-rose-600" />
              <h3 className="font-semibold text-lg">Role-Based Access</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Separate dashboards for Admin, Agent, and User ensure clear control.
            </p>
          </div>

          
        </motion.div>
      </div>
    </motion.section>
  );
};

