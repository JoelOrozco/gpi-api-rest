const { TipoPago, TipoInteres, TipoTasa, TasaReferencia, AmortizacionCapital, Costos } = require("../enums/creditoEnum");

class CreditoModel {
    Producto = new ProductoModel();
    Moneda = new MonedaModel();
    Cliente = new ClienteCreditoModel();
    Tipo = new TipoModel();
    Sucursal = new SucursalModel();
    TipoPago = TipoPago.Mensual;
    NoContrato = "";
    TasaAnual = 0.0;
    TasaMoratoria = 82.75;
    TipoInteres = TipoInteres.SaldosGlobales;
    Plazos = 0;
    TipoTasa = TipoTasa.Fija;
    TasaReferencia = TasaReferencia.TIIE;
    PuntosTiie = 0;
    AmortizacionCapital = AmortizacionCapital.AmortizacionesIguales;
    FechaDeposito = "2023-09-25";
    FechaPrimerPago = "2023-08-02";
    MontoDisponer = 0;
    InteresCausaIva = true;
    Facturable = false;
    Costos = Costos.Ninguno;
    ConceptoComision = "APERTURA";
    ComisionPorcentaje = 0.0;
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
    AplicaOtrasPercepciones = true;
    AplicaIvaOtrasPercepciones = true;
    AplicaIvaOtrasPercepcionesSegundo = true;
    OtrasPercepciones = 171.55;
    OtrasPercepcionesSegundo = 81.90
    //AplicaOtrasPercepcionesSegundo = 2
    ConceptoFactura = new ConceptoFactura();
    ConceptoFacturaSegundo = new ConceptoFacturaSegundo();

}

class ConceptoFactura {
    ClaveProducto = "01010101";
    ClaveUnidad = "E48";
    Descripcion = "GPS";
    ID = 2;
    MontoPercepcion = 199;
    NombrePercepcion = "GPS";
    NombreUnidad = "E48";
}
class ConceptoFacturaSegundo {
    ClaveProducto = "01010101";
    ClaveUnidad = "E48";
    Descripcion = "SSD";
    ID = 3;
    MontoPercepcion = 95;
    NombrePercepcion = "SSD";
    NombreUnidad = "E48";
}

class TipoModel {
    Nombre = "Crédito Prendario";
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
    Nombre = "MATRIZ";
}

module.exports = { CreditoModel, TipoModel, ClienteCreditoModel, ProductoModel, MonedaModel, SucursalModel }