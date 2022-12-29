import { createDataDB } from "../services/index.js";

export const createData = async (req, res, next) => {
  try {
    const result = await createDataDB();
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};

