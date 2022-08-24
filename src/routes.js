/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tickets from "views/examples/Tickets.js";
import Icons from "views/examples/Icons.js";
import {AiFillDashboard,AiOutlineSolution} from "react-icons/ai";
import {FaTicketAlt,} from "react-icons/fa";
import {BiBuildings} from "react-icons/bi";
import {FcContacts} from "react-icons/fc";
import {IoShareSocialSharp} from "react-icons/io5";
import Contacts from "views/examples/Contacts";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: <AiFillDashboard className="text-primary m-2" />,
    component: Index,
    layout: "/admin",
  },
  {
    path: "/tickets",
    name: "Tickets",
    icon: <FaTicketAlt className="text-dark m-2"/>,
    component: Tickets,
    layout: "/admin",
  },
  {
    path: "/contacts",
    name: "Contacts",
    icon: <FcContacts className="text-danger m-2"/>,
    component: Contacts,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Companies",
    icon: <BiBuildings className="text-primary m-2"/>,
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Social",
    icon: <IoShareSocialSharp className="text-primary m-2"/>,
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Solution",
    icon: <AiOutlineSolution className="text-primary m-2"/>,
    component: Profile,
    layout: "/admin",
  },

];
export default routes;
