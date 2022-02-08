import React, { Component } from "react";

import { XIcon as Close } from "@heroicons/react/outline";

import { capitalize } from "lodash";

import BotonRedondo from "@/components/button/redondo/redondo";

interface Props {
	id: string;
	title: string;
	description: string;
	social: {
		facebook: string;
		whatsapp: string;
		clubhouse: string;
		discord: string;
		twitter: string;
	};
	close: React.MouseEventHandler;
}

interface State {}

export default class LinkModal extends Component<Props, State> {
	componentDidMount() {
		document.body.style.overflow = "hidden";
	}

	componentWillUnmount() {
		document.body.style.overflow = "auto";
	}

	render() {
		const { id, title, description, social } = this.props;
		return (
			<div
				id={`${id}-modal`}
				className={
					"flex flex-col items-center justify-start sm:justify-between w-full sm:w-3/4 md:w-3/6 md:min-w-[460px] h-full sm:h-auto sm:rounded-xl shadow-md bg-leche dark:bg-leche-oscura"
				}
			>
				<div className="flex flex-col w-full h-auto">
					<div
						className={
							"flex flex-row items-center justify-between w-full h-auto px-10 pt-10 pb-3"
						}
					>
						<span className={"w-auto h-auto h6 text-rojo-200 dark:text-white"}>
							{title}
						</span>
						<div style={{ flex: "0 0 auto" }} className={"w-auto h-auto"}>
							<BotonRedondo variant="primary" onClick={this.props.close}>
								<Close />
							</BotonRedondo>
						</div>
					</div>
					<span className="p flex items-start justify-start w-full h-auto px-10 text-texto-200 dark:text-white">
						{description}
					</span>
				</div>
				<div
					className={
						"flex flex-col items-center justify-center w-full h-auto overflow-y-auto px-10 pb-10 pt-5"
					}
				>
					{Object.keys(social).map((i) => {
						return (
							<Item
								icon={capitalize(i) as ItemProps["icon"]}
								value={capitalize(i)}
								link={social[i]}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

interface ItemProps {
	icon: "Facebook" | "Whatsapp" | "Discord" | "Clubhouse" | "Twitter";
	value: string;
	link: string;
}

interface ItemState {}

class Item extends Component<ItemProps, ItemState> {
	icon = {
		Facebook: "/media/facebook.png",
		Whatsapp: "/media/whatsapp.png",
		Discord: "/media/discord.png",
		Clubhouse: "/media/clubhouse.png",
		Twitter: "/media/twitter.png",
	};

	render() {
		return (
			<div
				className={
					"flex flex-row items-center justify-between w-full h-10 bg-white  text-white rounded-md mb-3 last:mb-0 border dark:border-0 border-solid border-detalle "
				}
			>
				<div className={"flex flex-row items-center justify-start"}>
					<img
						className="w-10 h-auto rounded-l-md mr-2"
						src={`${this.icon[this.props.icon]}`}
					/>
					<span className={"text-texto-200"}>{this.props.value}</span>
				</div>
				<div className={"w-auto h-full"}>
					<a
						className="flex flex-row items-center justify-center w-auto h-full bg-rojo-200 text-white opacity-80 hover:opacity-100 transition-all px-4 rounded-r-md mb-3 last:mb-0"
						href={`https://${this.props.link}`}
					>
						Unirme
					</a>
				</div>
			</div>
		);
	}
}
