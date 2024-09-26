import { CServer } from './CServer';

const PORT = process.env.PORT || 3001;

let server = new CServer().app;

server.listen( PORT, () => {
    console.log( `Server is running on port ${PORT}. http://localhost:${PORT}`);
} );