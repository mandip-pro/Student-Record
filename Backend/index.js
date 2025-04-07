import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

//DB instantiate
mongoose
  .connect("mongodb://127.0.0.1:27017/record")
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: String,
    address: String,
  },
  {
    versionKey: false,
  }
);
const Student = mongoose.model("Student", studentSchema);

app.get("/", async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (e) {
    res.sendStatus(500).json({ message: e.message });
  }
});
app.post("/", async (req, res) => {
  try {
    await Student.create(req.body);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500).json({ message: e.message });
  }
});
app.put("/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.sendStatus(200);
});
app.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log(`express server working on port http://localhost:3000`);
});
