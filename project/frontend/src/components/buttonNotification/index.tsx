import "./style.scss";

import notify from "../../assets/notify.png";
import { IButtonProps } from "./types";
import { useSMS } from "../../provider/smsProvider";

export const ButtonNotification = ({id}: IButtonProps) => {
	const { sendSMS } = useSMS()

	const handleSaleId = (id: number) => {
		// setSaleId(saleId)
	}
	return (
		<div className="button-div">
			<button className="button-div button" onClick={() => sendSMS(id)}>
				<img src={notify} alt="botão para enviar notificação" />
			</button>
		</div>
	);
};
