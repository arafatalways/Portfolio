
import { FrontLayout } from "@/components/layout/FrontLayout";
import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import { SkillPage } from "@/pages/SkillPage";
import { WorkPage } from "@/pages/WorkPage";
import { createBrowserRouter } from "react-router-dom";
  

export const router = createBrowserRouter([
        {
            path: "/",
            Component: FrontLayout,
            children:[
                {
                    path:"/",
                    Component: HomePage
                },
                {
                    path:"about",
                    Component: AboutPage
                },
                {
                    path:"skills",
                    Component: SkillPage
                },
                  {
                    path:"projects",
                    Component: WorkPage
                },

            ]
        }
    ]);