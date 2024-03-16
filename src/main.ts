import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as express from "express";

async function bootstrap() {
  // Create a Nest.js application instance
  const app = await NestFactory.create(AppModule);

  // Enable Cross-Origin Resource Sharing (CORS)
  app.enableCors();

  // Configure express middleware to handle JSON and URL-encoded data with increased size limits
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // Configure Swagger (OpenAPI) documentation options
  const options = new DocumentBuilder()
    .setTitle("Golfi API")
    .setDescription("Golfi API")
    .addBearerAuth()
    .setVersion("1.0")
    .addTag("API")
    .build();

  // Create Swagger (OpenAPI) documentation
  const document = SwaggerModule.createDocument(app, options);

  // Set up Swagger (OpenAPI) documentation endpoint at "/api/docs"
  SwaggerModule.setup("api/docs", app, document);

  // Start the Nest.js application on port 3000
  await app.listen(3000);
}

// Bootstrap the application
bootstrap();
