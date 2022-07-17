import "./style.scss";

import { Card } from "../card";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useEffect } from "react";
import { useSales } from "../../provider/salesProvider";

export const ModalSale = () => {
	const { sales, getAllSales, minDate, setMinDate, maxDate, setMaxDate } =
		useSales();

	useEffect(() => {
		getAllSales();
	}, [minDate, maxDate]);

	return (
		<>
			<section className="modalSale">
				<div className="modalSale header-inputs">
					<h2>Vendas</h2>
					<DatePicker
						selected={minDate}
						onChange={(date: Date) => setMinDate(date)}
						className="dsmeta-form-control"
						dateFormat="dd/MM/yyyy"
					/>
					<DatePicker
						selected={maxDate}
						onChange={(date: Date) => setMaxDate(date)}
						className="dsmeta-form-control"
						dateFormat="dd/MM/yyyy"
					/>
				</div>
				<div className="modalSale header-scouts">
					<span className="modalSale header-scouts-titles desk">ID</span>
					<span className="modalSale header-scouts-titles tab">Data</span>
					<span className="modalSale header-scouts-titles">Vendedor</span>
					<span className="modalSale header-scouts-titles desk">Visitas</span>
					<span className="modalSale header-scouts-titles desk">Vendas</span>
					<span className="modalSale header-scouts-titles">Total</span>
					<span className="modalSale header-scouts-titles">Notificar</span>
				</div>
				<div className="modalSale card-sales">
					<Card data={sales} />
				</div>
			</section>
		</>
	);
};
