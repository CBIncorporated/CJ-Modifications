import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  const features = [
    "High-quality, optimized assets",
    "Professional support and documentation",
    "Regular updates and new releases",
    "Custom development services available",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About CJ Modifications</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded by passionate gaming enthusiasts, CJ Modifications has been creating premium assets for FiveM and Roblox communities since 2020. Our team combines technical expertise with creative vision to deliver exceptional gaming experiences.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-blue-600 h-6 w-6 mr-3" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="CJ Modifications team working on gaming assets" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold">3+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}