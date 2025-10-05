import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Contract', {
    service_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    expiry_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    payment_due_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  });
};
