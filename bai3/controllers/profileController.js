const profilePage = (req, res) => {
	res.render("pages/profile/index", {
		name: "Quang Nguyen",
		age: 20,
	});
};
module.exports = { profilePage };
