import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeWord(word: string): string {
  return word[0].toUpperCase() + word.slice(1);
};

export async function getEvents(city: string) {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === 'all' ? undefined : capitalizeWord(city),
    },
    orderBy: {
      date: 'asc',
    },
  });

  return events;
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });

  return event;
}
