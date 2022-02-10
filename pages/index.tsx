import React, { useState, useEffect } from "react";
import Head from "next/head";

import ModalContainer, { EffectsType } from "@/components/blocks/modal/modal";
import modalContext from "@/components/context/modal/modalContext";
import animate from "@/components/functions/onscroll/animate/animate";
import onScroll from "@/components/functions/onscroll/onscroll";
import MainNav from "@/components/navigation/main/main";
import colorContext from "@/components/context/color/colorContext";
import colorMode, { classer } from "@/components/cookies/colormode/colorMode";
import { SocialType } from "@/components/modals/links/link";

import InicioHeader from "views/inicio/header/header";
import InicioI from "views/inicio/I";
import InicioII from "views/inicio/II";
import InicioIII from "views/inicio/III";
import InicioIV from "views/inicio/IV";
import Conocenos from "views/shared/conocenos/conocenos";
import { NextPageContext } from "next";

export default function index({ social }) {
	const [mode, setMode] = useState<"light" | "dark">(colorMode());

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
					<title>Comunidad Startup</title>
					<meta
						name="description"
            content="Una startup para startups y por el desarrollo de las startups. Nuestro éxito es el éxito de vuestra startup"
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
					<InicioHeader />
					<InicioI />
					<InicioII />
					<InicioIII />
					<InicioIV />
					<Conocenos
						title="Conocé cómo vos también"
						social={social}
						info={[
							{
								title: "Iniciación",
								description:
									"Mentoría y curso de iniciación para la adecuación cultural y técnica concerniente al emprendedurismo de categoría emergente.",
								button: "Ver más",
								link: "/iniciacion",
							},
							{
								title: "Metodología Cofundar",
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

index.getInitialProps = async ({ req }: NextPageContext) => {
	if (!req) return;
	const res = await fetch(`http://${req.headers.host}/social.json`);
	const social: SocialType = await res.json();
	return { social };
};
