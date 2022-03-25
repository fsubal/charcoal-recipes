import "@charcoal-ui/icons";
import type { Props as CharcoalIconProps } from "@charcoal-ui/icons";

interface Props
  extends Omit<CharcoalIconProps, "class" | "unsafe-non-guideline-scale"> {
  className?: string;
  __unsafe_NON_GUIDELINE_SCALE?: CharcoalIconProps["unsafe-non-guideline-scale"];
}

export const Icon: React.VFC<Props> = ({
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
