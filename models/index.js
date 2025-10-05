import { Sequelize } from 'sequelize';
import config from '../config.js';
import VendorModel from './vendor.js';
import ContractModel from './contract.js';

const sequelize = new Sequelize(config);

const Vendor = VendorModel(sequelize);
const Contract = ContractModel(sequelize);

// Associations
Vendor.hasMany(Contract, { foreignKey: 'vendorId', onDelete: 'CASCADE' });
Contract.belongsTo(Vendor, { foreignKey: 'vendorId' });

await sequelize.sync({ alter: true }); // auto-create tables

export { sequelize, Vendor, Contract };
