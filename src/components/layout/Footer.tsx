import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        {/* Top Section: Logo + Social */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">SCASH</h1>
            <p className="mt-4 max-w-xs text-muted-foreground">
              Manage your digital wallet easily, safely, and efficiently with SCASH.
            </p>

            <ul className="mt-6 flex justify-center lg:justify-start gap-4">
              {/* Social Icons */}
              {["Facebook", "Instagram", "Twitter", "GitHub", "Dribbble"].map(
                (social) => (
                  <li key={social}>
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social}
                      className="text-foreground/80 hover:text-foreground transition"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        {/* Use same SVG paths as before for each icon */}
                      </svg>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Links & Map */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:w-2/3 text-center lg:text-left">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-foreground transition">About</Link></li>
                <li><Link to="/features" className="hover:text-foreground transition">Features</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Helpful Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/contact" className="hover:text-foreground transition">Contact</Link></li>
                <li><Link to="/faq" className="hover:text-foreground transition">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Location</h4>
              <div className="w-full h-32 sm:h-40 bg-gray-200 rounded overflow-hidden">
                {/* Google Map Placeholder */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902095474918!2d90.3912!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b0d5e2c7ff%3A0x93ed77f9b9fa4e0f!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1693145237433!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <p className="text-xs text-center text-muted-foreground">
          &copy; 2025 SCASH. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
