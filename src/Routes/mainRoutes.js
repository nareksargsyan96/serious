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

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: () => <Home />,
  },
  {
    name: "aboutUs",
    text: "About Us",
    path: "/about",
    exact: true,
    component: () => <AboutUs />,
    children: [
      {
        name: "Process",
        path: "/about/process",
        exact: false,
        component: () => <Process />,
      },
    ],
  },
  {
    name: "Technologies",
    path: "/technologies",
    exact: false,
    component: () => <Technologies />,
  },
  {
    name: "Services",
    path: "/services",
    exact: true,
    component: () => <Services />,
    children: [
      {
        name: "ServicesMo",
        path: "/services/mobile",
        exact: false,
        component: () => <ServicesMobile />,
      },
      {
        name: "Software",
        path: "/services/software",
        exact: false,
        component: () => <Software />,
      },
      {
        name: "automation",
        path: "/services/automation",
        exact: false,
        component: () => <Automation />,
      },
      {
        name: "automation",
        path: "/services/soe&smm",
        exact: false,
        component: () => <CeoSmm />,
      },
    ],
  },
  {
    name: "Clients",
    path: "/clients",
    exact: false,
    component: () => <Clients />,
  },
  {
    name: "Contact",
    path: "/contact",
    exact: false,
    component: () => <Contact />,
  },
];
