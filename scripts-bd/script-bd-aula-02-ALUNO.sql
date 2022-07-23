-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `tb_pessoa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tb_pessoa` (
  `id_pessoa` INT NOT NULL AUTO_INCREMENT,
  `senha` VARCHAR(255) NOT NULL,
  `nome` VARCHAR(150) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `login` VARCHAR(45) NOT NULL,
  `cpf` INT(11) NOT NULL,
  `rg` INT(8) NULL,
  `email` VARCHAR(75) NOT NULL,
  `genero` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_pessoa`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `cpf_UNIQUE` ON `tb_pessoa` (`cpf` ASC) VISIBLE;

CREATE UNIQUE INDEX `rg_UNIQUE` ON `tb_pessoa` (`rg` ASC) VISIBLE;

CREATE UNIQUE INDEX `login_UNIQUE` ON `tb_pessoa` (`login` ASC) VISIBLE;

CREATE UNIQUE INDEX `email_UNIQUE` ON `tb_pessoa` (`email` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `tb_professor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tb_professor` (
  `id_professor` INT NOT NULL AUTO_INCREMENT,
  `id_pessoa` INT NOT NULL,
  `data_contratacao` DATE NULL,
  `curriculo` BLOB NULL,
  `observacoes` TEXT NULL,
  `salario` DECIMAL(10,2) NULL,
  `endereco` TEXT NULL,
  `telefone_fixo` VARCHAR(45) NULL,
  `telefone_celular` VARCHAR(45) NULL,
  PRIMARY KEY (`id_professor`, `id_pessoa`),
  CONSTRAINT `fk_tb_professor_tb_pessoa`
    FOREIGN KEY (`id_pessoa`)
    REFERENCES `tb_pessoa` (`id_pessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_tb_professor_tb_pessoa_idx` ON `tb_professor` (`id_pessoa` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `tb_aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tb_aluno` (
  `id_aluno` INT NOT NULL AUTO_INCREMENT,
  `nome_responsavel_legal` VARCHAR(150) NOT NULL,
  `telefone_responsavel_legal` VARCHAR(45) NOT NULL,
  `historico_escolar` BLOB NULL,
  `endereço_responsavel` MEDIUMTEXT NOT NULL,
  `is_matricula_ativa` TINYINT NOT NULL DEFAULT 1,
  `cpf_responsavel_legal` INT(11) NOT NULL,
  `email_responsavel` VARCHAR(100) NOT NULL,
  `id_pessoa` INT NOT NULL,
  PRIMARY KEY (`id_aluno`, `id_pessoa`),
  CONSTRAINT `fk_tb_alunos_tb_pessoa1`
    FOREIGN KEY (`id_pessoa`)
    REFERENCES `tb_pessoa` (`id_pessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_tb_alunos_tb_pessoa1_idx` ON `tb_aluno` (`id_pessoa` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
