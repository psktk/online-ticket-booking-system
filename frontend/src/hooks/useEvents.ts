import { useQuery } from "@tanstack/react-query";
import { eventsApi } from "@/lib/api";

export const useEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: eventsApi.getEvents,
  });
};

export const useEvent = (id: number) => {
  return useQuery({
    queryKey: ["event", id],
    queryFn: () => eventsApi.getEventById(id),
    enabled: !!id,
  });
};
