import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IProviderChildrenProps } from "..";
import api from "../../services/api";
import { ISaleSMSProvider } from "./types";

const SaleSMSContext = createContext<ISaleSMSProvider>({} as ISaleSMSProvider);

export const SMSProvider = ({ children }: IProviderChildrenProps) => {

	const sendSMS = (id: number) => {
		api
			.get(`/sales/${id}/notification`)
			.then((_) => {
        toast.info("SMS enviado com sucesso")
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<SaleSMSContext.Provider value={{sendSMS}}>
      {children}
    </SaleSMSContext.Provider>
	);
};

export const useSMS = () => useContext(SaleSMSContext);
