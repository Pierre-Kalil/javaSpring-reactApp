import "./style.scss";

import { Idata } from "./types";

import { ButtonNotification } from "../buttonNotification";

export const Card = ({ data }: Idata) => {
	return (
		<section className="card">
			<ul className="card ul-sales">
				{data &&
					data.map((sale, index) => (
						<div key={index} className="card ul-sales info">
							<span className="card ul-sales title desk">{sale?.id}</span>
							<span className="card ul-sales title tab">{new Date(sale?.date).toLocaleDateString()}</span>
							<span className="card ul-sales title">{sale?.sellerName}</span>
							<span className="card ul-sales title desk">{sale?.visited}</span>
							<span className="card ul-sales title desk">{sale?.deals}</span>
							<span className="card ul-sales title">{sale?.amount.toFixed(2)}</span>
							<span className="card ul-sales title">
								<ButtonNotification id={sale.id} />
							</span>
						</div>
					))}
			</ul>
		</section>
	);
};
