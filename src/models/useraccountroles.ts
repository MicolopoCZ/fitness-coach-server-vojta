module.exports = (sequelize: any, Sequilaze: any) => {
    return sequelize.define(
        "useraccountroles", //Název tabulky
        {   //Z čeho se tabulka skládá
            createdAt: {
                type: Sequilaze.DATE,
            },
            updatedAt: {
                type: Sequilaze.DATE,
            },
        },
        {
            timestamps: true,
        }
    )
}