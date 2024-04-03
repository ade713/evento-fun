import { EventsList } from "@/components/events-list";
import { HeadingH1 } from "@/components/heading-h1";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalizeWord } from "@/lib/utils";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams : {
    [key: string]: string | string[] | undefined
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === 'all' ? "All Events" : `Events in ${capitalizeWord(city)}`,
  };
};

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({ params, searchParams}: EventsPageProps) {
  const city = params.city;
  const capitalizedCity = capitalizeWord(city);
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  console.log({parsedPage})

  if (!parsedPage.success) {
    throw new Error("invalid page number");
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <HeadingH1 className="mb-28">
        { city === 'all' && 'All Events' }
        { city !== 'all' && `Events in ${capitalizedCity}` }
      </HeadingH1>

      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
