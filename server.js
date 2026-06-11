const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123", // your mysql password
  database: "parking_db"
});

db.connect(err => {
  if (err) {
    console.log("DB Error ❌", err);
  } else {
    console.log("MySQL Connected ✅");
  }
});

const TOTAL_SLOTS = 10;

// 🅿️ PARK API
app.post("/park", (req, res) => {
  const { name, vehicle_number } = req.body;

  // check already parked
  db.query(
    "SELECT * FROM parking_records WHERE vehicle_number=? AND status='ACTIVE'",
    [vehicle_number],
    (err, result) => {
      if (result.length > 0) {
        return res.json({
          message: "Already parked",
          slot: result[0].slot
        });
      }

      // find used slots
      db.query(
        "SELECT slot FROM parking_records WHERE status='ACTIVE'",
        (err, slots) => {
          let usedSlots = slots.map(s => s.slot);

          let slot;
          for (let i = 1; i <= TOTAL_SLOTS; i++) {
            if (!usedSlots.includes(i)) {
              slot = i;
              break;
            }
          }

          if (!slot) {
            return res.json({ message: "Parking Full ❌" });
          }

          // insert data
          db.query(
            "INSERT INTO parking_records (name, vehicle_number, slot, entry_time) VALUES (?, ?, ?, NOW())",
            [name, vehicle_number, slot],
            () => {
              res.json({
                message: "Slot Allocated ✅",
                slot
              });
            }
          );
        }
      );
    }
  );
});

// 🚗 EXIT API
app.post("/exit", (req, res) => {
  const { vehicle_number } = req.body;

  db.query(
    "SELECT * FROM parking_records WHERE vehicle_number=? AND status='ACTIVE'",
    [vehicle_number],
    (err, result) => {

      if (result.length === 0) {
        return res.json({ message: "Vehicle not found ❌" });
      }

      const record = result[0];

      const exitTime = new Date();
      const entryTime = new Date(record.entry_time);

      const duration = Math.ceil((exitTime - entryTime) / (1000 * 60));
      const cost = duration * 2;

      db.query(
        "UPDATE parking_records SET exit_time=?, duration=?, cost=?, status='EXITED' WHERE id=?",
        [exitTime, duration, cost, record.id],
        () => {
          res.json({
            message: "Exit Successful ✅",
            slot: record.slot,
            duration,
            cost
          });
        }
      );
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});