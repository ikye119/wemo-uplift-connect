import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Heart, Users, BookOpen, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Donate = () => {
  const [donationData, setDonationData] = useState({
    amount: "",
    name: "",
    email: "",
    payment_method: "bank_transfer"
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

      setDonationData({ amount: "", name: "", email: "", payment_method: "bank_transfer" });
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
      title: "Bible & Education",
      description: "₦20,000 can provide Bibles and educational materials for 5 people",
      amount: "₦20,000"
    },
    {
      icon: Users,
      title: "Evangelism Programs",
      description: "₦40,000 can fund a week of evangelism and outreach activities",
      amount: "₦40,000"
    },
    {
      icon: Shield,
      title: "Church Planting",
      description: "₦100,000 can help establish a new church in unreached areas",
      amount: "₦100,000"
    },
    {
      icon: Heart,
      title: "Mission Support",
      description: "₦200,000 can support missionaries for a full month",
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
              Your donation directly impacts souls and communities around the world
            </p>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Impact in Action</h2>
              <p className="text-lg text-muted-foreground">
                See how your donation can help spread God's love and transform communities
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
                Every contribution helps us spread God's love and transform more communities worldwide.
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
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full bg-primary"></div>
                        <Label className="font-medium">Bank Transfer (Only Available Option)</Label>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        All donations are processed through bank transfer to our official account.
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                  <div className="bg-muted/50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold mb-2">Bank Transfer Details:</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>Account Name:</strong> We Empower Movement</p>
                      <p><strong>Account Number:</strong> 1025381693</p>
                      <p><strong>Bank Name:</strong> UBA</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Please send your transfer receipt to wemomission@gmail.com for confirmation.
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
                WEMO is a registered religious organization. 
                Please consult your tax advisor regarding deductibility of donations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Donate;