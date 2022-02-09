import ModalContainer, { EffectsType } from "@/components/blocks/modal/modal";
import colorContext from "@/components/context/color/colorContext";
import modalContext from "@/components/context/modal/modalContext";
import { classer } from "@/components/cookies/colormode/colorMode";
import animate from "@/components/functions/onscroll/animate/animate";
import onScroll from "@/components/functions/onscroll/onscroll";
import MainNav from "@/components/navigation/main/main";
import React, { useState, useEffect } from "react";
import InitHeader from "views/iniciacion/header/header";
import InitI from "views/iniciacion/I/I";
import InitII from "views/iniciacion/II/II";
import InitIII from "views/iniciacion/III/III";
import InitIntro from "views/iniciacion/intro/intro";
import InitIV from "views/iniciacion/IV/IV";
import Conocenos from "views/shared/conocenos/conocenos";

export default function index() {
	const [mode, setMode] = useState<"light" | "dark">("dark");
	const [modal, setModal] = useState<
		{ effect: EffectsType; view: JSX.Element } | undefined
	>(undefined);

	useEffect(() => {
		classer(mode);
		onScroll();
		animate();
	});

	return (
		<colorContext.Provider
			value={{ get: mode, set: (value) => setMode(value) }}
		>
			<modalContext.Provider
				value={{
					get: modal,
					set: (effect, view) =>
						setModal(view && effect ? { effect, view } : undefined),
				}}
			>
				<div className="flex flex-col w-full justify-start items-start h-auto">
					<MainNav />
					{modal ? (
						<ModalContainer effect={modal.effect}>{modal.view}</ModalContainer>
					) : (
						<></>
					)}
					<InitHeader />
					<InitIntro />
					<InitI />
					<InitII />
					<InitIII />
					<InitIV />
					<Conocenos
						title="Conocé más"
						info={[
							{
								title: "Comunidad Startup",
								description:
								"Una startup para startups y por el desarrollo de las startups. Nuestra éxito es que vuestra startup alcance el éxito.",
								button: "Ver más",
								link: "/",
							},
							{
								title: "Curso",
								description:
									"Metodología magra basada en el estado de las cosas para fundar iniciativas, cuya fuerza motriz no son el capital, ni los recursos sino el talento.",
								button: "Ver más",
								link: "/fundamentos",
							},
						]}
					/>
				</div>
			</modalContext.Provider>
		</colorContext.Provider>
	);
}