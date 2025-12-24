import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Headset,
  Mail,
  Phone,
  ShieldAlert,
  HelpCircle,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

const Support = () => {
  return (
    <div className="container px-4 mx-auto py-12">
      <div className="text-center mb-14">
        <Headset className="mx-auto h-14 w-14 text-primary mb-4" />
        <h1 className="text-3xl font-bold">Support & Help Center</h1>
        <p className="text-muted-foreground mt-2">
          Get help with your SCash wallet anytime
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Card className="h-full shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Common Issues
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>• Login & verification problems</p>
              <p>• Failed or pending transactions</p>
              <p>• Wallet balance discrepancies</p>
              <p>• Cash-in / Cash-out support</p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="h-full shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-primary" />
                Contact Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                soumyrhmn234@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                +8801881979246
              </div>
              <p className="text-muted-foreground">
                Also you can contact us in social media
              </p>
              <div className="w-full text-center">
                <ul className="flex gap-2 my-4 md:justify-start justify-center">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;
