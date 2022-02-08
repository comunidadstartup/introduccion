import { capitalize } from "lodash";
import React, { Component } from "react";

import { toggle } from "@/components/blocks/modal/modal";
import modalContext from "@/components/context/modal/modalContext";
import LinkModal, { SocialType } from "@/components/modals/links/link";
import BotonRectangular from "@/components/button/rectangular/rectangular";

interface Props {
	title: string;
	description: string;
	link?: string;
	social?: SocialType;
	button?: string;
	type?: "head" | "plain" | "foot" | "social";
}

interface State {}

export default class UneteSlide extends Component<Props, State> {
	static contextType = modalContext;
	context: React.ContextType<typeof modalContext>;

	type(type: Props["type"]) {
		if (type) {
			return type;
		} else {
			return "plain";
		}
	}

	render() {
		const { title, description, button, type, link, social } = this.props;
		return (
			<div
				style={{ minHeight: "200px" }}
				className={[
					"flex flex-col items-center justify-center h-auto w-full",
					this.type(type),
				].join(" ")}
			>
				{/* [styles.slides, styles[this.type(type)]].join(" ")} */}
				<div className={"w-full h-full top "}>
					<h4>{title}</h4>
					<p>{description}</p>
				</div>
				<div className="w-full h-full bottom">
					{button && social ? (
						<BotonRectangular
							title={button}
							variant="primary"
							onClick={() =>
								this.context.set(
									"appear",
									<LinkModal
										id="enlaces"
										title="Enlaces"
										description="Únete a la comunidad"
										social={social}
										close={() => {
											toggle(false, "appear");
											setTimeout(() => {
												this.context.set(undefined);
											}, 500);
										}}
									/>
								)
							}
						/>
					) : button && link ? (
						<BotonRectangular link={link} title={button} variant="primary" />
					) : (
						<></>
					)}
				</div>
			</div>
		);
	}
}

UneteSlide.contextType = modalContext;
