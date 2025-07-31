import { Link } from "react-router-dom";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-white">WEMO</span>
              <Heart className="ml-2 text-secondary" size={24} />
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Proclaiming the whole Gospel to the whole world through evangelism, discipleship, 
              Bible translation, relief, and holistic human development.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-secondary" />
                <span className="text-sm">Suite 305, NCWS Building, Area 11, FCDA, Near Shagalinku Restaurant, Abuja, Nigeria</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-secondary" />
                <span className="text-sm">+234 867 796 065, 0803 759 7648, 0815 795 9906</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-secondary" />
                <span className="text-sm">info@wemonetwork.org | wemomission@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/programs" 
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link 
                  to="/volunteer" 
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/donate" 
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link 
                  to="/volunteer" 
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 WEMO - World Evangelical Mission Outreach. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;