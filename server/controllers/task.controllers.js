import { query } from "express";
import { pool } from "../../database/db.js";

export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks ORDER BY createAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks WHERE id=?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tasks(title, description) VALUES (?,?)",
      [title, description]
    );
    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const upadteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await pool.query("UPDATE tasks SET ? WHERE id=?", [
      req.body,
      id,
    ]);

    if (result["affectedRows"] === 0)
      return res.status(404).json({ msg: "No se actualizo" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await pool.query("DELETE FROM tasks WHERE id=?", [id]);

    if (result["affectedRows"] === 0)
      return res.status(404).json("Task not found");

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
