module.exports = async function (context, req) {
    
    const contact = req.body;
    contact.eqID = []
    context.bindings.outputDocument = contact;

}