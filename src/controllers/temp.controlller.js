import { loadDataHome } from '../services/index.js';

export const loadData = async (req, res) => {
  try {
    const rs = await loadDataHome();
    res.send(rs);
  } catch (error) {
    console.error(error);
  }
};
