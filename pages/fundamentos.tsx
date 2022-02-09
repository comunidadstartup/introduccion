import Head from "next/head";
import React, { useState, useEffect } from "react";

import ModalContainer, { EffectsType } from "@/components/blocks/modal/modal";
import colorContext from "@/components/context/color/colorContext";
import modalContext from "@/components/context/modal/modalContext";
import { classer } from "@/components/cookies/colormode/colorMode";
import animate from "@/components/functions/onscroll/animate/animate";
import onScroll from "@/components/functions/onscroll/onscroll";
import MainNav from "@/components/navigation/main/main";

import FundamentosHeader from "views/fundamentos/header/header";
import FundamentosI from "views/fundamentos/I/I";
import FundamentosII from "views/fundamentos/II/II";
import FundamentosIII from "views/fundamentos/III/III";
import FundamentosIV from "views/fundamentos/IV/IV";
import FundamentosV from "views/fundamentos/V/V";
import FundamentosVI from "views/fundamentos/VI/VI";
import FundamentosVII from "views/fundamentos/VII/VII";
import Conocenos from "views/shared/conocenos/conocenos";

export default function index() {
	const [mode, setMode] = useState<"light" | "dark">("light");
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
				<Head>
					<title>CS | Fundamentos</title>
					<meta
						name="description"
						content="Metodología magra basada en el estado de las cosas para fundar iniciativas, cuya fuerza motriz no son el capital, ni los recursos sino el talento."
					/>
					<meta
						name="keywords"
						content="startup, incubadora, Incubación, metodología, desarrollo de startups, Ideas, Iniciativas, MVP, Mentoría"
					/>
				</Head>
				<div className="flex flex-col w-full justify-start items-start h-auto">
					<MainNav />
					{modal ? (
						<ModalContainer effect={modal.effect}>{modal.view}</ModalContainer>
					) : (
						<></>
					)}
					<FundamentosHeader />
					<FundamentosI />
					<FundamentosII />
					<FundamentosIII />
					<FundamentosIV />
					<FundamentosV />
					<FundamentosVI />
					<FundamentosVII />
					<Conocenos
						title="Conocé más"
						info={[
							{
								title: "Iniciación",
								description:
									"Curso de iniciación para la adecuación cultural y técnica concerniente al emprendedurismo de categoría emergente.",
								button: "Ver más",
								link: "/iniciacion",
							},
							{
								title: "Comunidad Startup",
								description:
									"Una startup para startups y por el desarrollo de las startups. Nuestro éxito es el éxito de vuestra startup",
								button: "Ver más",
								link: "/inicio",
							},
							{
								title: "Dinámica",
								description:
									"Proceso fundacional basado en el talento por sobre el capital y los recursos para construir.",
								button: "Ver más",
								link: "/dinamica",
							},
						]}
					/>
				</div>
			</modalContext.Provider>
		</colorContext.Provider>
	);
}
