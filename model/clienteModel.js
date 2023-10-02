const { Nacionalidad, Genero, EstadoCivil, Ocupacion, OrigenPagoCredito,
    Metodo, Medios, Destino, MediosOtorgamiento, Identificacion } = require("../enums/clienteEnum");

class ClienteModel {
    TipoFigura = "";
    ApellidoPaterno = "";
    ApellidoMaterno = "";
    PrimerNombre = "";
    SegundoNombre = "";
    FechaDeNacimiento = "";
    RFC = "";
    CURP = "";
    Nacionalidad = Nacionalidad.Mexicana;
    Genero = Genero.Hombre;
    EstadoCivil = EstadoCivil.Vacio;
    LugarNacimiento = LugarNacimientoModel;
    Direccion = DireccionModel;
    Contacto = ContactoModel;
    InformacionAdicional = InformacionAdicionalModel;
    RegimenFiscal = "";
    RazonSocial = "";
    FiguraJuridica = "";
    FechaConstitucion = "";
    RepresentanteLegal = RepresentanteLegalModel;
    ActividadEconomica = "";
    Identificacion = "";
    NumeroDocumento = "";
    Avales = [];

    constructor(
        TipoFigura = "",
        ApellidoPaterno = "",
        ApellidoMaterno = "",
        PrimerNombre = "",
        SegundoNombre = "",
        FechaDeNacimiento = "",
        RFC = "",
        CURP = "",
        Nacionalidad = "",
        Genero = "",
        EstadoCivil = "",
        LugarNacimiento = LugarNacimientoModel,
        Direccion = DireccionModel,
        Contacto = ContactoModel,
        InformacionAdicional = InformacionAdicionalModel,
        RegimenFiscal = "",
        RazonSocial = "",
        FiguraJuridica = "",
        FechaConstitucion = "",
        RepresentanteLegal = RepresentanteLegalModel,
        ActividadEconomica = "",
        Identificacion = "",
        NumeroDocumento = "",
    ) {
        this.TipoFigura = TipoFigura;
        this.ApellidoPaterno = ApellidoPaterno;
        this.ApellidoMaterno = ApellidoMaterno;
        this.PrimerNombre = PrimerNombre;
        this.SegundoNombre = SegundoNombre;
        this.FechaDeNacimiento = FechaDeNacimiento;
        this.RFC = RFC;
        this.CURP = CURP;
        this.Nacionalidad = Nacionalidad;
        this.Genero = Genero;
        this.EstadoCivil = EstadoCivil;
        this.LugarNacimiento = LugarNacimiento;
        this.Direccion = Direccion;
        this.Contacto = Contacto;
        this.InformacionAdicional = InformacionAdicional;
        this.RegimenFiscal = RegimenFiscal;
        this.RazonSocial = RazonSocial;
        this.FiguraJuridica = FiguraJuridica;
        this.FechaConstitucion = FechaConstitucion;
        this.RepresentanteLegal = RepresentanteLegal;
        this.ActividadEconomica = ActividadEconomica;
        this.Identificacion = Identificacion;
        this.NumeroDocumento = NumeroDocumento;
    }
}

class LugarNacimientoModel {
    Pais = "";
    Estado = "";
    constructor(Pais = "", Estado = "") {
        this.Pais = Pais;
        this.Estado = Estado;
    }
}

class DireccionModel {
    CodigoPostal = "";
    Pais = "";
    Estado = "";
    Municipio = "";
    Ciudad = "";
    Colonia = "";
    Calle = "";
    NumeroExterior = "";
    NumeroInterior = "";
    Referencia = "";
    constructor(
        CodigoPostal = "",
        Pais = "",
        Estado = "",
        Municipio = "",
        Ciudad = "",
        Colonia = "",
        Calle = "",
        NumeroExterior = "",
        NumeroInterior = "",
        Referencia = ""
    ) {

        this.CodigoPostal = CodigoPostal;
        this.Pais = Pais;
        this.Municipio = Municipio;
        this.Ciudad = Ciudad;
        this.Colonia = Colonia;
        this.Calle = Calle;
        this.NumeroExterior = NumeroExterior;
        this.NumeroInterior = NumeroInterior;
        this.Referencia = Referencia;
    }
}

