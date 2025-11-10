# 🧮 Fin Pilot

**Fin Pilot** is a TypeScript-based project designed to implement financial calculators using **object-oriented programming (OOP)** principles.  
The first module focuses on a **compound interest calculator**, and the project is designed to be easily extended with other financial tools in the future.

---

## 🎯 Project Purpose

This repository serves as a learning and experimentation platform for:

- Practicing **TypeScript** and solid **OOP architecture**
- Building **unit tests** and **test automation**
- Exploring **API design** and backend service organization**
- Experimenting with **Docker**, **CI/CD**, and other modern development tools

---

## 🚧 Project Status

The project is currently under development.  
Core architecture, calculator logic, and API endpoints are being implemented.

---

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tghcastro/fin-pilot.git
   cd fin-pilot
   ```

2. Install Backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install Backend dependencies:
   ```bash
   cd fin-pilot-web
   npm install
   ```



---

## 🏗️ Project Architecture

The project is organized into two main modules:

```
fin-pilot/
├── tools/ ← Tools to support this application development and experimentation
├── backend/ ← TypeScript-based API and business logic
└── web/ ← React + TypeScript frontend application
```

This structure separates the **API layer** (responsible for financial calculations and data handling) from the **frontend layer** (responsible for user interaction and visualization).  

Although keeping both modules in the same repository is **not an ideal production setup** — since each could be versioned and deployed independently — it was done **intentionally** in this project to make it easier to **run, test, and experiment locally** with both the backend and frontend working together.

## Backend

TypeScript Express API powering financial calculators.

### 🚀 Running the API

Start the API server:

```bash
npm start
```

The server runs at:

```
http://localhost:3000
```

---

### 🧮 Example Request

**POST /api/compound-interest**

```bash
curl --request POST \
  --url http://localhost:3000/api/compound-interest \
  --header 'content-type: application/json' \
  --data '{
  "principal": 1000,
  "annualRate": 0.1,
  "monthlyDeposit": "1000",
  "periods": 1
}'
```

**Example Response**
```json
{
  "finalAmount": 1795.8563260221301,
  "interest": 795.8563260221301
}
```

---

### 🧪 Testing

Run unit tests:
```bash
npm test
```

Run tests with coverage:
```bash
npm test -- --coverage
```

---

## Web

TypeScript React application which consumes the Backend API

### 🚀 Running the Application

> 💡 **Info:**  
> Before running the Web Application run Backend service first


Start the API server:

```bash
npm run dev
```

The server runs at:

```
http://localhost:5173/
```

---

## 🧭 Future Goals

- Implement additional financial calculators (e.g., loan, mortgage, savings)
- Add validation middleware and error handling
- Integrate **CI/CD pipelines** with Docker and automated tests

---

> _Fin Pilot — guiding your journey through code, tests, and financial logic._
