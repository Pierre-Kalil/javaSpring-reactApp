export interface ISales {
		id: string;
		amount: number;
		date: string;
		deals: number;
		sellerName: string;
		visited: number;
}

export interface ISalesProvider {
	getAllSales: () => void
  sales: ISales[]
}
