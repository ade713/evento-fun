import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeWord(word: string): string {
  return word[0].toUpperCase() + word.slice(1);
};

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === 'all' ? undefined : capitalizeWord(city),
    },
    orderBy: {
      date: 'asc',
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  let totalCount;
  if (city === 'all') {
    totalCount = await prisma.eventoEvent.count();
  } else {
    totalCount = await prisma.eventoEvent.count({
      where: {
        city: capitalizeWord(city),
      },
    });
  }

  return {
    events,
    totalCount,
  };
});

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });

  if (!event) return notFound();

  return event;
});
