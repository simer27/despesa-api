import { Router } from "express";
import controllerDespesa from "./controllers/controller.despesa.js";
import controllerCategoria from "./controllers/controller.categoria.js";

const router = Router();

router.get("/categorias", controllerCategoria.Listar );

router.get("/despesas", controllerDespesa.Listar );

router.post("/despesas", controllerDespesa.Inserir );

router.put("/despesas", controllerDespesa.Editar );

router.delete("/despesas", controllerDespesa.Deletar );


export default router;