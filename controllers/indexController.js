module.exports = {
	
	default: function(req, res) {
		console.log("sss");
		res.render('index', { title: 'Hello Express' });
	}

};
