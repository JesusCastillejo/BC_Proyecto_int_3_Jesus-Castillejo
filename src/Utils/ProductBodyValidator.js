const productBodyValidator = (request, response, next) => {
    const { nombre, precio, stock, marca, descripcion, descripcionlarga, categoria, photo, edad } = request.body;
    const validationArray = [];
    if (typeof nombre !== "string") validationArray.push('Nombre debe ser un string.')
    if (typeof stock !== "number") validationArray.push('Stock debe ser un numero')
    if (stock < 0) validationArray.push('Stock debe ser un numero')
    if (typeof marca !== "string") validationArray.push('Marca debe ser un string.')
    if (typeof categoria !== "string") validationArray.push('Categoria debe ser un string.')
    if (typeof descripcion !== "string") validationArray.push('Descripcion debe ser un string.')
    if (typeof descripcionlarga !== "string") validationArray.push('descripcion larga debe ser un string.')
    if (typeof photo !== "string") validationArray.push('Foto debe ser un string.')
    if (typeof precio !== "number") validationArray.push('Precio debe ser un number')
    if (price < 0) validationArray.push('Precio debe ser un numero positivo')
    if (typeof edad !== "number") validationArray.push('Edad debe ser un nombre')
    if (validationArray.length > 0) {
        return response.status(400).json({ message: validationArray.join(' ') })
    }
    next();
};

export default productBodyValidator;