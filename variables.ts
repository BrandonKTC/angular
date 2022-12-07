interface Account {
	name: string;
	balance: number;
	status?: string;

	deposits?: () => void;
}

const account: Account = {
	name: "Luis",
	balance: 10,
};
