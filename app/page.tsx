"use client";

import { useState } from "react";

export default function Home() {
  const [miles, setMiles] = useState(1);
  const [waste, setWaste] = useState(5);

 const materials = [
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

  const calculateQty = (base: number) => {
    return Math.round(base * miles * (1 + waste / 100));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Magic Mile Calculator</h1>

      <div style={{ marginBottom: 20 }}>
        <label>Miles: </label>
        <input
          type="number"
          value={miles}
          onChange={(e) => setMiles(Number(e.target.value))}
        />

        <label style={{ marginLeft: 20 }}>Waste %: </label>
        <input
          type="number"
          value={waste}
          onChange={(e) => setWaste(Number(e.target.value))}
        />
      </div>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Material</th>
            <th>Unit</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((item, i) => (
            <tr key={i}>
              <td>{item.category}</td>
              <td>{item.name}</td>
              <td>{item.unit}</td>
              <td>{calculateQty(item.base)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}