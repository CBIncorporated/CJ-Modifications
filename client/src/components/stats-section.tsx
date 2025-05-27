export default function StatsSection() {
  const stats = [
    { value: "150+", label: "Premium Assets" },
    { value: "2,500+", label: "Happy Customers" },
    { value: "50,000+", label: "Total Downloads" },
    { value: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <p className="text-blue-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}