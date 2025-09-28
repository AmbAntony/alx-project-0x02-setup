import Link from "next/link";

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
      {/* Property Image */}
      <div className="relative h-64 w-full">
        <Image
          src={property.image}
          alt={property.name}
          fill
          style={{ objectFit: 'cover' }} 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"