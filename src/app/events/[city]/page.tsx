import { EventsList } from "@/components/events-list";
import { HeadingH1 } from "@/components/heading-h1";
import { Suspense } from "react";
import Loading from "./loading";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({params}: EventsPageProps) {
  const city = params.city;
  const capitalizedCity = city[0].toUpperCase() + city.slice(1);

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
