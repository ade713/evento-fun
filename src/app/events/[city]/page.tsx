import { HeadingH1 } from "@/components/heading-h1";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default function EventsPage({params}: EventsPageProps) {
  const city = params.city;
  const capitalizedCity = city[0].toUpperCase() + city.slice(1);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <HeadingH1>
        { city === 'all' && 'All Events' }
        { city !== 'all' && `Events in ${capitalizedCity}` }
      </HeadingH1>
    </main>
  );
}
