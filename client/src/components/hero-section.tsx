import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";

export default function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium <span className="text-blue-200">FiveM</span> & <span className="text-blue-200">Roblox</span> Assets
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Transform your gaming servers with high-quality MLOs, scripts, and custom modifications. Built by professionals for professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToProducts}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                <Play className="mr-2 h-5 w-5" />
                Explore Products
              </Button>
              <Button 
                onClick={scrollToAbout}
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold"
              >
                <Info className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Gaming development setup with multiple monitors" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center">
                <div className="text-blue-600 text-2xl mr-3">📥</div>
                <div>
                  <p className="font-bold text-gray-800">5,000+</p>
                  <p className="text-gray-500 text-sm">Downloads</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}