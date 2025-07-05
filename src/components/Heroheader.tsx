
interface HeroHeaderProps {
  heading: string
  backgroundImageUrl?: string
}

export default function HeroHeader({
  heading,
  backgroundImageUrl = '/heroimg.jpg',
}: HeroHeaderProps) {
  return (
    <div
      className="w-full h-[250px] md:h-[300px] flex items-center justify-center bg-center bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${backgroundImageUrl})`,
      }}
    >
      <h1 className="text-4xl md:text-5xl text-white font-semibold drop-shadow-lg">
        {heading}
      </h1>
    </div>
  )
}
