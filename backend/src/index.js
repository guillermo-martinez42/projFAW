const app = require('./config/config');
require('./app/saludo')(app);
const port = 3000;

app.listen(port, (() => console.log(`Server ejcutandose en puerto ${port} y en localhost`)));