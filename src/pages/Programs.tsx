import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Briefcase, 
  Heart, 
  Users, 
  GraduationCap, 
  Stethoscope,
  Building,
  Globe
} from "lucide-react";
import Layout from "@/components/Layout/Layout";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Education for All",
      description: "Providing quality education and literacy programs for women and girls in underserved communities.",
      icon: BookOpen,
      category: "Education",
      beneficiaries: "2,500+ women",
      duration: "Ongoing",
      locations: "15 countries",
      highlights: [
        "Adult literacy classes",
        "Scholarship programs",
        "Digital literacy training",
        "Vocational education"
      ]
    },
    {
      id: 2,
      title: "Economic Empowerment",
      description: "Supporting women entrepreneurs with microfinance, business training, and mentorship programs.",
      icon: Briefcase,
      category: "Economic Development",
      beneficiaries: "1,800+ entrepreneurs",
      duration: "2018 - Present",
      locations: "12 countries",
      highlights: [
        "Microfinance loans",
        "Business skill workshops",
        "Mentorship networks",
        "Market access support"
      ]
    },
    {
      id: 3,
      title: "Healthcare Access",
      description: "Ensuring women have access to essential healthcare services and reproductive health education.",
      icon: Stethoscope,
      category: "Healthcare",
      beneficiaries: "5,000+ women",
      duration: "2016 - Present",
      locations: "20 countries",
      highlights: [
        "Mobile health clinics",
        "Maternal health programs",
        "Health education workshops",
        "Mental health support"
      ]
    },
    {
      id: 4,
      title: "Leadership Development",
      description: "Building the next generation of women leaders through training and capacity building programs.",
      icon: GraduationCap,
      category: "Leadership",
      beneficiaries: "800+ leaders",
      duration: "2019 - Present",
      locations: "8 countries",
      highlights: [
        "Leadership workshops",
        "Public speaking training",
        "Civic engagement programs",
        "Youth leadership camps"
      ]
    },
    {
      id: 5,
      title: "Safe Spaces Initiative",
      description: "Creating safe environments where women can gather, learn, and support each other.",
      icon: Building,
      category: "Community",
      beneficiaries: "3,200+ women",
      duration: "2017 - Present",
      locations: "18 countries",
      highlights: [
        "Community centers",
        "Support groups",
        "Legal aid services",
        "Counseling services"
      ]
    },
    {
      id: 6,
      title: "Digital Inclusion",
      description: "Bridging the digital divide by providing technology access and digital skills training.",
      icon: Globe,
      category: "Technology",
      beneficiaries: "1,500+ women",
      duration: "2020 - Present",
      locations: "10 countries",
      highlights: [
        "Computer literacy training",
        "Internet access programs",
        "E-commerce training",
        "Digital entrepreneurship"
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Education": "bg-primary text-primary-foreground",
      "Economic Development": "bg-secondary text-secondary-foreground",
      "Healthcare": "bg-green-100 text-green-800",
      "Leadership": "bg-blue-100 text-blue-800",
      "Community": "bg-purple-100 text-purple-800",
      "Technology": "bg-orange-100 text-orange-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover our comprehensive initiatives designed to empower women across education, 
              economic development, healthcare, and leadership. Each program is tailored to meet 
              the unique needs of the communities we serve.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Women Reached</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">6</div>
                <div className="text-sm text-muted-foreground">Active Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">9</div>
                <div className="text-sm text-muted-foreground">Years of Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program) => {
              const IconComponent = program.icon;
              return (
                <Card key={program.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="text-primary" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{program.title}</CardTitle>
                          <Badge className={`mt-1 ${getCategoryColor(program.category)}`}>
                            {program.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{program.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Beneficiaries</div>
                        <div className="text-sm font-semibold">{program.beneficiaries}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Duration</div>
                        <div className="text-sm font-semibold">{program.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Locations</div>
                        <div className="text-sm font-semibold">{program.locations}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-3">Program Highlights:</h4>
                      <ul className="space-y-1">
                        {program.highlights.map((highlight, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Want to Support Our Programs?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your contribution can help us expand these life-changing programs to reach even more women in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Donate to Programs
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              Volunteer With Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;