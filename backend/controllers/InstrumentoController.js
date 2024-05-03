import { client } from '../database.js'; 

const dbName = 'InstrumentosDB';

// Función para obtener todos los instrumentos
export const getAll = async (req, res) => {
  try {
    // Conexión al cliente de MongoDB
    await client.connect();

    // Base de datos
    const db = client.db(dbName);

    // Colección "instrumento"
    const collection = db.collection('instrumento');

    // Obtener todos los instrumentos de la colección
    const instrumentos = await collection.find({}).toArray();
    console.log(instrumentos); // Agregar este registro de depuración

    res.json(instrumentos);
  } catch (error) {
    console.error('Error al obtener los instrumentos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  } finally {
    // Cerrar la conexión al finalizar
    await client.close();
  }
}

// Función para obtener un instrumento por su ID
export const getById = async (req, res) => {
  try {
    const { id } = req.params;

    // Conexión al cliente de MongoDB
    await client.connect();

    // Base de datos
    const db = client.db(dbName);

    // Colección "instrumento"
    const collection = db.collection('instrumento');

    // Buscar el instrumento por su ID
    const instrumento = await collection.findOne({ id });

    if (!instrumento) {
      res.status(404).json({ message: 'Instrumento no encontrado' });
    } else {
      res.json(instrumento);
    }
  } catch (error) {
    console.error('Error al obtener el instrumento:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  } finally {
    // Cerrar la conexión al finalizar
    await client.close();
  }
}

// Función para agregar un nuevo instrumento
export const create = async (req, res) => {
  try {
    const newInstrument = req.body;

    // Conexión al cliente de MongoDB
    await client.connect();

    // Base de datos
    const db = client.db(dbName);

    // Colección "instrumento"
    const collection = db.collection('instrumento');

    // Insertar el nuevo instrumento
    const result = await collection.insertOne(newInstrument);
    res.status(201).json(result.ops[0]);
  } catch (error) {
    console.error('Error al crear el instrumento:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  } finally {
    // Cerrar la conexión al finalizar
    await client.close();
  }
}

// Función para actualizar un instrumento por su ID
export const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInstrument = req.body;

    // Conexión al cliente de MongoDB
    await client.connect();

    // Base de datos
    const db = client.db(dbName);

    // Colección "instrumento"
    const collection = db.collection('instrumento');

    // Actualizar el instrumento
    const result = await collection.updateOne({ id }, { $set: updatedInstrument });

    if (result.modifiedCount === 0) {
      res.status(404).json({ message: 'Instrumento no encontrado' });
    } else {
      res.json({ message: 'Instrumento actualizado correctamente' });
    }
  } catch (error) {
    console.error('Error al actualizar el instrumento:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  } finally {
    // Cerrar la conexión al finalizar
    await client.close();
  }
}

// Función para eliminar un instrumento por su ID
export const deleteById = async (req, res) => {
  try {
    const { id } = req.params;

    // Conexión al cliente de MongoDB
    await client.connect();

    // Base de datos
    const db = client.db(dbName);

    // Colección "instrumento"
    const collection = db.collection('instrumento');

    // Eliminar el instrumento
    const result = await collection.deleteOne({ id });

    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Instrumento no encontrado' });
    } else {
      res.json({ message: 'Instrumento eliminado correctamente' });
    }
  } catch (error) {
    console.error('Error al eliminar el instrumento:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  } finally {
    // Cerrar la conexión al finalizar
    await client.close();
  }
}
