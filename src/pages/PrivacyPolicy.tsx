import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Lock, UserCheck, FileText } from "lucide-react";


const PrivacyPolicy = () => {
  return (
    <div className="container px-4 mx-auto py-12">
     
      <div>
        <ShieldCheck className="mx-auto h-14 w-14 text-primary mb-4" />
        <div className="text-center mb-14">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground mt-2">
          Your privacy and data security are our top priority at SCash
        </p>
        </div>
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Policy Overview
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-8 text-sm leading-relaxed">
         
          <div>
            <UserCheck className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">
                Information We Collect
              </h3>
              <p className="text-muted-foreground">
                We collect personal details such as name, email, phone number,
                authentication data, transaction history, and device
                information to ensure secure wallet operations.
              </p>
            </div>
          </div>

          <div>
            <Lock className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Data Security</h3>
              <p className="text-muted-foreground">
                SCash uses encryption, role-based access control, and monitoring
                systems to protect your data from unauthorized access.
              </p>
            </div>
          </div>

          <div>
            <ShieldCheck className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">
                Your Responsibility
              </h3>
              <p className="text-muted-foreground">
                Always keep your credentials private and never share passwords
                or OTPs with anyone.
              </p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground border-t pt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
