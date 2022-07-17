import { createContext, useContext, useState } from "react";
import { IProviderChildrenProps } from "..";
import api from "../../services/api";
import { ISales, ISalesProvider } from "./types";

const SalesContext = createContext<ISalesProvider>({} as ISalesProvider);

export const SalesProvider = ({ children }: IProviderChildrenProps) => {
	const [sales, setSales] = useState<ISales[]>([]);

	const getAllSales = () => {
		api
			.get("/sales")
			.then((res) => {
				console.log(res.data.content);
        setSales(res.data.content)
			})
			.catch((err) => {
				console.log(err);
			});
	};

  return (
    <SalesContext.Provider value={{getAllSales, sales}}>
      {children}
    </SalesContext.Provider>
  )
};

export const useSales = () => useContext(SalesContext)
