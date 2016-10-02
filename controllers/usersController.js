module.exports = {
	
	helloWorld: function(req, res) {

		res.render('index', { title: 'Hello, I am here' });
		
	}

};
