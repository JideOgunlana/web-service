import express from 'express';
import { logLevelRouter, healthRouter } from './api/routes';
import { addTimestamp, serverErrorHandler, payloadErrorHandler } from './api/middlewares';



const app = express();
const port = 3000;

app.use(express.json());
app.use(payloadErrorHandler);
app.use(addTimestamp);

async function startServer() {
    try {
        app.use('/health', healthRouter);
        app.use('/log-level', logLevelRouter);

        app.use(serverErrorHandler);

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
}

startServer();