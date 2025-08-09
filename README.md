# Complaint App Server

This is the backend for the Complaint App, built with [NestJS](https://nestjs.com/) and TypeScript.

## Features

- REST API for submitting and viewing complaints
- MongoDB database with Mongoose
- Data validation with class-validator
- Modular structure for easy maintenance
- Unit and e2e tests with Jest

## Project Structure

- `src/app.module.ts` – Main application module
- `src/main.ts` – Entry point
- `src/complaint/` – Complaint feature (controller, service, schema, DTO)
- `test/` – Test files

## Installation

```bash
npm install
```

## Running the Server

```bash
# Development
npm run start

# Watch mode
npm run start:dev

# Production
npm run start:prod
```

The server runs on port `3000` by default. You can set a custom port with the `PORT` environment variable.

## Environment Variables

- `MONGODB_URI` – MongoDB connection string (required)

Create a `.env` file in the root with your variables.

## API Endpoints

- `POST /complaints/submit` – Submit a new complaint (`content`, `category`)
- `GET /complaints` – Get all complaints

## Testing

```bash
# Unit tests
npm run test

# e2e tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## Linting & Formatting

```bash
npm run lint
npm run format
```

## Dependencies

- `@nestjs/common`, `@nestjs/core`, `@nestjs/mongoose`
- `mongoose`
- `class-validator`
- `jest` (testing)
- `eslint`, `prettier` (linting/formatting)

## License

This project is UNLICENSED (see `package.json`).
