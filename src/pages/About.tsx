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
      description: "We approach every interaction with God's love and understanding, showing Christ's compassion to all."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of Christian fellowship and building strong, supportive church communities."
    },
    {
      icon: Target,
      title: "Impact",
      description: "We focus on measurable outcomes and sustainable change that creates lasting spiritual transformation."
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
              Learn about our journey, mission, and the dedicated team spreading God's love worldwide.
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
                  Founded in 2015, World Evangelical Mission Outreach (WEMO) began as a 
                  grassroots ministry by a group of passionate believers who recognized the urgent need 
                  to spread the Gospel and transform communities through God's love.
                </p>
                <p>
                  What started as local Bible studies in a single community has grown into a global mission 
                  reaching over 25 countries. Our programs have evolved from basic evangelism to 
                  comprehensive outreach initiatives covering discipleship, education, community development, 
                  and church planting.
                </p>
                <p>
                  Today, WEMO stands as a beacon of hope for those seeking God's love and transformation. 
                  Our success is measured not just in numbers, but in the souls saved and communities 
                  transformed by the power of the Gospel.
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
              We envision a world where every person knows the love of Jesus Christ. 
              A world where communities are transformed by the Gospel, and believers are equipped 
              to make disciples of all nations as commanded by our Lord.
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
              Our dedicated team of ministry professionals brings together diverse expertise and shared passion 
              for spreading God's love.
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