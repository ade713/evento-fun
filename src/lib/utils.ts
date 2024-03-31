import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventoEvent } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeWord(word: string): string {
  return word[0].toUpperCase() + word.slice(1);
};

export async function getEvents(city: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/?city=${city}`
  );
  const events: EventoEvent[] = await response.json();

  return events;
}

export async function getEvent(slug: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event = await response.json();

  return event;
}
