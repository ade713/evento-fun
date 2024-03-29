import { EventsList } from "@/components/events-list";
import { HeadingH1 } from "@/components/heading-h1";
import { EventoEvent } from "@/lib/types";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({params}: EventsPageProps) {
  const city = params.city;
  const capitalizedCity = city[0].toUpperCase() + city.slice(1);

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/?city=${city}`
  );
  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <HeadingH1 className="mb-28">
        { city === 'all' && 'All Events' }
        { city !== 'all' && `Events in ${capitalizedCity}` }
      </HeadingH1>

      <EventsList events={events} />
    </main>
  );
}
