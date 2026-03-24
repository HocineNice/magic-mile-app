"use client";

import { useMemo, useState } from "react";

type Material = {
  category: string;
  name: string;
  unit: string;
  base: number;
};

const materials: Material[] = [
  { category: "Pole Line Hardware", name: '1/4" EHS Strand - Class A Domestic', unit: "FT", base: 6000 },
  { category: "Aerial Cable Attachment", name: "Type 302 Lashing Wire Lifetime Guarantee", unit: "Rolls", base: 6 },
  { category: "Guying & Pole Stabilization", name: '6" Screw Anchors (3/4" x 66")', unit: "EA", base: 6 },
  { category: "Pole Line Hardware", name: '5/8" x 12" Machine Bolt', unit: "EA", base: 5 },
  { category: "Pole Line Hardware", name: '5/8" x 14" Machine Bolt', unit: "EA", base: 15 },
  { category: "Pole Line Hardware", name: '5/8" x 16" Machine Bolt', unit: "EA", base: 10 },
  { category: "Pole Line Hardware", name: '5/8" x 12" Straight T.E. Bolt', unit: "EA", base: 2 },
  { category: "Pole Line Hardware", name: '5/8" x 14" Straight T.E. Bolt', unit: "EA", base: 4 },
  { category: "Pole Line Hardware", name: '5/8" x 16" Straight T.E. Bolt', unit: "EA", base: 2 },
  { category: "Pole Line Hardware", name: '5/8" Eye nut', unit: "EA", base: 8 },
  { category: "Pole Line Hardware", name: '5/8" Slip EyeNut', unit: "EA", base: 8 },
  { category: "Pole Line Hardware", name: '2" x 2" sq. Washer 11/16" Hole', unit: "EA", base: 100 },
  { category: "Pole Line Hardware", name: '5/8" Square Nut', unit: "EA", base: 50 },
  { category: "Pole Line Hardware", name: "3 Bolt Suspension Clamp", unit: "EA", base: 40 },
  { category: "Pole Line Hardware", name: "3 Bolt Curved (Corner) Suspension Clamp", unit: "EA", base: 5 },
  { category: "Guying & Pole Stabilization", name: "Guy Attachment Strap (Ramshead)", unit: "EA", base: 12 },
  { category: "Pole Line Hardware", name: "Down Guy Clamp (Pig ear)", unit: "EA", base: 12 },
  { category: "Guying & Pole Stabilization", name: "Guy Marker - Yellow - 8 Ft.", unit: "EA", base: 6 },
  { category: "Aerial Cable Attachment", name: '2 PC. Lashing Wire Clamp "D"', unit: "EA", base: 100 },
  { category: "Pole Line Hardware", name: "Q-span Clamp (Pig tail)", unit: "EA", base: 100 },
  { category: "Pole Line Hardware", name: "K - UL Universal Bonding Clamp UL Listed", unit: "EA", base: 20 },
  { category: "Pole Line Hardware", name: '1/4" Preformed Splice, u turn', unit: "EA", base: 5 },
  { category: "Pole Line Hardware", name: '1/4" Preformed Splice - Straight', unit: "EA", base: 5 },
  { category: "Guying & Pole Stabilization", name: '1/4" Guy Grip Deadends', unit: "EA", base: 15 },
  { category: "Separation Hardware", name: '1/2" Plastic Spacer/zip tie', unit: "EA", base: 100 },
  { category: "Grounding & Bonding Materials", name: `5/8" x 8' Copper Ground Rod UL Listed`, unit: "EA", base: 10 },
  { category: "Grounding & Bonding Materials", name: '5/8" Ground Rod Clamp UL Listed', unit: "EA", base: 10 },
  { category: "Grounding & Bonding Materials", name: "6 Ga. Copper Wire Bare", unit: "FT", base: 25200 },
  { category: "Cable Securing Hardware", name: '2" x 5/8" Galvanized Staples', unit: "EA", base: 20 },
  { category: "Cable Protection Hardware", name: `1/2" x 8' Ground Wire Molding`, unit: "EA", base: 54 },
  { category: "Underground Pulling Materials", name: "Line pulling lubricant", unit: "EA", base: 1 },
  { category: "Cable Protection Material", name: "Duct seal putty", unit: "EA", base: 1 },
  { category: "Pulling Supplies", name: "Del Tech heads", unit: "EA", base: 1 },
  { category: "Tape", name: 'Tape 3/4" Black', unit: "EA", base: 1 },
  { category: "Pole Line Hardware", name: "J hook Screw", unit: "EA", base: 1 },
];

