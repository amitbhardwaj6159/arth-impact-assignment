import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Vendor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_person: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true }
    },
    phone: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.ENUM('Active', 'Inactive'),
      defaultValue: 'Active'
    }
  });
};
