module.exports = app => {
    const resultado_pcr = require("../controllers/resultado_pcr.controller.js");
    var router = require("express").Router();
    // Create a new PCR result.
    router.post("/", resultado_pcr.create);
    // Retrieve all PCR results.
    router.get("/", resultado_pcr.findAll);
    // Retrieve all positive PCR results.
    router.get("/positive", resultado_pcr.findAllPositives);
    // Retrieve a single PCR result with id
    router.get("/:id", resultado_pcr.findOne);
    // Update a PCR results with id.
    router.put("/:id", resultado_pcr.update);
    // Delete a PCR results with id.
    router.delete("/:id", resultado_pcr.delete);
    // Delete all PCR results.
    router.delete("/", resultado_pcr.deleteAll);
    app.use('/api/resultado_pcr', router);
};