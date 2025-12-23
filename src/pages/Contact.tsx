import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We’ll get back to you within 24 hours.");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="container mx-auto px-4 my-26"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-3">Contact Us</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a question or need help with <span className="font-medium">SCash</span>?
          Our support team is always ready to help you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div whileHover={{ scale: 1.01 }}>
          <Card className="relative overflow-hidden rounded-3xl border 
            bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <Textarea
                      name="message"
                      placeholder="Write your message..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="pl-10 resize-none"
                      required
                    />
                  </div>
                </div>

                {/* Button */}
                <Button
                  type="submit"
                  className="w-full rounded-xl py-6 text-base"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-xl border"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902095474918!2d90.3912!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b0d5e2c7ff%3A0x93ed77f9b9fa4e0f!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1693145237433!5m2!1sen!2sus"
            className="w-full h-full min-h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
