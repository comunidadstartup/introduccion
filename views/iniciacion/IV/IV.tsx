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

export default class InitIV extends Component {
	render() {
		return (
			<Dynamic variant="primary" animate="showup">
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
							Por último, la experiencia. La diligencia es madre de la buena
							aventura.
						</span>
					</SwiperSlide>
					<SwiperSlide className="bg-rojo-200 dark:bg-rojo-oscuro-200">
						<span
							style={{ marginBottom: "2rem", lineHeight: "3rem" }}
							className="h5"
						>
							Por eso compartiremos un compendio de errores que hemos cometido,
							las acciones que más nos han favorecido, las herramientas que más
							nos han facilitado el camino, y sin limitarnos, guías para lograr
							metas realizadas.
						</span>
						<span style={{ textAlign: "right" }} className="h3 w-full">
							La comunidad aquí aporta el valor.
						</span>
					</SwiperSlide>
				</Swiper>
			</Dynamic>
		);
	}
}
