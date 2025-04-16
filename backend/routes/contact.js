import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { name, email, message } = req.body;
  try {
    // Set up nodemailer (just console log for now)
    console.log("Contact Form Submission:", { name, email, message });

    res.status(200).json({ message: "Message received!" });
  } catch (err) {
    next(err);
  }
});

export default router;
