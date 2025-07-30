import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, Users, Globe, Lightbulb } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('volunteer_applications')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });

      setFormData({ name: "", email: "", skills: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const opportunities = [
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Help us connect with communities and spread awareness about women's empowerment initiatives."
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description: "Share your expertise and guide women in their personal and professional development journey."
    },
    {
      icon: Globe,
      title: "Digital Advocacy",
      description: "Use your social media skills to amplify our message and reach more women worldwide."
    },
    {
      icon: Lightbulb,
      title: "Program Development",
      description: "Help design and implement new programs that address emerging needs in women's empowerment."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our Mission
            </h1>
            <p className="text-xl text-white/90">
              Become a volunteer and help us empower women worldwide
            </p>
          </div>
        </section>

        {/* Why Volunteer */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Volunteer With WEMO?</h2>
              <p className="text-lg text-muted-foreground">
                Make a real difference in women's lives while developing your own skills and network.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {opportunities.map((opportunity, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <opportunity.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {opportunity.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Apply to Volunteer</h2>
              <p className="text-lg text-muted-foreground">
                Tell us about yourself and how you'd like to contribute.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
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
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills & Experience</Label>
                    <Input
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Teaching, Marketing, Social Media, Event Planning..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Why do you want to volunteer with WEMO?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your motivation and how you'd like to contribute..."
                      rows={5}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Volunteer;