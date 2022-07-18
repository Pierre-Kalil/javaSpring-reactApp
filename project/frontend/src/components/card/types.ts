interface ISales {
	id: number;
	amount: number;
	date: string;
	deals: number;
	sellerName: string;
	visited: number;
}
export interface Idata {
	data: ISales[];
}
