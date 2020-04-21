export default {
	state: {
		shoeModel0: {
			name: "Название модели0",
			colors: {
				body: {
					read: {
						name: "Красный",
						hex: "#e53935",
					},
					blue: {
						name: "Синий",
						hex: "#1E88E5",
					},
					green: {
						name: "Зеленый",
						hex: "#43A047",
					},
				},
				inside: {
					pinc: {
						name: "Розовый",
						hex: "#E91E63",
					},
					purple: {
						name: "Пурпурный",
						hex: "#9C27B0",
					},
				},
			},
			viewingAngles: {
				left: {
					body: {
						url: require("./models/shoeModel0/left/left__body.webp"),
						position: {
							top: "0 0",
							grid: "-900px 0",
							main: "-1800px 0",
						},
					},
					inside: {
						url: require("./models/shoeModel0/left/left__inside.webp"),
						position: {
							label: "0 0",
							tongue: "-900px 0",
							sideTop: "-1800px 0",
							sideBot: "-2700px 0",
						},
					},
				},
				anfledView: {
					body: {
						url: require("./models/shoeModel0/anfledView/anfledView__body.webp"),
						position: {
							top: "0 0",
							grid: "-900px 0",
							main: "-1800px 0",
						},
					},
					inside: {
						url: require("./models/shoeModel0/anfledView/anfledView__inside.webp"),
						position: {
							labelLogo: "0 0",
							label: "-900px 0",
							tongue: "-1800px 0",
							sideTop: "-2700px 0",
							sideBot: "-3600px 0",
						},
					},
				},
			},
		},
	},
};
