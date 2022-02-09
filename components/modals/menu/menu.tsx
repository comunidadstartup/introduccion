import BotonRedondo from "@/components/button/redondo/redondo";
import React, { Component } from "react";
import { ChevronRightIcon as Back } from "@heroicons/react/outline";
import ColorSwitch from "@/components/switch/color/colorSwitch";
import colorContext from "@/components/context/color/colorContext";
import colorMode from "@/components/cookies/colormode/colorMode";

interface Props {
	id: string;
	title: string;
	close: React.MouseEventHandler;
	options: Array<{ key: string; value: string }>;
}

interface State {}

export default class MenuModal extends Component<Props, State> {
	static contextType = colorContext;
	context: React.ContextType<typeof colorContext>;

	render() {
		const { id } = this.props;
		const { get, set } = this.context;
		return (
			<div
				id={`${id}-menu`}
				className={
					"flex flex-col items-start justify-star w-full md:min-w-[375px] md:w-2/6 h-full md:rounded-xl shadow-md bg-rojo-200 dark:bg-rojo-oscuro-200"
				}
			>
				<div
					className={
						"flex flex-row items-center justify-between w-full h-auto px-10 pt-10 pb-5"
					}
				>
					<div className={"h6 w-auto h-auto text-white"}>
						{this.props.title}
					</div>
					<div className={"w-auto h-auto"}>
						<BotonRedondo svg="stroke" variant="primary" onClick={this.props.close}>
							<Back />
						</BotonRedondo>
					</div>
				</div>
				<div
					className={
						"flex flex-col items-start justify-start w-full h-auto px-10"
					}
				>
					{this.props.options.map((i) => (
						<MenuItem value={i.key} href={i.value} />
					))}
					<ColorSwitch
						mode={get}
						onClick={() => colorMode(set)}
					/>
				</div>
			</div>
		);
	}
}
MenuModal.contextType = colorContext;

interface miProps {
	value: string;
	href: string;
}

interface miState {}

export class MenuItem extends Component<miProps, miState> {
	render() {
		return (
			<a
				href={this.props.href}
				className={
					"flex flex-row items-center justify-start w-full h-10 px-3 bg-white/20 hover:bg-white/30 text-white rounded-md mb-2 last:mb-0 transition-all"
				}
			>
				{this.props.value}
			</a>
		);
	}
}
