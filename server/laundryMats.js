import express from 'express';
import { supabase } from './supabaseClient.js';

const router = express.Router();

// Fetch all laundry mats
router.get('/', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('laundry_mats')
            .select('*');

        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add a new laundry mat
router.post('/', async (req, res) => {
    const { name, location, price_per_wash, price_per_dry } = req.body;

    try {
        const { data, error } = await supabase
            .from('laundry_mats')
            .insert([{ name, location, price_per_wash, price_per_dry }]);

        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a laundry mat by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const { data, error } = await supabase
            .from('laundry_mats')
            .delete()
            .eq('mat_id', id);

        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;