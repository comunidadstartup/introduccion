import { EffectsType } from "@/components/blocks/modal/modal";
import React from "react";

type modeContext = {
	get: { effect: EffectsType; view: JSX.Element } | undefined;
	set: (effect?: EffectsType, view?: JSX.Element) => void;
};

const modalContext = React.createContext<modeContext>({
	get: undefined,
	set: () => {},
});

export default modalContext;
