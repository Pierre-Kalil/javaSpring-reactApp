import { Card } from "../card";
import "./style.scss";

export const ModalSale = () => {
	const data = [
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
	];
	return (
		<>
			<section className="modalSale">
				<div className="modalSale header-inputs">
					<h2>Vendas</h2>
					<input placeholder="01/02/2022" />
					<input placeholder="28/02/2022" />
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
				<Card data={data} />
			</section>
		</>
	);
};
