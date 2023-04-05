import Feedback from "../../common/Feedback";
import Footer from "../../common/Footer";
import Hero from "./components/Hero";
import Navbar from "../../common/Navbar";
import useCache from "../../contexts/cacheContext";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Event } from "../../interfaces/Data";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const featuredEvents = [0, 1];

  const cache = useCache();
  // const events = cache.getEvents();
  const [events, eventsLoading] = useFetch<Event[]>("/events.json", []);

  const [featuredEventsSlide, setFeaturedEventsSlide] = useState(0);

  useEffect(() => {
    if (featuredEventsSlide > featuredEvents.length - 1) {
      setFeaturedEventsSlide(0);
    }
    if (featuredEventsSlide < 0) {
      setFeaturedEventsSlide(featuredEvents.length - 1);
    }
  }, [featuredEventsSlide]);

  return (
    <div className="relative">
      <div className="gradient1 -z-10" />
      <div className="gradient2 -z-10" />
      <Hero />
      <section className="p-page">
        <h1 className="text-center text-5xl font-bold">Director's Note</h1>
        <div className="flex items-center mt-8 gap-x-16 mobile:flex-col">
          <img
            src="https://www.iiitm.ac.in/images/demo/teachers/1650440085_Prof.-Sri-Niwas-Singh.jpg"
            alt="SNS"
            className="rounded-full border-2 border-gold w-60 aspect-square"
          />
          <p className="font-light text-xl mobile:text-center mobile:mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            perspiciatis ipsam rerum beatae, fugiat eligendi est consectetur
            repellendus quis nobis. Doloribus ut voluptatibus temporibus
            voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam perspiciatis ipsam rerum beatae, fugiat eligendi est
            consectetur repellendus quis nobis. Doloribus ut voluptatibus
            temporibus voluptatum! Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
            <p className="text-right italic text-xl mobile:mt-2">~ Prof. Sri Nivas Singh</p>
      </section>
      <section className="p-page my-20 py-10 rounded-t-3xl">
        <h1 className="text-center font-bold text-5xl">Featured Events</h1>
        <div className="flex my-10 justify-between items-center">
          <button
            onClick={() => {
              setFeaturedEventsSlide(featuredEventsSlide - 1);
            }}
          >
            <span className="material-icons">&#xe5e0;</span>
          </button>
          <div className="flex-1 overflow-hidden">
            <div
              className="flex duration-1000"
              style={{
                width: `${featuredEvents.length * 100}%`,
                transform: `translateX(-${
                  (featuredEventsSlide / featuredEvents.length) * 100
                }%)`,
              }}
            >
              {events &&
                events
                  ?.filter((event) => featuredEvents.includes(event.id))
                  .map((event) => (
                    <Link
                      to={`/events/${event.id}`}
                      key={event.id}
                      className="group w-full flex justify-center rounded-4xl mb-1"
                    >
                      <div
                        className="w-11/12 h-[75vh] mobile:h-[35vh] relative bg-cover bg-center rounded-2xl shadow shadow-secondary flex flex-col justify-between items-center"
                        style={{
                          background: `linear-gradient(to bottom, transparent, #00000099), url(${event.imageUrl})`, backgroundPosition:'center'
                        }}
                      >
                        <div />
                        <div
                          className="absolute bottom-0 translate-y-[calc(100%_-_5rem)] duration-500 group-hover:translate-y-0"
                          style={{ textShadow: "0px 0px 15px black" }}
                        >
                          <h2 className="text-center text-front text-5xl font-semibold py-4">
                            {event.title}
                          </h2>
                          <p className="px-4 py-5 text-center">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
            </div>
          </div>
          <button
            onClick={() => {
              setFeaturedEventsSlide(featuredEventsSlide + 1);
            }}
          >
            <span className="material-icons">&#xe5e1;</span>
          </button>
        </div>
      </section>
    </div>
  );
}
