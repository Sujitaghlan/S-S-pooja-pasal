import { type RouteConfig, index, route, layout} from "@react-router/dev/routes";

export default [
  index("components/register/Register.tsx"),
  route("login","components/login/Login.tsx"),
  layout("components/Topbar/Topbar.tsx", [
    route("home", "routes/home.tsx"),
    route("view", "components/Products/ViewProduct.tsx"),
    route("product", "components/Products/AllProducts.tsx"),
    route("dhoop", "components/Products/Dhoop.tsx"),
    route("lungdar", "components/Products/Lungdar.tsx"),
    route("deathitems", "components/Products/DeathItem.tsx"),
    route("khada", "components/Products/Khada.tsx"),
    route("buyInstruction", "components/footer/BuyInstruction.tsx"),
    route("deliveryPolicy", "components/footer/Delivery.tsx"),
    route("returnPolicy", "components/footer/ReturnPolicy.tsx"),
    route("contact", "components/footer/Contact.tsx"),
    route("about", "components/about-us/AboutUs.tsx"),
  ])
 
] satisfies RouteConfig;
