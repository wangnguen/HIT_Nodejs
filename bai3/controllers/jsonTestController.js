const jsonTestPage = (req, res) => {
	res.render("pages/jsontest/index", {
		title: "JsonTestPage",
		object: {
			name: "Quang",
			age: "20",
		},
	});
};

module.exports = { jsonTestPage };
