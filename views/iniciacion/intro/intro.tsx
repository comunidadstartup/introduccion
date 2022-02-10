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
				<span
					style={{ marginBottom: "4rem", lineHeight: "3.5rem" }}
					className="h3 w-full"
				>
					Una incubadora empeñada en instruir el conocimiento y las habilidades
					necesarias para crecer, mas no en dirigirte en qué y cómo crecer.
				</span>
				<span className="h5 w-full">
					Nadie te debe enseñar el qué ni el cómo, sino el con qué.
				</span>
				<span className="h5 w-full">Eso te toca a vos.</span>
			</Dynamic>
		);
	}
}
