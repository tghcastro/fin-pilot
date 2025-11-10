import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";

interface InterestSchedule {
  month: number;
  monthlyInterest: number;
  totalInvested: number;
  totalInterest: number;
  totalBalance: number;
}

interface ApiResponse {
  finalAmount: number;
  totalInvested: number;
  totalInterest: number;
  annualRate: number;
  monthlyRate: number;
  interestSchedule: InterestSchedule[];
}

const formatNumber = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

export default function CompoundInterestSimulator() {
  const [principal, setPrincipal] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [monthlyDeposit, setMonthlyDeposit] = useState("");
  const [periods, setPeriods] = useState("");
  const [result, setResult] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        "http://localhost:3000/api/compound-interest",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            principal: Number(principal),
            annualRate: Number(annualRate),
            monthlyDeposit: Number(monthlyDeposit),
            periods: Number(periods),
          }),
        }
      );

      if (!response.ok) throw new Error("API request failed");
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch API result.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setPrincipal("");
    setAnnualRate("");
    setMonthlyDeposit("");
    setPeriods("");
    setResult(null);
  };

  return (
    <div className="container">
      <h1>Compound Interest Simulator</h1>
        {/* 🔙 Back Link */}
        <div className="mb-6 text-left">
          <Link
            to="/"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            ← Back to Home
          </Link>
        </div>


      <form onSubmit={handleSubmit}>
        <label>
          Principal ($)
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            required
          />
        </label>

        <label>
          Annual Rate (e.g. 0.1)
          <input
            type="number"
            step="0.01"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            required
          />
        </label>

        <label>
          Monthly Deposit ($)
          <input
            type="number"
            value={monthlyDeposit}
            onChange={(e) => setMonthlyDeposit(e.target.value)}
            required
          />
        </label>

        <label>
          Periods (years)
          <input
            type="number"
            value={periods}
            onChange={(e) => setPeriods(e.target.value)}
            required
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Calculating..." : "Calculate"}
        </button>

        <button
          type="button"
          onClick={handleClear}
          className="flex-1 bg-gray-300 text-gray-800 rounded-lg py-2 font-semibold hover:bg-gray-400 transition">
          Clear
        </button>
      </form>

      {result && (
        <>
          <h2>Results</h2>
          <p>
            <b>Final Amount:</b> ${formatNumber(result.finalAmount)}
          </p>
          <p>
            <b>Total Invested:</b> ${formatNumber(result.totalInvested)}
          </p>
          <p>
            <b>Total Interest:</b> ${formatNumber(result.totalInterest)}
          </p>

          <h3>Monthly Breakdown</h3>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Interest</th>
                <th>Invested</th>
                <th>Total Interest</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {result.interestSchedule.map((m) => (
                <tr key={m.month}>
                  <td>{m.month}</td>
                  <td>{formatNumber(m.monthlyInterest)}</td>
                  <td>{formatNumber(m.totalInvested)}</td>
                  <td>{formatNumber(m.totalInterest)}</td>
                  <td>{formatNumber(m.totalBalance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
