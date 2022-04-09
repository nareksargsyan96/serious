import { Home } from "./../Pages/Home/Home";
import { AboutUs } from "./../Pages/AboutUs/AboutUs";
import { Process } from "./../Pages/AboutUs/Children/Process";
import { Technologies } from "../Pages/Technologies/Technologies";
import { Services } from "./../Pages/Services/Services";
import { ServicesMobile } from "./../Pages/Services/Children/ServicesMobile/ServicesMobile";
import { Software } from "./../Pages/Services/Children/Software/Software";
import { Automation } from "./../Pages/Services/Children/Automation/Automation";
import { CeoSmm } from "./../Pages/Services/Children/CeoSmm/CeoSmm";
import { Contact } from "../Pages/Contact/Contact";
import { Clients } from "../Pages/Clients/Clients";
// import { Courses } from "../Pages/Courses/Courses";

const mainRoutes = [
  {
    name: "home",
    text: "Home",
    path: "/",
    isActive: false,
    exact: true,
    component: () => <Home />,
  },
  {
    name: "aboutUs",
    text: "About Us",
    path: "/about",
    isActive: false,
    exact: true,
    component: () => <AboutUs />,
    children: [
      {
        name: "Process",
        path: "/about/process",
        isActive: false,
        exact: false,
        component: () => <Process />,
      },
    ],
  },
  {
    name: "technologies",
    text: "Technologies",
    path: "/technologies",
    isActive: false,
    exact: false,
    component: () => <Technologies />,
  },
  {
    name: "services",
    text: "Services",
    path: "/services",
    isActive: false,
    exact: true,
    component: () => <Services />,
    children: [
      {
        name: "servicesMo",
        text: "ServicesMo",
        path: "/services/mobile",
        isActive: false,
        exact: false,
        component: () => <ServicesMobile />,
      },
      {
        name: "software",
        text: "Software",
        path: "/services/software",
        isActive: false,
        exact: false,
        component: () => <Software />,
      },
      {
        name: "automation",
        text: "Automation",
        path: "/services/automation",
        isActive: false,
        exact: false,
        component: () => <Automation />,
      },
      {
        name: "soesmm",
        text: "SoeSmm",
        path: "/services/soesmm",
        isActive: false,
        exact: false,
        component: () => <CeoSmm />,
      },
    ],
  },
  {
    name: "clients",
    text: "Clients",
    path: "/clients",
    isActive: false,
    exact: false,
    component: () => <Clients />,
  },

  {
    name: "contact",
    text: "Contact",
    path: "/contact",
    isActive: false,
    exact: false,
    component: () => <Contact />,
  },
];

export default mainRoutes;
