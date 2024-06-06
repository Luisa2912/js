function traducirPalabra(palabra){
const diccionario = {
[Palabra.CASA]: "house",
[Palabra.MESA]: "table",
[Palabra.PERRO]: "dog",
[Palabra.GATO]: "cat",
};
try{
        const palabraEnum = Palabra[palabra.toUpperCase()];
        if (palabraEnum in diccionario) {
                return diccionario[palabraEnum];
} else {
        throw new Error("La palabra no está en el diccionario.");
      }
} catch (error) {
        // Si ocurre un error, devolver un mensaje indicando que la palabra no se encontró
        return `La palabra "${palabra}" no se encuentra en el diccionario.`;
      }
    }

