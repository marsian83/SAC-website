import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCache from "../../contexts/cacheContext";
import useFetch from "../../hooks/useFetch";
import { Team } from "../../interfaces/Data";

export default function TeamPage() {
  const [showingTeam, setShowingTeam] = useState(0);

  const [showingTeamData, setShowingTeamData] = useState<Team | null>(null);

  // const cache = useCache();
  // const teams = cache.getTeams();
  const [teams] = useFetch<Team[]>("/teams.json");

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
          <h1 className="text-secondary py-20 text-center font-semibold text-5xl">
            The body of SAC at IIITM Gwalior has {teams.length} divisions
          </h1>
          <div className="flex flex-col items-center">
            <div className="bg-secondary bg-opacity-50 flex gap-x-8 px-10 py-3 rounded-lg">
              {teams.map((team) => (
                <button
                  key={team.id}
                  onClick={() => {
                    setShowingTeam(team.id);
                  }}
                  className={`text-xl ${
                    team.id === showingTeam
                      ? "text-secondary drop-shadow pointer-events-none saturate-150"
                      : ""
                  }`}
                >
                  {team.name}
                </button>
              ))}
            </div>
            {showingTeamData && (
              <div className="flex flex-col gap-y-10">
                <div className="flex justify-center p-page gap-x-20 py-16">
                  {showingTeamData.faculty.map((faculty) => (
                    <Link
                      to={faculty.link}
                      key={faculty.name}
                      className="flex flex-col items-center"
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
                <div className="flex flex-wrap gap-x-32 p-page">
                  {showingTeamData.people.map((person) => (
                    <Link
                      to={person.link}
                      key={person.name}
                      className="flex flex-col items-center"
                    >
                      <img
                        src={person.imageUrl}
                        alt={person.name}
                        className="aspect-square object-cover w-40 rounded-full border-2 border-front"
                      />
                      <h5 className="font-semibold text-lg"> {person.name} </h5>
                      <p className="text-front text-opacity-70">
                        {person.position}
                      </p>
                    </Link>
                  ))}
                </div>
                <div className=""></div>
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
