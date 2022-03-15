module.exports = (sequelize, Sequelize) => {
  const resultado_pcr =  sequelize.define('resultado_pcr', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false
    },
    empresa: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    paciente: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    idade: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: true
    },
    sexo: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    raca: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    cep: {
      type: Sequelize.STRING(9),
      allowNull: true
    },
    bairro: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    municipio: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    estado: {
      type: Sequelize.CHAR(2),
      allowNull: true
    },
    sintomas: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    hospitalizado: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    viagem_exterior: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    local_transmissao: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    contato_suspeito: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    unidade_saude: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    data_coleta: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    resultado: {
      type: Sequelize.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'resultado_pcr',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return resultado_pcr;
};
