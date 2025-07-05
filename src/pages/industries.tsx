import Image from "next/image";

const industries = [
  {
    title: "Healthcare",
    description:
      "Improving patient outcomes through modern digital solutions and data-driven care.",
    image: "",
  },
  {
    title: "Automobiles",
    description:
      "Driving innovation with connected vehicle technologies and smart manufacturing.",
    image: "/industries/education.jpg",
  },
  {
    title: "Finance",
    description:
      "Enabling secure, fast, and user-friendly digital finance platforms for modern banking.",
    image: "/images/industries/finance.jpg",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Delivering seamless shopping experiences with intelligent supply chain and omnichannel tech.",
    image: "/images/industries/retail.jpg",
  },
  {
    title: "Logistics",
    description:
      "Optimizing operations with real-time tracking, route planning, and smart warehouses.",
    image: "/images/industries/logistics.jpg",
  },
  {
    title: "Education",
    description:
      "Empowering learners and educators with intuitive, remote-first learning experiences.",
    image: "/images/industries/education.jpg",
  },
];

export default function IndustriesPage() {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <h2 className="text-3xl text-purple-50 md:text-4xl font-bold text-center mb-12">
        Industries We Serve
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={industry.image}
              alt={industry.title}
              width={400}
              height={250}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
              <h3 className="text-white text-xl font-semibold mb-2">
                {industry.title}
              </h3>
              <p className="text-white text-sm line-clamp-3">
                {industry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
