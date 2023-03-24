import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCache from "../../contexts/cacheContext";
import { Team } from "../../interfaces/Data";

export default function TeamPage() {
  const [showingTeam, setShowingTeam] = useState(0);

  const [showingTeamData, setShowingTeamData] = useState<Team | null>(null);

  const cache = useCache();
  const teams = cache.getTeams();

  useEffect(() => {
    setShowingTeamData(cache.getTeam(showingTeam));
    console.log(showingTeamData);
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
              <div className="flex flex-col">
                <div className="flex justify-center p-page gap-x-20">
                  {showingTeamData.faculty.map((faculty) => (
                    <Link to={faculty.link} key={faculty.name}>
                      <img
                        src={faculty.imageUrl}
                        className="rounded-full border-2 border-gold"
                      />
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
