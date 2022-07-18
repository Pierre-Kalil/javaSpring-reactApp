import { ReactNode } from "react";
import { SalesProvider } from "./salesProvider";
import { SMSProvider } from "./smsProvider";

export interface IProviderChildrenProps {
	children: ReactNode;
}

export const Providers = ({ children }: IProviderChildrenProps) => {
	return (
		<>
			<SalesProvider>
				<SMSProvider>{children}</SMSProvider>
			</SalesProvider>
		</>
	);
};
