import Hero from "./navigation/Hero";
import Navigation from "./navigation/Navigation.module";

import Routes from "../../router/Routes";

export default function Homepage() {
  return (
    <div>
      <div>
        <Hero />
        <Navigation />
      </div>
      <div>
        <Routes />
      </div>
    </div>
  );
}
