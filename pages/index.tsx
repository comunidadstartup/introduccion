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

export default function index() {
	const [mode, setMode] = useState<"light" | "dark">("dark");
	const [modal, setModal] = useState<
		{ effect: EffectsType; view: JSX.Element } | undefined
	>(undefined);

	useEffect(() => {
		document.querySelector("html")?.classList.add(mode);
		onScroll();
		animate();
	});

	return (
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
					info={[
						{
							title: "Iniciación",
							description: "Lorem ipsum",
							button: "Ver más",
							link: "/iniciacion",
						},
						{
							title: "Curso",
							description: "Lorem ipsum",
							button: "Ver más",
							link: "/fundamentos",
						},
					]}
				/>
			</div>
		</modalContext.Provider>
	);
}
