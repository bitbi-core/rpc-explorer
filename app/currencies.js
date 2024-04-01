global.currencyTypes = {
	"btb": {
		id: "btb",
		type:"native",
		name:"BTB",
		multiplier:1,
		default:true,
		decimalPlaces:9
	},
	"wen": {
		id: "wen",
		type:"native",
		name:"wen",
		multiplier:100000000,
		decimalPlaces:0
	},
	"usd": {
		id: "usd",
		type:"exchanged",
		name:"USD",
		multiplier:"usd",
		decimalPlaces:2,
		symbol:"$"
	},
	"eur": {
		id: "eur",
		type:"exchanged",
		name:"EUR",
		multiplier:"eur",
		decimalPlaces:2,
		symbol:"€"
	},
	"gbp": {
		id: "gbp",
		type:"exchanged",
		name:"GBP",
		multiplier:"gbp",
		decimalPlaces:2,
		symbol:"£"
	},
};

global.currencySymbols = {
	"btb": "₿",
	"usd": "$",
	"eur": "€",
	"gbp": "£"
};