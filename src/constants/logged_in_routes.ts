import dayjs from "dayjs";
import {
  Home,
  LineChart,
  Package,
  ArrowLeftRight,
  Blocks,
} from "lucide-vue-next";

type LoggedInRoute = {
  name: string;
  path: string;
  icon: any;
};

const LOGGED_IN_ROUTES: Array<LoggedInRoute> = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: Home,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: ArrowLeftRight,
  },
  {
    name: "Categories",
    path: `/categories?page=1&startDate=${dayjs()
      .startOf("day")
      .subtract(3, "days")
      .format()}&endDate=${dayjs().endOf("day").format()}`,
    icon: Blocks,
  },
  {
    name: "Products",
    path: "/products",
    icon: Package,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: LineChart,
  },
];

export default LOGGED_IN_ROUTES;