export default function Home() {
  const [miles, setMiles] = useState<number>(1);
  const [waste, setWaste] = useState<number>(5);

  const calculateQty = (base: number) => {
    return Math.round(base * miles * (1 + waste / 100));
  };

  const totalLines = materials.length;

  const totalsByUnit = useMemo(() => {
    const totals: Record<string, number> = {};
    for (const item of materials) {
      const qty = calculateQty(item.base);
      totals[item.unit] = (totals[item.unit] || 0) + qty;
    }
    return totals;
  }, [miles, waste]);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
        color: "#111827",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            padding: "24px",
            marginBottom: "20px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "32px" }}>Magic Mile Calculator</h1>
          <p style={{ marginTop: "8px", color: "#4b5563" }}>
            Work estimate for material quantities based on miles and waste.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginTop: "20px",
              alignItems: "end",
            }}
          >
            <div>
              <label style={{ display: "block", marginBottom: "6px", fontWeight: 600 }}>
                Miles
              </label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={miles}
                onChange={(e) => setMiles(Number(e.target.value))}
                style={{
                  width: "140px",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  fontSize: "16px",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "6px", fontWeight: 600 }}>
                Waste %
              </label>
              <input
                type="number"
                min="0"
                step="1"
                value={waste}
                onChange={(e) => setWaste(Number(e.target.value))}
                style={{
                  width: "140px",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  fontSize: "16px",
                }}
              />
            </div>

            <div
              style={{
                padding: "10px 14px",
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                minWidth: "160px",
              }}
            >
              <div style={{ fontSize: "13px", color: "#6b7280" }}>Line Items</div>
              <div style={{ fontSize: "22px", fontWeight: 700 }}>{totalLines}</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: "22px" }}>Totals by Unit</h2>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {Object.entries(totalsByUnit).map(([unit, total]) => (
                <div
                  key={unit}
                  style={{
                    background: "#f9fafb",
                    border: "1px solid #e5e7eb",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    minWidth: "140px",
                  }}
                >
                  <div style={{ fontSize: "13px", color: "#6b7280" }}>{unit}</div>
                  <div style={{ fontSize: "22px", fontWeight: 700 }}>{total.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              overflowX: "auto",
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: "22px" }}>Material List</h2>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "900px",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f3f4f6" }}>
                  <th style={thStyle}>Category</th>
                  <th style={thStyle}>Material</th>
                  <th style={thStyle}>Base Qty / Mile</th>
                  <th style={thStyle}>Unit</th>
                  <th style={thStyle}>Calculated Qty</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((item, i) => (
                  <tr key={i} style={{ borderTop: "1px solid #e5e7eb" }}>
                    <td style={tdStyle}>{item.category}</td>
                    <td style={tdStyle}>{item.name}</td>
                    <td style={tdStyle}>{item.base.toLocaleString()}</td>
                    <td style={tdStyle}>{item.unit}</td>
                    <td style={tdStyle}>{calculateQty(item.base).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "12px",
  fontSize: "14px",
  borderBottom: "1px solid #d1d5db",
};

const tdStyle: React.CSSProperties = {
  padding: "12px",
  fontSize: "14px",
  verticalAlign: "top",
};