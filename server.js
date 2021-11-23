require('dotenv').config() // this line is mandatory when you want to read variables from the '.env' file 

console.log(`I am ${process.env.DB_NAME}, wilder in ${process.env.DB_CITY}, and I love ${process.env.DB_LANGUAGE}.`);
