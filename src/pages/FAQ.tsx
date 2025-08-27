
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is SCash?",
      answer:
        "SCash is a secure and fast digital wallet service that allows you to send money, make payments, recharge mobile balance, and manage your finances anytime, anywhere.",
    },
    {
      question: "How do I create an SCash account?",
      answer:
        "Sign up on our website using your mobile number.",
    },
    {
      question: "How can I add money to my SCash wallet?",
      answer:
        "You can cash-in through SCash agents, bank transfers, or linked debit/credit cards directly into your wallet.",
    },
    {
      question: "Can I send money to someone who does not use SCash?",
      answer:
        "No! You can not send money to non user mobile number. ",
    },
    {
      question: "Is my money safe with SCash?",
      answer:
        "Absolutely. SCash uses bank-grade encryption, two-factor authentication, and fraud detection systems to ensure your money and data remain secure.",
    },
    {
      question: "What should I do if I lose my phone?",
      answer:
        "Immediately call our SCash helpline or block your wallet through the website. Once you recover your number, you can regain access securely.",
    },
    {
      question: "Are there any fees for using SCash?",
      answer:
        "Sending money to other SCash users is free up to a certain limit. Small fees may apply for cash-out, merchant payments, and interbank transfers.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto py-12 px-4"
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
};

export default FAQ;
