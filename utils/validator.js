const { validationResult } = require("express-validator");

module.export = {
  user: (app, req, res) => {
    check("name", "O nome é obrigatório.").notEmpty(),
      check("email", "Email inválido.").notEmpty().isEmail();

    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      app.utils.error.send(errors, req, res);
      return false;
    } else {
      return true;
    }
  },
};
