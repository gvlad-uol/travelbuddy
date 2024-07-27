import 'reflect-metadata';
import { app } from './app';
import { myDataSource } from './app-data-source';

const PORT: number | string = process.env.PORT || 3001;

// Validate environment variables
if (!process.env.JWT_KEY) {
    throw new Error("You forget to define JWT_KEY environment variable");
}

// Establish database connection
const initializeDatabase = async () => {
    try {
        console.log("Connecting to the MYSQL DB...");
        await myDataSource.initialize();
        console.log("Data Source has been initialized!");
    } catch (error) {
        console.error("Error during Data Source initialization:", error);
        process.exit(1); // Exit the process with failure
    }
};

// Start the server
const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
};

// Main function to start the application
const start = async () => {
    console.log("Starting application...");

    await initializeDatabase();
    startServer();
};

// Running the starting function
start().catch(error => {
    console.error("Error during application startup:", error);
    process.exit(1); // Exit the process with failure
});
