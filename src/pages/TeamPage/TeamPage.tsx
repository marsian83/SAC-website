import useCache from "../../contexts/cacheContext";

export default function TeamPage() {
  const cache = useCache();
  const teams = cache.getTeams();

  return (
    <>
      <div className="h-20" />
    </>
  );
}
