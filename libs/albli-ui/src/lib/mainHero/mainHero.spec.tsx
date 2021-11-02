import { render } from "@testing-library/react";

import MainHero from "./mainHero";

describe("MainHero", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MainHero />);
    expect(baseElement).toBeTruthy();
  });
});
