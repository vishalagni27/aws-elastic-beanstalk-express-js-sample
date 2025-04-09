const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('We have added a review stage with manual approval to our continuous delivery pipeline. Now, our code has successfully changed and changes will have been reviewed and approved before they are deployed to AWS Elastic Beanstalk.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
