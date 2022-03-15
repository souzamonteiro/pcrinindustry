const db = require("../models");
const ResultadoPcr = db.resultado_pcr;
const Op = db.Sequelize.Op;
// Create and Save a new PCR result.
exports.create = (req, res) => {
    // Validate request
    if (!req.body.paciente) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a PCR result.
    const resultadoPcr = {
        codigo: req.body.codigo,
        empresa: req.body.description,
        paciente: req.body.paciente,
        idade: req.body.paciente,
        sexo: req.body.paciente,
        raca: req.body.paciente,
        cep: req.body.paciente,
        bairro: req.body.paciente,
        municipio: req.body.paciente,
        estado: req.body.paciente,
        sintomas: req.body.paciente,
        hospitalizado: req.body.paciente,
        viagem_exterior: req.body.paciente,
        local_transmissao: req.body.paciente,
        contato_suspeito: req.body.paciente,
        unidade_saude: req.body.paciente,
        data_coleta: req.body.paciente,
        resultado: req.body.paciente
    };
    // Save PCR result in the database
    ResultadoPcr.create(resultadoPcr)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the Tutorial."
        });
    });
};
// Retrieve all PCR results from the database.
exports.findAll = (req, res) => {
    const paciente = req.query.paciente;
    var condition = paciente ? {paciente: {[Op.like]: `%${paciente}%`}} : null;
    ResultadoPcr.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving the PCR results."
            });
        });
};
// Find a single PCR result with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    ResultadoPcr.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find a PCR result with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving a PCR result with id=" + id + "."
            });
        });
};
// Update a PCR result by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    ResultadoPcr.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "The PCR result was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update the PCR result with id=${id}. Maybe the PCR result was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating the PCR result with id=" + id + "."
            });
        });
};
// Delete a PCR result with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    ResultadoPcr.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "The PCR result was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete the PCR result with id=${id}. Maybe the PCR result was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete the PCR result with id=" + id + "."
            });
        });
};
// Delete all PCR result from the database.
exports.deleteAll = (req, res) => {
    ResultadoPcr.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} All PCR results were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while removing all PCR results."
            });
        });
};
// Find all objects by condition.
exports.findAllPositives = (req, res) => {
    ResultadoPcr.findAll({where: {resultado: "P"}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving the PCR results."
            });
        });
  };
