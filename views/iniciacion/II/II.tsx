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

export default class InitII extends Component {
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
							Segundo a la cultura es la consciencia. El emprendedurismo es una
							actitud consecuencia de otras buenas actitudes.
						</span>
					</SwiperSlide>
					<SwiperSlide className="bg-rojo-200 dark:bg-rojo-oscuro-200 py-20">
						<span className="h5">
							Es por eso que nos dedicaremos a observar hábitos y costumbres
							constructivas tanto físicas como mentales para estimular el
							crecimiento personal y sobrellevar muchas de las vicisitudes que a
							los emprendedores nos son comunes
						</span>
					</SwiperSlide>
				</Swiper>
			</Dynamic>
		);
	}
}
