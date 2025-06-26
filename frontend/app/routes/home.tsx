import type { Route } from "./+types/home";
import Main from "~/features/Main/Main";
import Products from "~/features/Products/Products";
import AboutUs from "~/features/about-us/AboutUs";
import Testimonials from "~/features/testimonials/Testimonials";
//import Footer from "~/components/footer/Footer";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "S&S pooja pasal" },
    { name: "description", content: "Welcome to S&S pooja pasal!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
       <Main />
       <Products />
       <AboutUs />
       <Testimonials />
    </div>
);
}
