
import express from "express";

import { compoundInterestRouter } from "./routes/compound_interest.route";

const app = express();

app.use(express.json());
app.use("/api/compound-interest", compoundInterestRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Fin Pilot API running on http://localhost:${port}`));

export default app;
