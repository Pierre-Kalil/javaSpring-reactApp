import "./style.scss";
import notify from "../../assets/notify.png";

export const ButtonNotification = () => {
	return (
		<div className="button-div">
			<button className="button-div button ">
				<img src={notify} alt="botão para enviar notificação" />
			</button>
		</div>
	);
};
