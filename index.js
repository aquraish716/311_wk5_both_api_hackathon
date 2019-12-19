const express = require('express');
const app = express();
const port = process.env.PORT || 4001;


const employeesRouter = require('./routes/employees');
const salaryRouter = require('./routes/salary');
const departmentRouter = require('./routes/department');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/employees', employeesRouter);

app.use('/salary', salaryRouter);

app.use('/departments', departmentRouter);


app.listen(port, () => {
    console.log('app is listening on:', port)
});