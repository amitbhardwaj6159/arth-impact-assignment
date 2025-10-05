import express from 'express';
import { Contract, Vendor } from '../models/index.js';

const router = express.Router();

// Create Contract for a Vendor
router.post('/vendor/:vendorId', async (req, res) => {
  const vendor = await Vendor.findByPk(req.params.vendorId);
  if (!vendor) return res.status(404).json({ error: 'Vendor not found' });

  try {
    const contract = await Contract.create({ ...req.body, vendorId: vendor.id });
    res.status(201).json(contract);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all Contracts for a Vendor
router.get('/vendor/:vendorId', async (req, res) => {
  const contracts = await Contract.findAll({ where: { vendorId: req.params.vendorId } });
  res.json(contracts);
});

// Update Contract
router.put('/:id', async (req, res) => {
  const contract = await Contract.findByPk(req.params.id);
  if (!contract) return res.status(404).json({ error: 'Contract not found' });

  await contract.update(req.body);
  res.json(contract);
});

// Delete Contract
router.delete('/:id', async (req, res) => {
  const contract = await Contract.findByPk(req.params.id);
  if (!contract) return res.status(404).json({ error: 'Contract not found' });

  await contract.destroy();
  res.json({ message: 'Contract deleted' });
});

export default router;
