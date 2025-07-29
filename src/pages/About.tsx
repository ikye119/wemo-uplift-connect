import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Target, Heart, Award } from "lucide-react";
import Layout from "@/components/Layout/Layout";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      initials: "SJ",
      description: "With over 15 years in women's advocacy, Sarah leads WEMO's strategic vision."
    },
    {
      name: "Maria Rodriguez",
      role: "Program Director",
      initials: "MR",
      description: "Maria oversees all program implementation and community outreach initiatives."
    },
    {
      name: "Aisha Patel",
      role: "Education Coordinator",
      initials: "AP",
      description: "Aisha develops and manages educational programs for women and girls."
    },
    {
      name: "Jennifer Kim",
      role: "Finance Director",
      initials: "JK",
      description: "Jennifer ensures transparent financial management and donor relations."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every interaction with empathy and understanding, recognizing the unique challenges women face."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of collective action and building strong, supportive networks."
    },
    {
      icon: Target,
      title: "Impact",
      description: "We focus on measurable outcomes and sustainable change that creates lasting empowerment."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in all our programs and initiatives."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About WEMO</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about our journey, mission, and the dedicated team working to empower women worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2015, the Women Empowerment Movement Organization (WEMO) began as a 
                  grassroots initiative by a group of passionate women who recognized the urgent need 
                  for systemic change in women's rights and opportunities.
                </p>
                <p>
                  What started as local workshops in a single community has grown into a global movement 
                  reaching over 25 countries. Our programs have evolved from basic literacy classes to 
                  comprehensive empowerment initiatives covering education, economic development, 
                  healthcare, and leadership training.
                </p>
                <p>
                  Today, WEMO stands as a beacon of hope for women seeking to break barriers and create 
                  positive change in their lives and communities. Our success is measured not just in 
                  numbers, but in the transformed lives and strengthened communities we serve.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">2015</h3>
                  <p className="text-sm text-muted-foreground">Founded</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-secondary mb-2">5,000+</h3>
                  <p className="text-sm text-muted-foreground">Lives Changed</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">25</h3>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-secondary mb-2">50+</h3>
                  <p className="text-sm text-muted-foreground">Programs</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We envision a world where gender equality is not just an aspiration but a reality. 
              A world where every woman, regardless of her background, has the opportunity to pursue 
              her dreams, lead with confidence, and contribute meaningfully to society.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <value.icon className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our dedicated team of professionals brings together diverse expertise and shared passion 
              for women's empowerment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Avatar className="mx-auto mb-4 w-20 h-20">
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;