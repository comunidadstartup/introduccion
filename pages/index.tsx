import React, { useState, useEffect } from "react";

import ModalContainer, { EffectsType } from "@/components/blocks/modal/modal";
import modalContext from "@/components/context/modal/modalContext";
import animate from "@/components/functions/onscroll/animate/animate";
import onScroll from "@/components/functions/onscroll/onscroll";
import MainNav from "@/components/navigation/main/main";

import InicioHeader from "views/inicio/header/header";
import InicioI from "views/inicio/I/I";
import InicioII from "views/inicio/II/II";
import InicioIII from "views/inicio/III/III";
import InicioIV from "views/inicio/IV/IV";
import InicioV from "views/inicio/V/V";
import Conocenos from "views/shared/conocenos/conocenos";
import colorContext from "@/components/context/color/colorContext";
import colorMode from "@/components/cookies/colormode/colorMode";
import { SocialType } from "@/components/modals/links/link";

export default function index({ social }) {
	const [mode, setMode] = useState<"light" | "dark">(colorMode());

	const [modal, setModal] = useState<
		{ effect: EffectsType; view: JSX.Element } | undefined
	>(undefined);

	function classer() {
		const div = document.documentElement.classList;
		div.contains("light") ? div.remove("light") : div.remove("dark");
		div.add(mode);
	}

	useEffect(() => {
		classer();
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
					<InicioHeader />
					<InicioI />
					<InicioII />
					<InicioIII />
					<InicioIV />
					<InicioV />
					<Conocenos
						title="Conocé cómo vos también"
						social={social}
						info={[
							{
								title: "Iniciación",
								description:
									"Curso de iniciación para la adecuación cultural y técnica concerniente al emprendedurismo de categoría emergente.",
								button: "Ver más",
								link: "/iniciacion",
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

index.getInitialProps = async () => {
	const res = await fetch("http://localhost:3000/social.json");
	const social: SocialType = await res.json();
	return { social };
};