class ContactoModel {
    TelefonoFisico = "";
    TelefonoCelular = "";
    TelefonoOtro = "";
    Correo = "";
    constructor(
        TelefonoFisico = "",
        TelefonoCelular = "",
        TelefonoOtro = "",
        Correo = ""
    ) {

        this.TelefonoFisico = TelefonoFisico;
        this.TelefonoCelular = TelefonoCelular;
        this.TelefonoOtro = TelefonoOtro;
        this.Correo = Correo;
    }
}

class InformacionAdicionalModel {
    ParentescoSofom = "";
    CargoPolitico = "";
    CargoPoliticoPariente = "";
    PrestamoATercero = "";
    PagoDeTercero = "";
    Ocupacion = Ocupacion.Empleado;
    NombreEmpleador = "";
    OrigenPagoCredito = OrigenPagoCredito.NegocioOSueldo;
    OrigenPagoTercero = "";
    OrigenPagoOtro = "";
    Metodo = Metodo.Transferencia;
    MediosOtorgamiento = MediosOtorgamiento.Transferencia;
    Destino = Destino.EsDeLaCuentaDelCliente;
    PropietarioReal = "Si";
    Antecendentes = "No";
    PaisMedidasDeficientes = "No";
    CargoPoliticoDependencia = "";
    
    CargoPoliticoPuesto = "";
    CargoPoliticoFunciones = "";
    CargoPoliticoInicio = "";
    CargoPoliticoFin = "";
    TrabajaAqui = "No";
    constructor(
        ParentescoSofom = "",
        CargoPolitico = "",
        CargoPoliticoPariente = "",
        PrestamoATercero = "",
        PagoDeTercero = "",
        Ocupacion = "Empleado",
        NombreEmpleador = "",
        OrigenPagoCredito = "NegocioOSueldo",
        OrigenPagoTercero = "",
        OrigenPagoOtro = "",
        Metodo = "Transferencia",
        MediosOtorgamiento = "Transferencia",
        Destino = "EsDeLaCuentaDelCliente",
        PropietarioReal = "Si",
        Antecendentes = "No",
        PaisMedidasDeficientes = "No",
    ) {
        this.ParentescoSofom = ParentescoSofom;
        this.CargoPolitico = CargoPolitico;
        this.CargoPoliticoPariente = CargoPoliticoPariente;
        this.PrestamoATercero = PrestamoATercero;
        this.PagoDeTercero = PagoDeTercero;
        this.Ocupacion = Ocupacion;
        this.NombreEmpleador = NombreEmpleador;
        this.OrigenPagoCredito = OrigenPagoCredito;
        this.OrigenPagoTercero = OrigenPagoTercero;
        this.OrigenPagoOtro = OrigenPagoOtro;
        this.Metodo = Metodo;
        this.MediosOtorgamiento = MediosOtorgamiento;
        this.Destino = Destino;
        this.PropietarioReal = PropietarioReal;
        this.Antecendentes = Antecendentes;
        this.PaisMedidasDeficientes = PaisMedidasDeficientes;
    }
}

class RepresentanteLegalModel {
    ApellidoPaterno = "";
    ApellidoMaterno = "";
    SegundoNombre = "";
    Nombre = "";

    constructor(
        ApellidoPaterno = "",
        ApellidoMaterno = "",
        SegundoNombre = "",
        Nombre = ""
    ) {
        this.ApellidoPaterno = ApellidoPaterno;
        this.ApellidoMaterno = ApellidoMaterno;
        this.SegundoNombre = SegundoNombre;
        this.Nombre = Nombre;
    }
}

class AvalModel
    {
      ClienteID = 0;
      ClienteAvalID = 0;
      TelefonoFisico = "";
      TelefonoCelular = "";
      Correo = "";
      NombreCompleto = "";
      DireccionCompleta = "";
    }


module.exports = {
    ClienteModel, LugarNacimientoModel, ContactoModel,
    DireccionModel, DireccionModel,
    DireccionModel, InformacionAdicionalModel,
    RepresentanteLegalModel, AvalModel
}