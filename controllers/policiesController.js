const policiesController = {
    getPolicies : function (req,res) {
        try {
            res.json('Endpoint /policies - WIP')
        } catch (error) {
            console.log(error)
           res.json(error)
        }
    },
    getPolicy: function (req, res) {
        try {
            res.send('Endpoint /policies/:id - WIP')
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = policiesController;