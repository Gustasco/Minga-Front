import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import {
  Home,
  NewAuthor,
  NewComic,
  NewChapter,
  ComicsView,
  Pages,
  TestComics,
  ComicView,
  SignUp,
  SignIn,
  Profile,
  MyComics,
  UpdateComic,
} from "../views";
import EditChapterForm from "../components/EditChapterForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new-author",
        element: <NewAuthor />,
      },
      {
        path: "/new-comic",
        element: <NewComic />,
      },
      {
        path: "/new-chapter",
        element: <NewChapter />,
      },
      {
        path: "/comic/:id",
        element: <ComicView />,
      },
      {
        path: "/comics",
        element: <ComicsView />,
      },
      {
        path: "/pages/:id",
        element: <Pages />,
      },
      {
        path: "/test",
        element: <TestComics />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/profile/me",
        element: <Profile />,
      },
      {
        path: "/companies/me",
        element: <Profile />,
      },
      {
        path: "/edit-comics",
        element: <MyComics />,
      },
      {
        path: "/edit-comic/:id",
        element: <UpdateComic />,
      },
      {
        path: "/edit-chapter",
        element: <EditChapterForm />,
      },
    ],
  },
]);

export default router;
