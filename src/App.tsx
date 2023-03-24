import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import EventsPage from "./pages/EventsPage/EventsPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import TeamPage from "./pages/TeamPage/TeamPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<LandingPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

function Root() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
