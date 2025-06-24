import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, ArrowLeft, Shield, CheckCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>;

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const emailValue = watch("email", "");

  const onSubmit = async (data: ForgotPasswordForm) => {
    setIsLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // For demo purposes, simulate successful email send
      console.log("Password reset email sent to:", data.email);
      setIsEmailSent(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendEmail = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Password reset email resent to:", emailValue);
    } catch (err) {
      setError("Failed to resend email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isEmailSent) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-mesh">
        <div className="w-full max-w-md animate-in">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-success to-success/80 mb-6 shadow-lg shadow-success/25">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Check your email
            </h1>
            <p className="text-muted-foreground">
              We've sent a password reset link to your email
            </p>
          </div>

          <Card className="auth-card">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                  <Mail className="w-8 h-8 text-success mx-auto mb-2" />
                  <p className="text-sm text-foreground font-medium mb-1">
                    Email sent successfully!
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Check your inbox and spam folder for a reset link from us.
                  </p>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p>Didn't receive the email?</p>
                  <Button
                    onClick={handleResendEmail}
                    variant="ghost"
                    className="text-primary hover:text-primary-600 p-0 h-auto font-medium"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Resend email"}
                  </Button>
                </div>

                <div className="flex items-center justify-center pt-4">
                  <Link
                    to="/login"
                    className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to sign in</span>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md animate-in">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-600 mb-6 shadow-lg shadow-primary/25">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Forgot password?
            </h1>
            <p className="text-muted-foreground">
              No worries, we'll send you reset instructions
            </p>
          </div>

          <Card className="auth-card">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-2xl text-center">
                Reset password
              </CardTitle>
              <CardDescription className="text-center">
                Enter your email and we'll send you a link to reset your
                password
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
                {error && (
                  <Alert variant="destructive" className="animate-slide-in">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className={cn(
                        "auth-input pl-10",
                        errors.email &&
                          "border-destructive focus:border-destructive",
                      )}
                      {...register("email")}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-destructive animate-slide-in">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full auth-button gradient-primary hover:shadow-lg hover:shadow-primary/25 group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending reset link...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send reset link</span>
                    </div>
                  )}
                </Button>

                <div className="flex items-center justify-center">
                  <Link
                    to="/login"
                    className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to sign in</span>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Side - Hero */}
      <div className="hidden lg:flex flex-1 bg-gradient-mesh relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
        <div className="relative z-10 flex flex-col justify-center p-12 text-center">
          <div className="max-w-lg mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Secure Password Recovery
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We take security seriously. Our password reset process is designed
              to keep your account safe while making it easy to regain access.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-1">
                    Enter your email
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We'll verify your account and send a secure reset link
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-1">
                    Check your inbox
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Click the secure link we send to your email address
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-1">
                    Set new password
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Create a strong new password and regain access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/10 blur-xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-primary/5 blur-2xl" />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-primary/20 blur-lg" />
      </div>
    </div>
  );
};

export default ForgotPassword;
