import express from 'express';

import Faculty from '../models/Faculty.js';

const router = express.Router();

router.get('/', async (req, res) => {

  try {

    // Total faculty count
    const totalFaculty =
      await Faculty.countDocuments();

    // Latest faculty records
    const latestFaculty =
      await Faculty.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({

      success: true,

      totalFaculty,

      latestFaculty

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });
  }
});

export default router;