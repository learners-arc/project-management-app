"use client";

import * as React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { ArrowRight, CheckCircle, BarChart2, Users, Calendar, Sun, Moon, Menu } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BarChart2 className="h-6 w-6" />
          <span className="sr-only">Project Management App</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
        </nav>
        <Button className="ml-auto md:hidden" variant="outline" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-4 w-4" />
        </Button>
        <Button className="ml-2" variant="outline" size="sm" onClick={toggleTheme}>
          {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </Button>
      </header>
      {isMenuOpen && (
        <nav className="flex flex-col items-center gap-4 p-4 bg-background border-b md:hidden">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
        </nav>
      )}

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Manage Your Projects with Ease
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Streamline your workflow, collaborate effortlessly, and deliver projects on time with our intuitive project management solution.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted px-4 md:px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-muted-foreground p-4 rounded-lg">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Team Collaboration</h3>
                <p className="text-muted-foreground text-center">
                  Work together seamlessly with real-time updates and communication tools.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-muted-foreground p-4 rounded-lg">
                <Calendar className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Task Management</h3>
                <p className="text-muted-foreground text-center">
                  Organize and prioritize tasks with intuitive boards and lists.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-muted-foreground p-4 rounded-lg">
                <BarChart2 className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Analytics & Reporting</h3>
                <p className="text-muted-foreground text-center">
                  Gain insights into project progress and team performance with detailed reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">What Our Customers Say</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <p className="text-muted-foreground">"This app has revolutionized how we manage our projects. Highly recommended!"</p>
                <p className="font-semibold">- Sarah J., Marketing Manager</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <p className="text-muted-foreground">"Intuitive interface and powerful features. It's a game-changer for our team."</p>
                <p className="font-semibold">- Mike T., Software Developer</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <p className="text-muted-foreground">"The analytics feature helps us stay on top of our project timelines and resources."</p>
                <p className="font-semibold">- Emily R., Project Manager</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted px-4 md:px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col p-6 bg-background rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Basic</h3>
                <p className="text-center text-muted-foreground mb-4">Perfect for small teams</p>
                <p className="text-4xl font-bold text-center mb-4">$9.99<span className="text-sm font-normal">/month</span></p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>Up to 5 team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>Basic task management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>Limited file storage</span>
                  </li>
                </ul>
                <Button className="mt-auto">Get Started</Button>
              </div>

              <div className="flex flex-col p-6 bg-background rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Pro</h3>
                <p className="text-center text-muted-foreground mb-4">For growing teams</p>
                <p className="text-4xl font-bold text-center mb-4">$19.99<span className="text-sm font-normal">/month</span></p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>Up to 20 team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>Advanced task management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="mt-auto">Get Started</Button>
              </div>

              <div className="flex flex-col p-6 bg-background rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Enterprise</h3>
                <p className="text-center text-muted-foreground mb-4">For large organizations</p>
                <p className="text-4xl font-bold text-center mb-4">Contact Us</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>Custom solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                <Button className="mt-auto">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>


        <section className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                  Join thousands of teams already using our project management solution to streamline their workflows.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By signing up, you agree to our <Link className="underline underline-offset-2" href="#">Terms & Conditions</Link>
                </p>
              </div>
            </div>
          </div>
        </section>


      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Project Management App. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;
