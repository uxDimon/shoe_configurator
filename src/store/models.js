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
						hex: "#BA68C8",
						positionColor: {
							inside_labelLogo: "#fff",
							inside_label: "#8E24AA",
							inside_sideBot: "#AB47BC",
							inside_sideTop: "#AB47BC",
						},
					},
					lightBlue: {
						name: "Светлоголубой",
						hex: "#4FC3F7",
						positionColor: {
							inside_labelLogo: "#01579B",
							inside_label: "#039BE5",
						},
					},
				},
			},
			viewingAngles: {
				left: {
					body: {
						url: require("./models/shoeModel0/left/left__body.webp"),
						position: {
							body_main: "-1800px 0",
							body_grid: "-900px 0",
							body_top: "0 0",
						},
					},
					inside: {
						url: require("./models/shoeModel0/left/left__inside.webp"),
						position: {
							inside_sideBot: "-2700px 0",
							inside_sideTop: "-1800px 0",
							inside_tongue: "-900px 0",
							inside_label: "0 0",
						},
					},
				},
				anfledView: {
					body: {
						url: require("./models/shoeModel0/anfledView/anfledView__body.webp"),
						position: {
							body_main: "-1800px 0",
							body_grid: "-900px 0",
							body_top: "0 0",
						},
					},
					inside: {
						url: require("./models/shoeModel0/anfledView/anfledView__inside.webp"),
						position: {
							inside_sideBot: "-3600px 0",
							inside_sideTop: "-2700px 0",
							inside_tongue: "-1800px 0",
							inside_label: "-900px 0",
							inside_labelLogo: "0 0",
						},
					},
				},
			},
		},
	},
};
