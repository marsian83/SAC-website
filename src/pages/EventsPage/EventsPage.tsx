import { Link } from "react-router-dom";
import useCache from "../../contexts/cacheContext";

export default function EventsPage() {
  const cache = useCache();
  const events = cache.getEvents();
  const teams = cache.getTeams();

  function getEventConductor(id: number) {
    if (teams && teams.length) {
      return teams.filter((team) => team.events.includes(id))[0];
    }
  }

  return events ? (
    <>
      <div className="h-32" />
      <div className="p-page flex flex-wrap justify-between">
        {events.map((event) => (
          <div className="w-[30%] rounded-2xl overflow-hidden flex flex-col items-center justify-between bg-secondary pb-5 bg-opacity-60">
            <div className="">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full object-cover"
              />
              <div className="py-3 flex flex-col items-center">
                <h3 className="text-3xl font-medium tracking-wide">
                  {event.title}
                </h3>
                <h5 className="font-extralight">
                  by {getEventConductor(event.id)?.name}
                </h5>
              </div>
              <p className="p-4 text-center font-light">{event.description}</p>
            </div>
            <Link
              to={`/events/${event.id}`}
              className="bg-gradient-to-b from-secondary w-max px-5 py-2 rounded-lg duration-500 hover:scale-105 hover:saturate-150"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </>
  ) : (
    <>Loading...</>
  );
}
