import express from 'express';
import bodyParser from 'body-parser';
import vendorRoutes from './routes/vendors.js';
import contractRoutes from './routes/contracts.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/vendors', vendorRoutes);
app.use('/contracts', contractRoutes);

app.get('/', (req, res) => res.send('Vendor Management API is running'));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
