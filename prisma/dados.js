import prismaClient from "../src/services/database.js";

// Este arquivo é para subir para o banco a lista de categorias sem ser pelos aplicativos, é inicial

const dadosCategorias = [
  {
    categoria: "Carro",
    icon: "https://jornadajs-devpoint.s3.amazonawa.com/icon-carro.png",
  },

  {
    categoria: "Casa",
    icon: "https://jornadajs-devpoint.s3.amazonawa.com/icon-casa.png",
  },

  {
    categoria: "Lazer",
    icon: "https://jornadajs-devpoint.s3.amazonawa.com/icon-lazer.png",
  },

  {
    categoria: "Mercado",
    icon: "https://jornadajs-devpoint.s3.amazonawa.com/icon-mercado.png",
  },

  {
    categoria: "Educação",
    icon: "https://jornadajs-devpoint.s3.amazonawa.com/icon-treinamento.png",
  },

  {
    categoria: "Viagem",
    icon: "https://jornadajs-devpoint.s3.amazonawa.com/icon-viagem.png",
  },
];

const CarregaDados = async () => {
  try {
    await prismaClient.categoria.createMany({
      data: dadosCategorias,
    });
    console.log("Carga finalizada");
  } catch (error) {
    console.log("Erro na Carga");
    console.log(error);
  }
};

CarregaDados();
