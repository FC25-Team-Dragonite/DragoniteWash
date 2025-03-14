import express from 'express';
import { supabase } from './supabaseClient.js';

const router = express.Router();

// Fetch all laundry mats
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase.from('machines').select('*');

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new laundry mat
router.post('/', async (req, res) => {
  const { mat_id, type, price, status } = req.body;

  try {
    const { data, error } = await supabase
      .from('machines')
      .insert([{ mat_id, type, price, status }]);

    if (error)  throw error;
    res.json('Added sucessfully');
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a laundry mat by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('machines')
      .delete()
      .eq('machine_id', id);
   
    if (error) throw error;
    res.json('Deleted Sucessfully');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
