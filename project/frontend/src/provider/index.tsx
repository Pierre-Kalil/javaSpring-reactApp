import { ReactNode } from "react";
import { SalesProvider } from "./salesProvider";

export interface IProviderChildrenProps {
	children: ReactNode;
}

export const Providers = ({ children }: IProviderChildrenProps) => {
	return (
		<>
			<SalesProvider>{children}</SalesProvider>
		</>
	);
};
