export interface ISales {
	id: number;
	amount: number;
	date: string;
	deals: number;
	sellerName: string;
	visited: number;
}

export interface ISalesProvider {
	getAllSales: () => void;
	sales: ISales[];
  minDate: any
  setMinDate: React.Dispatch<React.SetStateAction<any>>
  maxDate: Date
  setMaxDate: React.Dispatch<React.SetStateAction<Date>>
}
