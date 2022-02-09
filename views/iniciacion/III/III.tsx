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

export default class InitIII extends Component {
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
							Tercero es la acción. A la palabra se le suman palabras, a la
							acción acciones.
						</span>
					</SwiperSlide>
					<SwiperSlide className="bg-rojo-200 dark:bg-rojo-oscuro-200 py-20">
						<span className="h5">
							Un emprendedor debe tener las capacidades de ejecutar sus ideas.
							Por esto, iniciaremos a los emprendedores con el conocimiento
							técnico esencial para comenzar a ejecutar e idealmente llevar a
							cabo las metas que nos encargamos.
						</span>
					</SwiperSlide>
				</Swiper>
			</Dynamic>
		);
	}
}
