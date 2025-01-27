import * as React from "react";
import {
  PlasmicTextInputWhite,
  DefaultTextInputWhiteProps
} from "./plasmic/tady_to_zije_v_02/PlasmicTextInputWhite";

import { TextInputRef } from "@plasmicapp/react-web";

export interface TextInputWhiteProps extends DefaultTextInputWhiteProps {
  // Feel free to add any additional props that this component should receive
}
function TextInputWhite_(props: TextInputWhiteProps, ref: TextInputRef) {
  const { plasmicProps } =
    PlasmicTextInputWhite.useBehavior<TextInputWhiteProps>(props, ref);
  return <PlasmicTextInputWhite {...plasmicProps} />;
}

const TextInputWhite = React.forwardRef(TextInputWhite_);

export default Object.assign(
  TextInputWhite,

  {
    __plumeType: "text-input"
  }
);
