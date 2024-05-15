import prismaClient from "../services/database.js";

const Listar = async (req, res) => {
  const cat = await prismaClient.categoria.findMany();
  return res.json(cat);
};

export default { Listar };
