import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Heart, Target, Globe } from "lucide-react";
import Layout from "@/components/Layout/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Spreading God's Love,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Transforming Lives
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              World Evangelical Mission Outreach (WEMO) is dedicated to spreading the Gospel 
              and transforming communities through God's love, education, and outreach programs worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/donate">
                  Donate Now <Heart className="ml-2" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/volunteer">
                  Join Our Cause <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              To spread the Gospel of Jesus Christ to all nations and transform communities through 
              God's love. We believe in empowering believers through discipleship, education, and 
              outreach programs that bring hope and healing to the world.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-3xl font-bold text-primary mb-2">5,000+</h3>
                <p className="text-muted-foreground">Lives Transformed</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Target className="mx-auto mb-4 text-secondary" size={48} />
                <h3 className="text-3xl font-bold text-secondary mb-2">50+</h3>
                <p className="text-muted-foreground">Active Programs</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Globe className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-3xl font-bold text-primary mb-2">25</h3>
                <p className="text-muted-foreground">Countries Reached</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Heart className="mx-auto mb-4 text-secondary" size={48} />
                <h3 className="text-3xl font-bold text-secondary mb-2">1,200+</h3>
                <p className="text-muted-foreground">Volunteers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of believers working together to spread God's love and transform communities. 
            Every contribution matters, every prayer counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/programs">
                Explore Programs <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/about">
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
