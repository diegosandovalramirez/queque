const {Client} = require('pg')

// const client = new Client({
// 	host: "ec2-34-197-105-186.compute-1.amazonaws.com",
// 	user: "rfkvkcbhhipxah",
// 	port: 5432,
// 	password: "c23893fe0cad0a545c864ee39e7ae4fadeea895b69f83d21e5186c6e6d2bc018",
// 	dialect: "postgres",
// 	dialectOptions: {
// 		ssl: {
// 		  require: true, // This will help you. But you will see a new error
// 		  rejectUnauthorized: false // This line will fix new error
// 		}
// 	  },
// })

const client = new Client({
	host: "localhost",
	user: "postgres",
	port: 5432,
	password: "212122121wqwqwwqwq",
	dialect: "postgres",
	dialectOptions: {
		ssl: {
		  require: true, // This will help you. But you will see a new error
		  rejectUnauthorized: false // This line will fix new error
		}
	  },
})

client.connect();

client.query('SET search_path to pern_todo;', (err, res) => {
	console.log(err, res)
	// client.end()
  })

client.query('SELECT * from todos', (err, res) => {
  console.log(err, res)
  client.end()
})

// module.exports = pool
