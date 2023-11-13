import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layouts/rootlayout";
import { ExplorePage, HomePage, PlaylistsPage } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="explore" element={<ExplorePage />} />
      <Route path="playlists" element={<PlaylistsPage />} />
    </Route>
  )
);

export default router;
