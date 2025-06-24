import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Lock, Activity, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you'd clear auth tokens, etc.
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-mesh">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-600">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">
                    Auth Kit
                  </h1>
                  <p className="text-sm text-muted-foreground">Dashboard</p>
                </div>
              </div>

              <Button
                onClick={handleLogout}
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign out
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-in">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Welcome to your Dashboard!
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                You've successfully logged in to the Auth UI Kit. This is a
                placeholder dashboard to demonstrate the complete authentication
                flow.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="auth-card hover:shadow-lg transition-all duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Users
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,841</div>
                  <p className="text-xs text-muted-foreground">
                    +12.5% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="auth-card hover:shadow-lg transition-all duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Sessions
                  </CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,432</div>
                  <p className="text-xs text-muted-foreground">
                    +8.2% from yesterday
                  </p>
                </CardContent>
              </Card>

              <Card className="auth-card hover:shadow-lg transition-all duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Security Score
                  </CardTitle>
                  <Shield className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">98.5%</div>
                  <p className="text-xs text-muted-foreground">
                    Excellent security rating
                  </p>
                </CardContent>
              </Card>

              <Card className="auth-card hover:shadow-lg transition-all duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Failed Logins
                  </CardTitle>
                  <Lock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-xs text-muted-foreground">
                    -45% from last week
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Feature Showcase */}
            <Card className="auth-card">
              <CardHeader>
                <CardTitle className="text-2xl">
                  🎉 Authentication Complete!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Congratulations! You've successfully experienced our
                  comprehensive authentication system. Here's what you've seen:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">
                      ✅ Features Demonstrated
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Modern, responsive login form</li>
                      <li>• Comprehensive signup with validation</li>
                      <li>• Password strength indicators</li>
                      <li>• Forgot password flow</li>
                      <li>• Real-time form validation</li>
                      <li>• Beautiful UI components</li>
                      <li>• Dark mode support</li>
                      <li>• Accessibility features</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">
                      🛠 Technologies Used
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• React 18 with TypeScript</li>
                      <li>• React Hook Form for validation</li>
                      <li>• Zod for schema validation</li>
                      <li>• Radix UI for accessibility</li>
                      <li>• Tailwind CSS for styling</li>
                      <li>• Framer Motion for animations</li>
                      <li>• Lucide React for icons</li>
                      <li>• Class Variance Authority</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                  <Button
                    onClick={() => navigate("/login")}
                    variant="outline"
                    className="flex-1"
                  >
                    View Login Page
                  </Button>
                  <Button
                    onClick={() => navigate("/signup")}
                    variant="outline"
                    className="flex-1"
                  >
                    View Signup Page
                  </Button>
                  <Button
                    onClick={() => navigate("/forgot-password")}
                    variant="outline"
                    className="flex-1"
                  >
                    View Reset Password
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
