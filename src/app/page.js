import React from "react";

import Censored from "../components/censored/Censored";
import HitCounter from "../components/hit_counter/HitCounter";

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number{" "}
        <Censored firstCensor>
          <HitCounter />
        </Censored>
        .
      </p>
    </main>
  );
}

export default Home;
