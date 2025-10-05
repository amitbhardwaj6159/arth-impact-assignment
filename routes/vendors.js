import express from 'express';
import { Vendor, Contract } from '../models/index.js';

const router = express.Router();

// Create Vendor
router.post('/', async (req, res) => {
  try {
    const vendor = await Vendor.create(req.body);
    res.status(201).json(vendor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Vendors
router.get('/', async (req, res) => {
  const vendors = await Vendor.findAll({ include: Contract });
  res.json(vendors);
});

// Get Single Vendor
router.get('/:id', async (req, res) => {
  const vendor = await Vendor.findByPk(req.params.id, { include: Contract });
  if (!vendor) return res.status(404).json({ error: 'Vendor not found' });
  res.json(vendor);
});

// Update Vendor
router.put('/:id', async (req, res) => {
  const vendor = await Vendor.findByPk(req.params.id);
  if (!vendor) return res.status(404).json({ error: 'Vendor not found' });

  await vendor.update(req.body);
  res.json(vendor);
});

// Delete Vendor
router.delete('/:id', async (req, res) => {
  const vendor = await Vendor.findByPk(req.params.id);
  if (!vendor) return res.status(404).json({ error: 'Vendor not found' });

  await vendor.destroy();
  res.json({ message: 'Vendor deleted' });
});

export default router;
