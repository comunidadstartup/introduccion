import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

interface Props {
	items: Array<string>;
}

interface State {}

export default class SimpleCardCarousel extends Component<Props, State> {
	render() {
		const { items } = this.props;
		return (
			<Swiper
				slidesPerView={"auto"}
				navigation={true}
				modules={[Navigation]}
				className="swiper-conocenos"
			>
				{items.map((i, x) => (
					<SwiperSlide key={x} className="p-10 mr-10">
						<p className="text-xl">{i}</p>
					</SwiperSlide>
				))}
			</Swiper>
		);
	}
}
