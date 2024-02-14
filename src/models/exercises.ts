module.exports = (sequelize: any, Sequelaze: any) => {
    return sequelize.define(
        "exercises", //Název tabulky
        {   //Z čeho se tabulka skládá
            id: {
                type: Sequelaze.UUID,   //Universal Unique Identifier
                defaultValue: Sequelaze.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: Sequelaze.STRING,
                allowNull: false,
            },
            videoPath: {
                type: Sequelaze.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelaze.TEXT,
                allowNull: false,
            },
            smallDescription: {
                type: Sequelaze.STRING,
                allowNull: false,
            },
            createdAt: {
                type: Sequelaze.DATE,
            },
            updatedAt: {
                type: Sequelaze.DATE,
            },
        },
        {
            timestamps: true,
        }
    )
}