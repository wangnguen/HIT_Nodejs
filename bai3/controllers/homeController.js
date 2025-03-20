const homePage = (req, res) => {
	res.render("pages/home/index", {
		title: "Homepage",
		message: "Server Express.js",
	});
};

module.exports = {
	homePage,
};
