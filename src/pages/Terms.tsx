import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-mesh">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-600 mb-6 shadow-lg shadow-primary/25">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Please read these terms carefully before using our service
            </p>
          </div>

          <Card className="auth-card">
            <CardHeader>
              <CardTitle>Terms of Service</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <div className="space-y-6">
                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    1. Acceptance of Terms
                  </h3>
                  <p className="text-muted-foreground">
                    By accessing and using this Frontend Auth UI Kit demo
                    application, you accept and agree to be bound by the terms
                    and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    2. Demo Purpose
                  </h3>
                  <p className="text-muted-foreground">
                    This is a demonstration application showcasing
                    authentication UI components and flows. Any data entered is
                    for testing purposes only and should not contain real
                    personal information.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    3. Privacy and Security
                  </h3>
                  <p className="text-muted-foreground">
                    While this demo implements security best practices for UI/UX
                    demonstration, it is not connected to a real backend
                    service. Do not use real passwords or sensitive information.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    4. Limitation of Liability
                  </h3>
                  <p className="text-muted-foreground">
                    This demo application is provided "as is" for educational
                    and demonstration purposes. The developers are not liable
                    for any damages arising from its use.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    5. Contact Information
                  </h3>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms of Service,
                    please contact the development team.
                  </p>
                </section>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border mt-8">
                <Link to="/signup">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Signup
                  </Button>
                </Link>
                <Link to="/privacy">
                  <Button variant="ghost" className="w-full sm:w-auto">
                    View Privacy Policy
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;
