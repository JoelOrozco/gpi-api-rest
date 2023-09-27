const TipoPago = {
    Semanal: "Semanal",
    Decenal: "Decenal",
    Quincenal: "Quincenal",
    Catorcenal: "Catorcenal",
    Mensual: "Mensual",
    Personalizado: "Personalizado",
    Trimestral: "Trimestral",
    Semestral: "Semestral",
    Anual: "Anual"
}

const TipoInteres = {
    SaldosInsolutos: "SaldosInsolutos",
    SaldosGlobales: "SaldosGlobales"
}

const TipoTasa = {
    Fija: "Fija",
    Variable: "Variable"
}

const TasaReferencia = {
    TIIE: "TIIE",
    CETES28: "CETES-28",
    CETES364: "CETES-364",
    LIBOR: "LIBOR",
    SOFR1: "SOFR-1",
    SOFR3: "SOFR-3",
    SOFR6: "SOFR-6",
    SOFR1: "SOFR-12"
}

const AmortizacionCapital = {
    PagosHomologados: "PagosHomologados",
    AmortizacionesIguales: "AmortizacionesIguales",
    InteresPeriodoConCapitalFina: "InteresPeriodoConCapitalFina"
}

const Costos = {
    Ninguno: "Ninguno",
    Comision: "Comision",
    SeguroDeVida: "SeguroDeVida",
    SeguroDelBien: "SeguroDelBien",
    Otros: "Otros"
}

// Exporta los consts como un objet= o
module.exports = {
    TipoPago,
    TipoInteres,
    TipoTasa,
    TasaReferencia,
    AmortizacionCapital,
    Costos
};