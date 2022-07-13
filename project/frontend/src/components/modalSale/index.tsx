import { Card } from "../card";
import "./style.scss";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export const ModalSale = () => {
	const data: any = [
		{
			ID: "1",
			data: "data",
			vendedor: "vendedor",
			visitas: "visitas",
			vendas: "vendas",
			total: "total",
			notificar: "notificar",
		},
		{
			ID: "2",
			data: "data",
			vendedor: "vendedo",
			visitas: "visitas",
			vendas: "vendas",
			total: "total",
			notificar: "notificar",
		},
		{
			ID: "2",
			data: "data",
			vendedor: "vendedo",
			visitas: "visitas",
			vendas: "vendas",
			total: "total",
			notificar: "notificar",
		},
		{
			ID: "2",
			data: "data",
			vendedor: "vendedo",
			visitas: "visitas",
			vendas: "vendas",
			total: "total",
			notificar: "notificar",
		},
		{
			ID: "2",
			data: "data",
			vendedor: "vendedo",
			visitas: "visitas",
			vendas: "vendas",
			total: "total",
			notificar: "notificar",
		},
		{
			ID: "2",
			data: "data",
			vendedor: "vendedo",
			visitas: "visitas",
			vendas: "vendas",
			total: "total",
			notificar: "notificar",
		},
		{
			ID: "2",
			data: "data",
			vendedor: "vendedo",
			visitas: "visitas",
			vendas: "vendas",
			total: "total",
			notificar: "notificar",
		},
		{
			ID: "2",
			data: "data",
			vendedor: "vendedo",
			visitas: "visitas",
			vendas: "vendas",
			total: "total",
			notificar: "notificar",
		},
		{
			ID: "2",
			data: "data",
			vendedor: "vendedo",
			visitas: "visitas",
			vendas: "vendas",
			total: "total",
			notificar: "notificar",
		},
		{
			ID: "2",
			data: "data",
			vendedor: "vendedo",
			visitas: "visitas",
			vendas: "vendas",
			total: "total",
			notificar: "notificar",
		},
	];
	const min: any = new Date().setDate(new Date().getDate() - 365);
	const max: Date = new Date();
	const [minDate, setMinDate] = useState(min);
	const [maxDate, setMaxDate] = useState(max);

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
					<Card data={data} />
				</div>
			</section>
		</>
	);
};
