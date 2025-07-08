'use client';

const clients = [
  { name: 'Dubai Municipality', logo: '/clients/dubai.png' },
  { name: 'Springer Nature', logo: '/clients/springer.png' },
  { name: 'KASP Securities', logo: '/clients/kasp.png' },
  { name: 'Royal IHC', logo: '/clients/ihc.png' },
  { name: 'WeatherFord', logo: '/clients/weather.png' },
  { name: 'Trane Technologies', logo: '/clients/trane.png' },
];

export default function ClientMarquee() {
  return (
    <div className="bg-[#ffffff] py-8 my-8 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee flex items-center gap-12">
        {clients.concat(clients).map((client, index) => (
          <div key={index} className="inline-block min-w-[120px]">
            <img
              src={client.logo}
              alt={client.name}
              className="h-10 object-contain opacity-70 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
