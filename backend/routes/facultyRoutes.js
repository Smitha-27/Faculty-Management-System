import express from "express";

import Faculty from "../models/Faculty.js";

const router = express.Router();

// GET ALL FACULTY
router.get("/", async (req, res) => {

  try {

    const faculty =
      await Faculty.find();

    res.json(faculty);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

// ADD FACULTY
router.post("/", async (req, res) => {

  try {

    const faculty =
      await Faculty.create(req.body);

    res.status(201).json(faculty);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

// DELETE FACULTY
router.delete("/:id", async (req, res) => {

  try {

    await Faculty.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Faculty Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

// UPDATE FACULTY
router.put("/:id", async (req, res) => {

  try {

    const updatedFaculty =
      await Faculty.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(updatedFaculty);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

export default router;