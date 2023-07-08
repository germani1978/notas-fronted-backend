import { pool } from "../db.js";

export const getTasks = (req, res) => {
    res.send('Obteniendo Tareas')
}
export const getTask = (req, res) => {
    res.send('Obtenidendo una Tarea')
}
export const createTask = async (req, res) => {
    const { title, description }  = req.body ;
    console.log(title, description);
    const [result] = await pool.query('INSERT INTO tasks(title, description) VALUES (?,?)', [
        title,
        description
    ])
    console.log(result);
    res.json({
        id: result.insertId,
        title,
        description
    });
}
export const upadteTask = (req, res) => {
    res.send('Actualizando Tareas')
}
export const deleteTask = (req, res) => {
    res.send('Borrando Tarea');
}