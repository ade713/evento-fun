import { EventoEvent } from "@/lib/types";

type EventCardProps = {
  event: EventoEvent;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <section>{event.name}</section>
  );
}
