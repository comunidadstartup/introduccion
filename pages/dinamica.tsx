import ModalContainer, { EffectsType } from "@/components/blocks/modal/modal";
import colorContext from "@/components/context/color/colorContext";
import modalContext from "@/components/context/modal/modalContext";
import { classer } from "@/components/cookies/colormode/colorMode";
import animate from "@/components/functions/onscroll/animate/animate";
import onScroll from "@/components/functions/onscroll/onscroll";
import MainNav from "@/components/navigation/main/main";
import React, { useState, useEffect } from "react";
import DinamicaHeader from "views/dinamica/header/header";
import DinamicaI from "views/dinamica/I/I";
import DinamicaII from "views/dinamica/II/II";
import DinamicaIII from "views/dinamica/III/III";
import DinamicaIV from "views/dinamica/IV/IV";
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
					<DinamicaHeader />
					<DinamicaI />
					<DinamicaII />
					<DinamicaIII />
					<DinamicaIV />
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
								title: "Fundamentos",
								description:
									"Metodología magra basada en el estado de las cosas para fundar iniciativas, cuya fuerza motriz no son el capital, ni los recursos sino el talento.",
								button: "Ver más",
								link: "/fundamentos",
							},
							{
								title: "Iniciación",
								description:
									"Curso de iniciación para la adecuación cultural y técnica concerniente al emprendedurismo de categoría emergente.",
								button: "Ver más",
								link: "/iniciacion",
							},
						]}
					/>
				</div>
			</modalContext.Provider>
		</colorContext.Provider>
	);
}
