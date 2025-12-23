import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto container px-4 py-16 space-y-12">
        {/* Top Section: Logo + Social */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">SCASH</h1>
            <p className="mt-4 max-w-xs text-muted-foreground">
              Manage your digital wallet easily, safely, and efficiently with
              SCASH.
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
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
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
                <li>
                  <Link
                    to="/about"
                    className="hover:text-foreground transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features"
                    className="hover:text-foreground transition"
                  >
                    Features
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Helpful Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-foreground transition"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-foreground transition">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">My Information</h4>
              <div className="w-full">
                <p className="text-sm">
                  <span className="font-bold">Email: </span>{" "}
                  soumyrhmn234@gmail.com
                </p>
                <p className="text-sm">
                  <span className="font-bold">Phone: </span> 01881979246
                </p>
                <p className="text-sm">
                  <span className="font-bold">Address: </span> Mirpur, Dhaka
                </p>

                <div>
                  <ul className="flex gap-2 my-2">
                    <li>
                      <a
                        href="https://www.facebook.com/mayesha.soumy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/MayeshaSoumy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600 transition-colors"
                      >
                        <Twitter className="h-6 w-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/soumy_rahman/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-700 transition-colors"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/mayesha-mumtaz-6607b4315"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 transition-colors"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.github.com/mayesha6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 transition-colors"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                    </li>
                  </ul>
                </div>
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
