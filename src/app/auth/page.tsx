"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  ArrowLeft,
  Eye,
  EyeOff,
  Sparkles,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabaseClient";

function AuthForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialMode = searchParams.get("mode") === "register" ? "register" : "login";

  const [isLogin, setIsLogin] = useState(initialMode === "login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Sync mode state with query parameter changes
  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode === "register") {
      setIsLogin(false);
    } else if (mode === "login") {
      setIsLogin(true);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      if (isLogin) {
        // Sign In
        const { error, data } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        
        router.push("/");
      } else {
        // Sign Up
        const { error, data } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name,
            },
          },
        });
        if (error) throw error;

        // If the user's identities list is empty, it means they might have registered but are waiting for email confirm
        if (data.user && !data.session) {
          setSuccessMsg("Registration successful! Please check your email inbox to confirm your account.");
        } else {
          setSuccessMsg("Registration successful! Redirecting...");
          setTimeout(() => {
            router.push("/");
          }, 1500);
        }
      }
    } catch (err: any) {
      console.error("Auth error:", err);
      setErrorMsg(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setErrorMsg(null);
    setSuccessMsg(null);
    setIsLogin(!isLogin);
    // Update the URL parameter without reloading page
    router.replace(`/auth?mode=${!isLogin ? "login" : "register"}`);
  };

  return (
    <div className="w-full max-w-md">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <div className="glass-card rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-200/60 relative overflow-hidden bg-white/80 backdrop-blur-xl">
        <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-accent/10 blur-2xl pointer-events-none" />

        <div className="relative text-center mb-8">
          <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-md shadow-primary/20">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <h1 className="font-heading text-2xl font-bold tracking-tight">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="mt-1.5 text-xs text-muted">
            {isLogin
              ? "Sign in to access your internship dashboard"
              : "Register to kickstart your tech internship journey"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 relative">
          <AnimatePresence mode="popLayout">
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                key="name-field"
              >
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-foreground/80">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-muted">
                    <User className="h-4 w-4" />
                  </span>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                    className="pl-10"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-foreground/80">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-muted">
                <Mail className="h-4 w-4" />
              </span>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-xs font-semibold text-foreground/80">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-muted">
                <Lock className="h-4 w-4" />
              </span>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-10 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted hover:text-foreground transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Feedback messages */}
          <AnimatePresence mode="popLayout">
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-start gap-2.5 rounded-xl border border-destructive/20 bg-destructive/10 p-3.5 text-xs text-destructive font-medium"
                key="error-msg"
              >
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </motion.div>
            )}

            {successMsg && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-start gap-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3.5 text-xs text-emerald-600 font-medium"
                key="success-msg"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{successMsg}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <Button type="submit" className="w-full mt-4 h-11" disabled={loading}>
            {loading ? "Please wait..." : isLogin ? "Sign In" : "Sign Up"}
          </Button>
        </form>

        <div className="mt-6 text-center text-xs text-muted border-t border-border-subtle pt-4">
          {isLogin ? "New to OrionLabs? " : "Already have an account? "}
          <button
            onClick={toggleMode}
            className="font-semibold text-primary hover:text-accent transition-colors"
          >
            {isLogin ? "Create an account" : "Sign in here"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50/50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-[-10%] right-[-10%] h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-primary/10 via-accent/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-secondary/10 via-primary/5 to-transparent blur-3xl pointer-events-none" />

      <Suspense fallback={
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <span className="text-sm text-muted">Loading authentication...</span>
        </div>
      }>
        <AuthForm />
      </Suspense>
    </main>
  );
}
