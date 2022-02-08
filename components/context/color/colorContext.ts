import colorMode from "@/components/cookies/colormode/colorMode";
import React, { Dispatch, SetStateAction } from "react";

type colorContext = {
	get: "light" | "dark";
	set: Dispatch<SetStateAction<"light" | "dark">>;
};

const colorContext = React.createContext<colorContext>({
	get: "light",
	set: () => {},
});

export default colorContext;
