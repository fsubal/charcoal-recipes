import React, { useState } from "react";
import styled, { DefaultTheme } from "styled-components";
import logo from "./logo.svg";

import "@charcoal-ui/icons";
import type { Props as CharcoalIconProps } from "@charcoal-ui/icons";
import { Button } from "@charcoal-ui/react";
import createTheme from "@charcoal-ui/styled";

const theme = createTheme<DefaultTheme>();

const Logo = styled.img`
  pointer-events: none;
  ${theme((o) => [o.height.px(168)])};
`;

const Paragraph = styled.div`
  ${theme((o) => [o.typography(14).bold.preserveHalfLeading])}

  & + & {
    ${theme((o) => o.margin.top(16))}
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${theme((o) => [o.bg.background2, o.font.text1])}
`;

const Link = styled.a.attrs({ target: "_blank", rel: "noopener noreferrer" })`
  display: flex;
  align-items: center;
  ${theme((o) => o.font.brand)}
`;

const Wrapper = styled.div`
  text-align: center;
`;

const ButtonInner = styled.div`
  display: flex;
  align-items: center;
`;

interface IconProps
  extends Omit<CharcoalIconProps, "class" | "unsafe-non-guideline-scale"> {
  className?: string;
  __unsafe_NON_GUIDELINE_SCALE?: CharcoalIconProps["unsafe-non-guideline-scale"];
}

const Icon: React.VFC<IconProps> = ({
  className,
  __unsafe_NON_GUIDELINE_SCALE,
  ...rest
}) => {
  return (
    <pixiv-icon
      class={className}
      unsafe-non-guideline-scale={__unsafe_NON_GUIDELINE_SCALE}
      {...rest}
    />
  );
};

const App: React.VFC = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((count) => count + 1);
  }

  return (
    <Wrapper>
      <Header>
        <Logo src={logo} alt="logo" />
        <Paragraph>Hello Vite + React + Charcoal!</Paragraph>
        <Paragraph>
          <Button variant="Primary" onClick={handleClick}>
            count is: {count}
          </Button>
        </Paragraph>
        <Paragraph>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </Paragraph>
        <Paragraph>
          <Button
            variant="Navigation"
            to="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonInner>
              <Icon name="24/Book" __unsafe_NON_GUIDELINE_SCALE={16 / 24} />
              Learn React
            </ButtonInner>
          </Button>
        </Paragraph>
        <Paragraph>
          <Link href="https://vitejs.dev/guide/features.html">
            <Icon name="24/Logout" />
            Vite Docs
          </Link>
        </Paragraph>
      </Header>
    </Wrapper>
  );
};

export default App;
