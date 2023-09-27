const Nacionalidad = {
    Mexicano: "Mexicano",
    Estadounidense: "Estadounidense",
    Chileno: "Chileno",
    Español: "Español",
    Colombiano: "Colombiano",
    Argentino: "Argentino"
}

const Genero = {
    Hombre: "Hombre",
    Mujer: "Mujer",
    MASCULINO: "Hombre",
    FEMENINO: "Mujer",
    Male: "Hombre",
    Female: "Mujer",
}

const EstadoCivil = {
    Vacio: "",
    "Soltero (a)": "Soltero",
    "Casado (a)": "Casado",
    "Divorciado (a)": "Divorciado",
    "Viudo (a)": "Viudo"
}

const Ocupacion = {
    Empleado: "Empleado",
    Independiente: "Independiente",
    NegocioPropio: "NegocioPropio",
    Hogar: "Hogar",
    Estudiante: "Estudiante",
    AutoEmpleado: "AutoEmpleado",
    Inversionista: "Inversionista"
}

const OrigenPagoCredito = {
    NegocioOSueldo: "NegocioOSueldo",
    Ahorro: "Ahorro",
    Tercero: "Tercero",
    Otro: "Otro",
    Empleado: "Empleado"
}

const Metodo = {
    Efectivo: "Efectivo",
    Ahorro: "Ahorro",
    Cheque: "Cheque",
    Transferencia: "Transferencia"
}

const MediosOtorgamiento = {
    Efectivo: "Efectivo",
    Cheque: "Cheque",
    Transferencia: "Transferencia"
}

const Destino = {
    EsDeLaCuentaDelCliente: "EsDeLaCuentaDelCliente",
    NoEsDeLaCuentaDelCliente: "NoEsDeLaCuentaDelCliente"
}

const Identificacion = {
    IFE: "IFE",
    PASAPORTE: "PASAPORTE",
    ActaConstitutiva: "ActaConstitutiva"
}

// Exporta los consts como un objeto
module.exports = {
    Nacionalidad,
    Genero,
    EstadoCivil,
    Ocupacion,
    OrigenPagoCredito,
    Metodo,
    Destino,
    MediosOtorgamiento,
    Identificacion
};