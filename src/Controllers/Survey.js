const knex = require("../Database");

module.exports = {
  async home(req, res) {
    return res.send({
      projeto: "enquete",
      alunos: [
        { nome: "THIAGO LEMES ANDRADE", matricula: 20201001217 },
        { nome: "JUAN RAMOS ALVES", matricula: 20201001271 },
        { nome: "IGOR DOS SANTOS MOTTA", matricula: 20201001044 },
      ],
    });
  },

  async index(req, res) {
    try {
      const response = await knex("users");
      return res.send(response);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async registerAnswer(req, res) {
    try {
      /**VALIDAÇÕES */
      const invalidFields = [];
      for (const item in req.body) {
        if (!req.body[item]) {
          invalidFields.push(item);
        }
      }

      if (invalidFields.length) {
        throw new Error(`É necessário preencher os campos: ${invalidFields}`);
      }

      const {
        name,
        age,
        gender,
        schooling,
        questionA,
        questionB,
        questionC,
        questionD,
        questionE,
        questionF,
        questionG,
        questionH,
        questionI,
        questionJ,
      } = req.body;

      const isInteger = /^\d+$/.test(age); // VERIFICA SE EXISTE SOMENTE NÚMERO INTEIRO
      const isGender = /M|F/.test(gender); // VERIFICA SE EXISTE M OU F
      const isSchooling = /NAN|EF|EM|ES|M|D|PD/.test(schooling); //VERIFICA SE EXISTE ESCOLARIDADE VÁLIDA

      if (!isInteger) {
        throw new Error("Idade Inválida!");
      }

      if (!isGender) {
        throw new Error("Sexo inválido! Valores aceitos são 'M' ou 'F'");
      }

      if (!isSchooling) {
        throw new Error(
          "Escolaridade inválida! Valores aceitos são 'NAN', 'EF', 'EM', 'ES', 'M', 'D' ou 'PD'"
        );
      }

      /**CADASTRO */
      await knex("users").insert({
        name,
        age,
        gender,
        schooling,
        questionA,
        questionB,
        questionC,
        questionD,
        questionE,
        questionF,
        questionG,
        questionH,
        questionI,
        questionJ,
      });

      return res
        .status(201)
        .send(`${name}, suas respostas foram salvas com sucesso!`);
    } catch (err) {
      return res
        .status(400)
        .json({ message: "ERRO AO CADASTRAR USUÁRIO", error: err.message });
    }
  },

  async searchQuestionsCount(req, res) {
    try {
      const query = req.query;
      const response = await knex("users").modify((builder) => {
        if (query.age) {
          const searchAge = JSON.parse(query.age);
          const operator = searchAge[0];
          const value = searchAge[1];

          builder.andWhere("age", operator, value);
        }
        if (query.gender) {
          builder.andWhere("gender", query.gender);
        }
        if (query.schooling) {
          builder.andWhere("schooling", query.schooling);
        }
        if (query.questionA) {
          builder.andWhere("questionA", query.questionA).count();
        }
        if (query.questionB) {
          builder.andWhere("questionB", query.questionB).count();
        }
        if (query.questionC) {
          builder.andWhere("questionC", query.questionC).count();
        }
        if (query.questionD) {
          builder.andWhere("questionD", query.questionD).count();
        }
        if (query.questionE) {
          builder.andWhere("questionE", query.questionE).count();
        }
        if (query.questionF) {
          builder.andWhere("questionF", query.questionF).count();
        }
        if (query.questionG) {
          builder.andWhere("questionG", query.questionG).count();
        }
        if (query.questionH) {
          builder.andWhere("questionH", query.questionH).count();
        }
        if (query.questionI) {
          builder.andWhere("questionI", query.questionI).count();
        }
        if (query.questionJ) {
          builder.andWhere("questionJ", query.questionJ).count();
        }
      });
      return res.send(response);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async searchQuestions(req, res) {
    try {
      const { orderBy = "name", direction = "asc", ...rest } = req.query;

      const response = await knex("users").modify((builder) => {
        if (rest.age) {
          const searchAge = JSON.parse(rest.age);
          const operator = searchAge[0];
          const value = searchAge[1];

          builder.andWhere("age", operator, value);
        }
        if (rest.name) {
          builder.andWhereILike("name", `%${rest.name}%`);
        }
        if (rest.gender) {
          builder.andWhere("gender", rest.gender);
        }
        if (rest.schooling) {
          builder.andWhere("schooling", rest.schooling);
        }
        if (rest.questionA) {
          builder.andWhere("questionA", rest.questionA);
        }
        if (rest.questionB) {
          builder.andWhere("questionB", rest.questionB);
        }
        if (rest.questionC) {
          builder.andWhere("questionC", rest.questionC);
        }
        if (rest.questionD) {
          builder.andWhere("questionD", rest.questionD);
        }
        if (rest.questionE) {
          builder.andWhere("questionE", rest.questionE);
        }
        if (rest.questionF) {
          builder.andWhere("questionF", rest.questionF);
        }
        if (rest.questionG) {
          builder.andWhere("questionG", rest.questionG);
        }
        if (rest.questionH) {
          builder.andWhere("questionH", rest.questionH);
        }
        if (rest.questionI) {
          builder.andWhere("questionI", rest.questionI);
        }
        if (rest.questionJ) {
          builder.andWhere("questionJ", rest.questionJ);
        }
        builder.orderBy(orderBy, direction);
      });
      return res.send(response);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async searchPersonalData(req, res) {
    try {
      const { orderBy = "name", direction = "asc", ...rest } = req.query;
      const response = await knex("users").modify((builder) => {
        builder.select("id", "name", "schooling", "gender", "age");
        if (rest.age) {
          const searchAge = JSON.parse(rest.age);
          const operator = searchAge[0];
          const value = searchAge[1];

          builder.andWhere("age", operator, value);
        }
        if (rest.schooling) {
          builder.andWhere("schooling", rest.schooling);
        }
        if (rest.name) {
          builder.andWhereILike("name", `%${rest.name}%`);
        }
        if (rest.gender) {
          builder.andWhere("gender", rest.gender);
        }
        builder.orderBy(orderBy, direction);
      });

      return res.send(response);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
};
