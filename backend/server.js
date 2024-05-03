import express from 'express';
import cors from 'cors';
import { getAll, getById, create, updateById, deleteById } from './controllers/InstrumentoController.js';

const app = express();
const PORT = 3000;
app.use(cors());

app.use(express.json());

// Rutas para el CRUD de instrumentos
app.get('/instrumentos', getAll);
app.get('/Detalle/:id', getById);
app.post('/instrumentos', create);
app.put('/instrumentos/:id', updateById);
app.delete('/instrumentos/:id', deleteById);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
