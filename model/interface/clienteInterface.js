  export interface Cliente {
    TipoFigura: string;
    ApellidoPaterno: string;
    ApellidoMaterno: string;
    PrimerNombre: string;
    SegundoNombre: string;
    FechaDeNacimiento: string;
    RFC: string;
    CURP: string;
    Nacionalidad: string;
    Genero: string;
    EstadoCivil: string;
    LugarNacimiento: LugarNacimiento;
    Direccion: Direccion;
    Contacto: Contacto;
    InformacionAdicional: InformacionAdicional;
    RegimenFiscal: string;
    RazonSocial: string;
    FiguraJuridica: string;
    FechaConstitucion: string;
    RepresentanteLegal: RepresentanteLegal;
    ActividadEconomica: string;
    Identificacion: string;
    NumeroDocumento: string;
  }
  
  export interface RepresentanteLegal {
    ApellidoPaterno: string;
    ApellidoMaterno: string;
    SegundoNombre: string;
    Nombre: string;
  }
  
  export interface InformacionAdicional {
    ParentescoSofom: string;
    CargoPolitico: string;
    CargoPoliticoPariente: string;
    PrestamoATercero: string;
    PagoDeTercero: string;
    Ocupacion: string;
    NombreEmpleador: string;
    OrigenPagoCredito: string;
    OrigenPagoTercero: string;
    OrigenPagoOtro: string;
    Metodo: string;
    MediosOtorgamiento: string;
    Destino: string;
    PropietarioReal: string;
    Antecendentes: string;
    PaisMedidasDeficientes: string;
  }
  
  export interface Contacto {
    TelefonoFisico: string;
    TelefonoCelular: string;
    TelefonoOtro: string;
    Correo: string;
  }
  
  export interface Direccion {
    CodigoPostal: string;
    Pais: string;
    Estado: string;
    Municipio: string;
    Ciudad: string;
    Colonia: string;
    Calle: string;
    NumeroExterior: string;
    NumeroInterior: string;
    Referencia: string;
  }
  
  export interface LugarNacimiento {
    Pais: string;
    Estado: string;
  }