const { TipoPago, TipoInteres, TipoTasa, TasaReferencia, AmortizacionCapital, Costos } = require("../enums/creditoEnum");

class CreditoModel {
    Producto = new ProductoModel();
    Moneda = new MonedaModel();
    Cliente = new ClienteCreditoModel();
    Tipo = new TipoModel();
    Sucursal = new SucursalModel();
    TipoPago = TipoPago.Mensual;
    NoContrato = "";
    TasaAnual = 27.84;
    TasaMoratoria = 8;
    TipoInteres = TipoInteres.SaldosInsolutos;
    Plazos = 0;
    TipoTasa = TipoTasa.Fija;
    TasaReferencia = TasaReferencia.TIIE;
    PuntosTiie = 0;
    AmortizacionCapital = AmortizacionCapital.PagosHomologados;
    FechaDeposito = "2023-08-02";
    FechaPrimerPago = "";
    MontoDisponer = 0;
    InteresCausaIva = true;
    Facturable = true;
    Costos = Costos.Ninguno;
    ConceptoComision = "APERTURA";
    ComisionPorcentaje = 0.3;
    SeguroDeVida = 0;
    IVASeguroDeVida = 0;
    SeguroDelBien = 0;
    OtrosCostos = 0;
    IVAOtrosCostos = 0;
    PagoProgramado = 0;
    ComisionFegaPorcentaje = 0;
    ComisionFega = 0;
    CoberturaPorcentaje = 0;
    Cobertura = 0;
}

class TipoModel {
    Nombre = "Crédito al auto";
}

class ClienteCreditoModel {
    RFC = "";
}

class ProductoModel {
    Clave = "P001";
}
class MonedaModel {
    Clave = "MXN";
}
class SucursalModel {
    Nombre = "MAtriz";
}

module.exports = { CreditoModel, TipoModel, ClienteCreditoModel, ProductoModel, MonedaModel, SucursalModel }