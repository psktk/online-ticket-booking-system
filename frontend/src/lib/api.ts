import { Event, EventsResponse } from "@/types/event";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export const eventsApi = {
  async getEvents(): Promise<Event[]> {
    const response = await fetch(`${API_BASE_URL}/events`);

    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }

    const data: EventsResponse = await response.json();
    return data.data;
  },

  async getEventById(id: number): Promise<Event> {
    const response = await fetch(`${API_BASE_URL}/events/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch event");
    }

    const data = await response.json();
    return data.data;
  },
};
