import prismaClient from "../services/database.js";

const Listar = async (req, res) => {
  const desp = await prismaClient.despesa.findMany();
  return res.json(desp);
};

const Inserir = async (req, res) => {
  const desp = await prismaClient.despesa.createMany();
  return res.json(desp);
};

const Editar = async (req, res) => {
  return res.send("aqui devo editar os dados...");
};

const Deletar = async (req, res) => {
  return res.send("aqui devo deletar os dados....");
};

export default { Listar, Inserir, Editar, Deletar };
