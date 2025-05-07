import { RiHome6Line, RiBarChartLine, RiFileChartLine, RiLineChartLine, RiPieChartLine, RiSpeedLine } from "react-icons/ri";
import {
  LuChevronsRight,
  LuCompass,
  LuLayoutDashboard,
  LuPower,
  LuStar,
  LuUsers,
  LuUserPlus,
  LuShield,
  LuSettings,
  LuUser,
  LuLock,
  LuBell,
  LuPalette,
  // LuHelpCircle,
  LuMailQuestion,
  LuTicket,
  LuClipboardCheck,
  LuClipboardX,
  LuCalendar,
  LuMap,
  LuDollarSign,
  LuActivity,
  LuShieldCheck,
  // LuEdit,
  LuUserCog,
  LuUserCheck,
  LuPen,
  LuCircleHelp,
  LuLifeBuoy
} from "react-icons/lu";

export const sidebar = [
  {
    title: "Dashboard",
    icon: <RiHome6Line className="w-5 h-5" />,
    submenus: [
      { title: "Overview", path: "/dashboard/overview", icon: <LuLayoutDashboard className="w-4 h-4" /> },
      {
        title: "Analytics",
        icon: <RiBarChartLine className="w-4 h-4" />,
        submenus: [
          { title: "Traffic", path: "/dashboard/analytics/traffic", icon: <LuActivity className="w-4 h-4" /> },
          { title: "Sales", path: "/dashboard/analytics/sales", icon: <LuDollarSign className="w-4 h-4" /> },
          { title: "User Behavior", path: "/dashboard/analytics/user-behavior", icon: <LuUsers className="w-4 h-4" /> },
        ],
      },
      {
        title: "Reports",
        icon: <RiFileChartLine className="w-4 h-4" />,
        submenus: [
          { title: "Daily", path: "/dashboard/reports/daily", icon: <LuCalendar className="w-4 h-4" /> },
          { title: "Monthly", path: "/dashboard/reports/monthly", icon: <RiLineChartLine className="w-4 h-4" /> },
          {
            title: "Custom Reports",
            icon: <RiPieChartLine className="w-4 h-4" />,
            submenus: [
              { title: "By Date", path: "/dashboard/reports/custom/by-date", icon: <LuCalendar className="w-4 h-4" /> },
              { title: "By Region", path: "/dashboard/reports/custom/by-region", icon: <LuMap className="w-4 h-4" /> },
            ],
          },
        ],
      },
      {
        title: "KPIs",
        icon: <LuChevronsRight className="w-4 h-4" />,
        submenus: [
          { title: "Financial", path: "/dashboard/kpis/financial", icon: <LuDollarSign className="w-4 h-4" /> },
          { title: "Operational", path: "/dashboard/kpis/operational", icon: <LuActivity className="w-4 h-4" /> },
        ],
      },
      { title: "Performance", path: "/dashboard/performance", icon: <RiSpeedLine className="w-4 h-4" /> },
    ],
  },
  {
    title: "Users",
    icon: <LuUsers className="w-5 h-5" />,
    submenus: [
      { title: "User List", path: "/users/list", icon: <LuUsers className="w-4 h-4" /> },
      {
        title: "Roles",
        icon: <LuShield className="w-4 h-4" />,
        submenus: [
          { title: "Admin", path: "/users/roles/admin", icon: <LuShieldCheck className="w-4 h-4" /> },
          { title: "Editor", path: "/users/roles/editor", icon: <LuPen className="w-4 h-4" /> },
          {
            title: "Custom Roles",
            icon: <LuUserCog className="w-4 h-4" />,
            submenus: [
              { title: "Role A", path: "/users/roles/custom/a", icon: <LuUserCheck className="w-4 h-4" /> },
              { title: "Role B", path: "/users/roles/custom/b", icon: <LuUserPlus className="w-4 h-4" /> },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Settings",
    icon: <LuSettings className="w-5 h-5" />,
    submenus: [
      { title: "Profile", path: "/settings/profile", icon: <LuUser className="w-4 h-4" /> },
      { title: "Security", path: "/settings/security", icon: <LuLock className="w-4 h-4" /> },
      {
        title: "Preferences",
        icon: <LuSettings className="w-4 h-4" />,
        submenus: [
          { title: "Notifications", path: "/settings/preferences/notifications", icon: <LuBell className="w-4 h-4" /> },
          { title: "Theme", path: "/settings/preferences/theme", icon: <LuPalette className="w-4 h-4" /> },
        ],
      },
    ],
  },
  {
    title: "Support",
    icon: <LuLifeBuoy className="w-5 h-5" />,
    submenus: [
      { title: "FAQs", path: "/support/faqs", icon: <LuCircleHelp className="w-4 h-4" /> },
      { title: "Contact Us", path: "/support/contact", icon: <LuMailQuestion className="w-4 h-4" /> },
      {
        title: "Tickets",
        icon: <LuTicket className="w-4 h-4" />,
        submenus: [
          { title: "Open Tickets", path: "/support/tickets/open", icon: <LuClipboardCheck className="w-4 h-4" /> },
          { title: "Closed Tickets", path: "/support/tickets/closed", icon: <LuClipboardX className="w-4 h-4" /> },
        ],
      },
    ],
  },
];