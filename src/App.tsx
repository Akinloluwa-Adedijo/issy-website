import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import Moodboard from "./pages/Moodboard/Moodboard";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Layout from "./layouts/Layout";
import Error from "./pages/Error/Error";
import WorkDetailPage from "./components/WorkDetailPage/WorkDetailPage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="moodboard" element={<Moodboard />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="/work/:workTitle" element={<WorkDetailPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
