let express = require('express');
let mongoose = require('mongoose');
var bodyparser = require('body-parser');
let app = express();
var productsRouter = require('./routes/product');
let empRequestRouter = require('./routes/empRequest.route');
let userRouter = require('./routes/userRouter');
var adminRouter = require('./routes/admin');
var employeeRouter = require("./routes/employeeRouter");
let orderRouter = require('./routes/order');

var cors = require('cors');
app.use(bodyparser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
	.connect(
		'mongodb+srv://group11:1234@grocers.uctlk.mongodb.net/Grocers?retryWrites=true&w=majority',
		{
			useUnifiedTopology: true,
			useNewUrlParser: true,
		}
	)
	.then(() => {
		console.log('Connected to Database');
	})
	.catch((error) => {
		console.log(error);
	});

app.use("/products", productsRouter);
app.use("/admin", adminRouter);
app.use("/request", empRequestRouter);
app.use("/order", orderRouter);
app.use("/employee", employeeRouter);
app.use("/user",userRouter);


app.listen(5000, () => {
	console.log('Listening on port 5000');
});

module.exports = app;
