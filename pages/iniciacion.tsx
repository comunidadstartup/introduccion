import ModalContainer, { EffectsType } from "@/components/blocks/modal/modal";
import colorContext from "@/components/context/color/colorContext";
import modalContext from "@/components/context/modal/modalContext";
import { classer } from "@/components/cookies/colormode/colorMode";
import animate from "@/components/functions/onscroll/animate/animate";
import onScroll from "@/components/functions/onscroll/onscroll";
import { SocialType } from "@/components/modals/links/link";
import MainNav from "@/components/navigation/main/main";
import { NextPageContext } from "next";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import InitHeader from "views/iniciacion/header/header";
import InitI from "views/iniciacion/I/I";
import InitII from "views/iniciacion/II/II";
import InitIII from "views/iniciacion/III/III";
import InitIntro from "views/iniciacion/intro/intro";
import InitIV from "views/iniciacion/IV/IV";
import Conocenos from "views/shared/conocenos/conocenos";

export default function index({ social }) {
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
				<Head>
					<title>CS | Iniciación</title>
					<meta
						name="description"
						content="Mentoría y curso de iniciación para la adecuación cultural y técnica concerniente al emprendedurismo de categoría emergente."
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
					<InitHeader />
					<InitIntro />
					<InitI />
					<InitII />
					<InitIII />
					<InitIV />
					<Conocenos
						title="Conocé más"
						social={social}
						info={[
							{
								title: "Comunidad Startup",
								description: "Una startup para startups y por el desarrollo de las startups. Nuestro éxito es el éxito de vuestra startup",
								button: "Ver más",
								link: "/",
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
