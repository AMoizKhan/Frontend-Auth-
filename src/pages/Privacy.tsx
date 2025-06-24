import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield } from "lucide-react";

const Privacy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn how we protect and handle your information
            </p>
          </div>

          <Card className="auth-card">
            <CardHeader>
              <CardTitle>Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <div className="space-y-6">
                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    1. Information We Collect
                  </h3>
                  <p className="text-muted-foreground">
                    This is a demo application. In a real implementation, this
                    section would detail what personal information is collected,
                    how it's collected, and why.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    2. Demo Application Notice
                  </h3>
                  <p className="text-muted-foreground">
                    This Frontend Auth UI Kit is a demonstration only. No real
                    user data is collected, stored, or transmitted. All form
                    submissions are simulated client-side.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    3. Data Security
                  </h3>
                  <p className="text-muted-foreground">
                    In a production environment, this section would outline the
                    security measures in place to protect user data, including
                    encryption, secure transmission, and storage practices.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    4. Cookies and Tracking
                  </h3>
                  <p className="text-muted-foreground">
                    This demo application may use local storage for
                    demonstrating authentication state management. No
                    third-party tracking or analytics are implemented.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    5. Third-Party Services
                  </h3>
                  <p className="text-muted-foreground">
                    This demo does not integrate with real third-party services.
                    In a production app, this would detail any external services
                    used and their privacy implications.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    6. Your Rights
                  </h3>
                  <p className="text-muted-foreground">
                    In a real application, this section would detail user rights
                    regarding their personal data, including access, correction,
                    deletion, and portability rights.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    7. Contact Information
                  </h3>
                  <p className="text-muted-foreground">
                    For questions about this Privacy Policy or the demo
                    application, please contact the development team.
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
                <Link to="/terms">
                  <Button variant="ghost" className="w-full sm:w-auto">
                    View Terms of Service
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

export default Privacy;
