create database processo_seletivo_bemol;

use processo_seletivo_bemol;

CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(85) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `cep` varchar(8) NOT NULL,
  `endereco` varchar(85) NOT NULL,
  `numero` varchar(4) NOT NULL,
  `cidade` varchar(25) NOT NULL,
  `estado` varchar(2) NOT NULL,
  `nascimento` date NOT NULL,
  `bairro` varchar(85) NOT NULL,
  `referencia` text,
  `telefone` varchar(11) DEFAULT NULL,
  `celular` varchar(25) NOT NULL,
  `email` varchar(84) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `confirmacaoSenha` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
