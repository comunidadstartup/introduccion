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

export default class InitI extends Component {
	render() {
		return (
			<Dynamic classes="full" variant="primary" animate="showup">
				<Swiper
					pagination={{
						clickable: true,
					}}
					className="swiper-x"
					slidesPerView={1}
					navigation={true}
					keyboard={true}
					hashNavigation={{
						replaceState: true,
						watchState: true,
					}}
				>
					<SwiperSlide>
						<span style={{ marginBottom: "1rem" }} className="h4 w-full">
							Primero, todo gran cambio comienza con un cambio de cultura.
						</span>
						<span className="h5 w-full">Es decir, de mentalidad.</span>
					</SwiperSlide>
					<SwiperSlide className="bg-rojo-200 dark:bg-rojo-oscuro-200 py-20">
						<span
							style={{ marginBottom: "2rem", fontWeight: "500" }}
							className="h5"
						>
							Por ende, iniciaremos con una reflexión sobre la ambición, lo que
							conlleva a la innovación, lo que es el mercado, sobre la
							naturaleza del comercio, el ingenio, y entre otras
						</span>
						<span style={{ textAlign: "right" }} className="h3">
							para adecuar la mentalidad correcta frente al emprendedurismo y a
							la innovación
						</span>
					</SwiperSlide>
				</Swiper>
			</Dynamic>
		);
	}
}
