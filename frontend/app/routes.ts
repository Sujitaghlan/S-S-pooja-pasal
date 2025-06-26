import { type RouteConfig, index, route, layout} from "@react-router/dev/routes";

export default [
  index("features/register/Register.tsx"),
  route("login","features/login/Login.tsx"),
  layout("features/Topbar/Topbar.tsx", [
    route("home", "routes/home.tsx"),
    route("view", "features/Products/ViewProduct.tsx"),
    route("product", "features/Products/AllProducts.tsx"),
    route("dhoop", "features/Products/Dhoop.tsx"),
    route("lungdar", "features/Products/Lungdar.tsx"),
    route("deathitems", "features/Products/DeathItem.tsx"),
    route("khada", "features/Products/Khada.tsx"),
    route("buyInstruction", "features/footer/BuyInstruction.tsx"),
    route("deliveryPolicy", "features/footer/Delivery.tsx"),
    route("returnPolicy", "features/footer/ReturnPolicy.tsx"),
    route("contact", "features/footer/Contact.tsx"),
    route("about", "features/about-us/AboutUs.tsx"),
  ])
 
] satisfies RouteConfig;
