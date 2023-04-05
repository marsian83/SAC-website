import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCache from "../../contexts/cacheContext";
import useFetch from "../../hooks/useFetch";
import { Event, Team } from "../../interfaces/Data";

export default function TeamPage() {
  const [showingTeam, setShowingTeam] = useState(0);

  const [showingTeamData, setShowingTeamData] = useState<Team | null>(null);

  // const cache = useCache();
  // const teams = cache.getTeams();
  const [teams] = useFetch<Team[]>("/teams.json");
  const [events] = useFetch<Event[]>("/events.json");

  useEffect(() => {
    if (teams && teams.length) {
      setShowingTeamData(teams.filter((team) => team.id === showingTeam)[0]);

      console.log(showingTeamData);
    }
  }, [teams, showingTeam]);

  return (
    <>
      <div className="h-20" />
      {teams ? (
        <>
          <h1 className="text-secondary py-20 text-center font-semibold text-5xl mobile:text-4xl">
            The body of SAC at IIITM Gwalior has {teams.length} divisions
          </h1>
          <div className="flex flex-col items-center">
            <div className="bg-secondary bg-opacity-50 flex gap-x-8 px-10 py-3 rounded-lg mobile:w-[90%] mobile:px-4">
              {teams.map((team) => (
                <button
                  key={team.id}
                  onClick={() => {
                    setShowingTeam(team.id);
                  }}
                  className={`text-xl mobile:text-lg ${
                    team.id === showingTeam
                      ? "text-secondary drop-shadow pointer-events-none saturate-150 text"
                      : ""
                  }`}
                >
                  {team.name}
                </button>
              ))}
            </div>
            {showingTeamData && (
              <div className="flex flex-col gap-y-10">
                <div className="flex flex-col items-center py-16 p-page">
                  <h2 className="text-5xl font-semibold drop-shadow-lg italic">
                    {showingTeamData.name}
                  </h2>
                  <p className="mt-8 text-xl text-center font-extralight px-12 mobile:px-2">
                    {showingTeamData.description}
                  </p>
                </div>
                <div className="flex justify-center p-page gap-x-20">
                  {showingTeamData.faculty.map((faculty) => (
                    <Link
                      to={faculty.link}
                      key={faculty.name}
                      className="flex flex-col items-center hover:scale-110 transition-all ease-linear duration-300"
                    >
                      <img
                        src={faculty.imageUrl}
                        className="rounded-full border-2 border-gold w-44 aspect-square object-cover"
                      />
                      <h5 className="font-semibold text-lg">
                        {" "}
                        {faculty.name}{" "}
                      </h5>
                      <p className="text-front text-opacity-70">
                        Faculty co-ordinator
                      </p>
                    </Link>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-32 gap-y-20 justify-center py-10 p-page">
                  {showingTeamData.people.map((person) => (
                    <Link
                      to={person.link}
                      key={person.name}
                      className="flex flex-col items-center hover:scale-110 transition-all ease-linear duration-300"
                    >
                      <img
                        src={person.imageUrl}
                        alt={person.name}
                        className="aspect-square object-cover w-40 rounded-full border-2 border-front"
                      />
                      <h5 className="font-semibold text-lg mt-2">
                        {" "}
                        {person.name}{" "}
                      </h5>
                      <p className="text-front text-opacity-70">
                        {person.position}
                      </p>
                      <hr className="border border-white  border-opacity-20 w-full mt-2" />
                      <div className="flex flex-row gap-x-4 items-center mt-2">
                        <img src="https://img.icons8.com/material-sharp/24/FFFFFF/new-post.png" />
                        <img src="https://img.icons8.com/ios-filled/24/FFFFFF/linkedin.png" />
                      </div>
                    </Link>
                  ))}
                </div>
                <h1 className="text-center pt-3 pb-6 font-semibold text-5xl text-secondary">
                  Events
                </h1>
                <div className="flex-wrap p-page flex gap-x-5 justify-center">
                  {events &&
                    events
                      .filter((event) =>
                        showingTeamData.events.includes(event.id)
                      )
                      .map((event) => (
                        <Link
                          to={`/events/${event.id}`}
                          key={event.id}
                          className="w-[32%] aspect-video rounded-2xl gap-y-8 shadow shadow-secondary bg-center bg-cover text-center flex flex-col items-center justify-between"
                          style={{
                            backgroundImage: `linear-gradient(to bottom, transparent, #000000d5), url('${event.imageUrl}')`,
                          }}
                        >
                          <div />
                          <h5 className="text-xl font-semibold font-mono tracking-wide">
                            {event.title}
                          </h5>
                        </Link>
                      ))}
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}
