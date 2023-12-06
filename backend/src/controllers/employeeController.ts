import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import * as db from "../config/db";

export const getEmployeesController = async (req: Request, res: Response) => {
  const usersCollection = await db.getCollection();
  const employees = await usersCollection.find().toArray();
  res.status(200).json({ employees });
};

export const updateEmployeeController = async (req: Request, res: Response) => {
  const usersCollection = await db.getCollection();
  const filter = { _id: new ObjectId(req.params.id) };

  const updateOperation = {
    $set: {
      status: req.body.employee.status,
    },
  };
  const result = await usersCollection.updateOne(filter, updateOperation);
  const employees = await usersCollection.find({}).toArray();

  res.status(200).json({ employees, updatedEmployee: result });
};
