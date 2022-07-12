import "./style.scss";
import notify from "../../assets/notify.png";
import { Idata } from "./types";

export const Card = ({ data }: Idata) => {
	return (
		<section className="card">
			<ul className="card ul-sales">
				{data &&
					data.map((item, index) => (
						<div key={index} className="card ul-sales info">
							<span className="card ul-sales title desk">{item?.ID}</span>
							<span className="card ul-sales title tab">{item?.data}</span>
							<span className="card ul-sales title">{item?.vendedor}</span>
							<span className="card ul-sales title desk">{item?.visitas}</span>
							<span className="card ul-sales title desk">{item?.vendas}</span>
							<span className="card ul-sales title">{item?.total}</span>
							<span className="card ul-sales title">
								<img src={notify} alt="icone de notificão" />
							</span>
						</div>
					))}
			</ul>
		</section>
	);
};
