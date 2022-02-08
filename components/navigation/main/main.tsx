/* This example requires Tailwind CSS v2.0+ */
import React, { Component } from "react";

import styles from "./main.module.scss";

import dynamicBar from "@/components/functions/dynamicbar/dynamicbar";
import modalContext from "@/components/context/modal/modalContext";
import BotonRedondo from "@/components/button/redondo/redondo";
import { MenuIcon as Menu } from "@heroicons/react/outline";
import { toggle } from "@/components/blocks/modal/modal";
import MenuModal from "@/components/modals/menu/menu";
import Logo from "../../../public/media/logolight.svg";

export default class MainNav extends Component {
	static contextType = modalContext;
	context: React.ContextType<typeof modalContext>;

	componentDidMount() {
		dynamicBar("#mainav", 20);
	}

	classNames(...classes: string[]) {
		return classes.filter(Boolean).join(" ");
	}

	render() {
		return (
			<div
				id="mainav"
				className={
					"fixed top-0 left-0 z-[99] flex flex-row items-center justify-between max-w-7xl w-full py-3 px-6 transition-all bg-gray-200/20 backdrop-blur-md"
				}
			>
				<a
					href="/"
					className={["flex items-center justify-center", styles.icon].join(
						" "
					)}
				>
					<Logo />
				</a>
				<BotonRedondo
					variant="primary"
					onClick={() =>
						this.context.set(
							"slideleft",
							<MenuModal
								id="mainmenu"
								title="Menu"
								close={() => {
									toggle(false, "slideleft");
									setTimeout(() => {
										this.context.set(undefined);
									}, 500);
								}}
								options={[
									{
										key: "Inicio",
										value: "/",
									},
									{
										key: "Fundamentos",
										value: "/fundamentos",
									},
									{
										key: "Dinámica",
										value: "/dinamica",
									},
								]}
							></MenuModal>
						)
					}
				>
					<Menu />
				</BotonRedondo>
			</div>
		);
	}
}

MainNav.contextType = modalContext;
