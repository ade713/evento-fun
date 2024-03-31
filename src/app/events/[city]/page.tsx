import { EventsList } from "@/components/events-list";
import { HeadingH1 } from "@/components/heading-h1";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalizeWord } from "@/lib/utils";

type Props = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === 'all' ? "All Events" : `Events in ${capitalizeWord(city)}`,
  };
};

export default async function EventsPage({params}: Props) {
  const city = params.city;
  const capitalizedCity = capitalizeWord(city);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <HeadingH1 className="mb-28">
        { city === 'all' && 'All Events' }
        { city !== 'all' && `Events in ${capitalizedCity}` }
      </HeadingH1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
