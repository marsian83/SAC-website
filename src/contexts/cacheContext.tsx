import { createContext, ReactNode, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Event, Team } from "../interfaces/Data";

interface cacheType {
  getTeams: () => Team[];
  getTeam: (id: number) => Team;
  teamsLoading: boolean;
  getEvents: () => Event[];
  getEvent: (id: number) => Event;
  eventsLoading: boolean;
}

const CacheContext = createContext<cacheType>({} as cacheType);

export function CacheProvider({ children }: { children: ReactNode }) {
  const [teams, setTeams] = useState<Team[]>([]);
  const [teamsLoading, setTeamsLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);

  function getTeams() {
    if (!teams || !teams.length) {
      const [data, loading] = useFetch<Team[]>("/teams.json", [], () => {
        setTeams(data);
        setTeamsLoading(loading);
        return teams;
      });
    } else {
      return teams;
    }
    return teams;
  }

  function getTeam(id: number) {
    const team = getTeams().filter((team) => team.id == id)[0];
    return team || teams[0];
  }

  function getEvents() {
    if (!events || !events.length) {
      const [data, loading] = useFetch<Event[]>("/events.json", [], () => {
        setEvents(data);
        setEventsLoading(loading);
        return events;
      });
    } else {
      return events;
    }
    return events;
  }

  function getEvent(id: number) {
    const event = getEvents().filter((event) => event.id == id)[0];
    return event || events[0];
  }

  const value = {
    getTeams,
    getTeam,
    teamsLoading,
    getEvents,
    getEvent,
    eventsLoading,
  };

  return (
    <CacheContext.Provider value={value}>{children}</CacheContext.Provider>
  );
}

export default function useCache() {
  return useContext(CacheContext);
}
