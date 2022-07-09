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
