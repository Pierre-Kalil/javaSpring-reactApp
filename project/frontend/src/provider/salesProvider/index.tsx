import { createContext, useContext, useEffect, useState } from "react";
import { IProviderChildrenProps } from "..";
import api from "../../services/api";
import { ISales, ISalesProvider } from "./types";

const SalesContext = createContext<ISalesProvider>({} as ISalesProvider);

export const SalesProvider = ({ children }: IProviderChildrenProps) => {
	const [sales, setSales] = useState<ISales[]>([]);

	const min: any = new Date().setDate(new Date().getDate() - 365);
	const max: Date = new Date();
	const [minDate, setMinDate] = useState(min);
	const [maxDate, setMaxDate] = useState(max);

	const getAllSales = () => {
		const minFormat = new Date(minDate).toISOString().slice(0, 10);
		const maxFormat = maxDate.toISOString().slice(0, 10);

		api
			.get(`/sales?minDate=${minFormat}&maxDate=${maxFormat}`)
			.then((res) => {
				setSales(res.data.content);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<SalesContext.Provider
			value={{
				getAllSales,
				sales,
				minDate,
				setMinDate,
				maxDate,
				setMaxDate,
			}}
		>
			{children}
		</SalesContext.Provider>
	);
};

export const useSales = () => useContext(SalesContext);
