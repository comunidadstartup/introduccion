import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
	Pagination,
	Navigation,
	Mousewheel,
	Keyboard,
} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Dynamic from "@/components/blocks/dynamic/dynamic";

export default class InitIntro extends Component {
	render() {
		return (
			<Dynamic variant="primary" animate="showup">
				<span style={{ marginBottom: "4rem" }} className="h3 w-full">
					Una incubadora libre de opinion, empeñada en instruir el conocimiento
					y las habilidades necesarias para crecer.
				</span>
				<span className="h5 w-full">
					Nadie te puede enseñar como lograr algo, sino con que lograrlo.
				</span>
			</Dynamic>
		);
	}
}
