import { Event } from "@/types/event";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import Image from "next/image";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const formattedTime = eventDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={event.image_url}
          alt={event.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-800">
          {event.category}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {event.title}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {event.description}
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <CalendarDays className="h-4 w-4" />
          <span>{formattedDate}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <Clock className="h-4 w-4" />
          <span>{formattedTime}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <MapPin className="h-4 w-4" />
          <span>{event.venue}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-gray-900">
            ${event.price.toFixed(2)}
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
