import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, Users, BookOpen, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Donate = () => {
  const [donationData, setDonationData] = useState({
    amount: "",
    name: "",
    email: "",
    payment_method: "credit_card"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('donations')
        .insert([{
          ...donationData,
          amount: parseFloat(donationData.amount)
        }]);

      if (error) throw error;

      toast({
        title: "Thank You!",
        description: "Your donation has been recorded. We'll send you a receipt via email.",
      });

      setDonationData({ amount: "", name: "", email: "", payment_method: "credit_card" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process donation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const impactAreas = [
    {
      icon: BookOpen,
      title: "Education & Skills",
      description: "₦20,000 can provide educational materials for 5 women",
      amount: "₦20,000"
    },
    {
      icon: Users,
      title: "Community Programs",
      description: "₦40,000 can fund a week of community outreach activities",
      amount: "₦40,000"
    },
    {
      icon: Shield,
      title: "Safe Spaces",
      description: "₦100,000 can help establish a safe space for women in need",
      amount: "₦100,000"
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "₦200,000 can provide healthcare support for 10 women",
      amount: "₦200,000"
    }
  ];

  const setAmount = (amount: string) => {
    setDonationData(prev => ({ ...prev, amount }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-black-accent"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Make a Difference Today
            </h1>
            <p className="text-xl text-white/90">
              Your donation directly impacts women's lives around the world
            </p>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Impact in Action</h2>
              <p className="text-lg text-muted-foreground">
                See how your donation can make a real difference
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {impactAreas.map((area, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all cursor-pointer border border-black-accent-light/10 hover:border-black-accent-light/20"
                  onClick={() => setAmount(area.amount.replace('₦', '').replace(',', ''))}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit">
                      <area.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{area.amount}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {area.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Complete Your Donation</h2>
              <p className="text-lg text-muted-foreground">
                Every contribution helps us empower more women worldwide.
              </p>
            </div>

            <Card className="border border-black-accent-light/10 shadow-black-accent">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Amount Selection */}
                  <div className="space-y-4">
                    <Label className="text-lg">Donation Amount</Label>
                    <div className="grid grid-cols-4 gap-3">
                      {['10000', '20000', '40000', '100000'].map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={donationData.amount === amount ? "default" : "outline"}
                          onClick={() => setAmount(amount)}
                          className="h-12 shadow-sm hover:shadow-md transition-shadow"
                        >
                          ₦{parseInt(amount).toLocaleString()}
                        </Button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custom-amount">Custom Amount</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">₦</span>
                        <Input
                          id="custom-amount"
                          name="amount"
                          type="number"
                          min="1"
                          step="0.01"
                          value={donationData.amount}
                          onChange={handleChange}
                          required
                          placeholder="0.00"
                          className="pl-8 border-black-accent-light/20 focus:border-black-accent-light/40"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={donationData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={donationData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-4">
                    <Label className="text-lg">Payment Method</Label>
                    <RadioGroup 
                      value={donationData.payment_method} 
                      onValueChange={(value) => setDonationData(prev => ({ ...prev, payment_method: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="credit_card" id="credit_card" />
                        <Label htmlFor="credit_card">Credit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">PayPal</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bank_transfer" id="bank_transfer" />
                        <Label htmlFor="bank_transfer">Bank Transfer</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="border-t pt-6">
                    <div className="bg-muted/50 p-4 rounded-lg mb-4">
                      <p className="text-sm text-muted-foreground">
                        <strong>Note:</strong> This is a demonstration form. In a real implementation, 
                        this would integrate with a secure payment processor like Stripe or PayPal.
                      </p>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-lg" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : `Donate ₦${donationData.amount ? parseInt(donationData.amount).toLocaleString() : '0'}`}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="text-center mt-8 text-sm text-muted-foreground">
              <p>
                WEMO is a registered 501(c)(3) nonprofit organization. 
                Your donation is tax-deductible to the extent allowed by law.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Donate;