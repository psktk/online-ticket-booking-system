"use client";

import { useEvents } from "@/hooks/useEvents";
import { EventCard } from "./EventCard";
import { Loader2 } from "lucide-react";

export function EventList() {
  const { data: events, isLoading, error } = useEvents();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <span className="ml-2 text-gray-600">Loading events...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-2">Error loading events</div>
        <p className="text-gray-600">
          {error instanceof Error ? error.message : "Something went wrong"}
        </p>
      </div>
    );
  }

  if (!events || events.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-600 mb-2">No events found</div>
        <p className="text-gray-500">Check back later for upcoming events!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
