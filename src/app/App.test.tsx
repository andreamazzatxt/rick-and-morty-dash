import { render } from "@testing-library/react";

import App from "./App";

it("Doesn't Crash", async () => {
  render(<App />);
});
