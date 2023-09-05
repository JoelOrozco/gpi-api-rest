export interface ClientesIn {
	Cliente: Cliente
};

export interface Cliente  {
	ClienteIn: ClienteIn
};

export interface ClienteIn {
	DatosGenerales: DatosGenerales
	DatosEconomicos: DatosEconomicos;
	DatosAdicionales: DatosAdicionales;
	DatosComplementarios: DatosComplementarios; 
	InformacionBancaria: InformacionBancaria
	PersonasMorales: PersonasMorales;
	DatosLaborales: DatosLaborales;
};

export interface DatosGenerales {
	ClaveAdicional: string;
	Personalidad: string;
	NombreCliente: string;
	ApellidoPaterno: string;
	ApellidoMaterno: string;
	RazonSocial: string;
	Direccion: string;
	NoExterior: string;
	NoInterior: string;
	CodigoPostal: string;
	EntreCalle1: string;
	EntreCalle2: string;
	Estado: string;
	Municipio: string;
	Poblacion: string;
	Colonia: string;
	Zona1: string;
	Zona2: string;
	Zona3: string;
	PaisNacionalidad: string;
	EstadoNacimiento: string;
	FechaNacimiento: string;
	Sexo: string;
	RFC: string;
	CURP: string;
	EstadoCivil: string;
	TpoIdentificacion: string;
	FolioIdentificacion: string;
	TelefonoCasa: string;
	TelefonoCelular: string;
	Email1: string;
	Email2: string;
	Aspirante: string;
	Status: string
};

export interface DatosEconomicos {
	ArraigoLocalidadAnios: string;
	ArraigoLocalidadMeses: string;
	ArraigoDomicilioAnios: string;
	ArraigoDomicilioMeses: string;
	Vivienda: string;
	ValorVivienda: string;
	DependientesEconomicos: string;
	BaseIngreso: string;
	Ingresos: string;
	Egresos: string;
	OtrosIngresos: string;
	OtrosEgresos: string;
	IngresoConyugue: string;
	GastoFamiliar: string
};

export interface DatosAdicionales {
	NombrePersonaRecados: string;
	TelRecados: string;
	DomicilioCorrespondencia: string;
	CoordenadasGeograficas: string
};

export interface DatosComplementarios {
	Ocupacion: string;
	GradoEstudios: string;
	TipoAgrupacion: string;
	ClienteRelacionado: string;
	TipoRelacion: string;
	PerteneceEtnia: string;
	NoHijosSinEstudiar: string;
	NoHijosPreescolar: string;
	NoHijosPrimaria: string;
	NoHijosSecundaria: string;
	NoHijosPreparatoria: string;
	NoHijosUniversidad: string;
	Ejido: string;
	Superficietotal: string;
	SuperficieVerano: string;
	SuperficieOtonio: string
};

export interface InformacionBancaria {
	Banco: string;
	Plaza: string;
	Sucursal: string;
	UbicacionBanco: string;
	TipoCuenta: string;
	NumeroCuenta: string;
	ClabeInterbancaria: string;
	DomiciliarPago: string;
	DomiciliarDispersion: string
};

export interface PersonasMorales {
	DatosConstitucion: string;
	DatosPoder: string
};

export interface DatosLaborales {
	NombreEmpresa:string;
	TipoTrabajo: string;
	RFC: string;
	Direccion: string;
	NoExterior: string;
	NoInterior: string;
	CodigoPostal: string;
	EntreCalle1: string;
	EntreCalle2: string;
	Pais: "MEXICO";
	Estado: string;
	Municipio: string;
	Poblacion: string;
	Colonia: string;
	Giro: string;
	Actividad: string;
	Telefono: string;
	JefeInmediato: string;
	Antiguedad: string;
	Puesto: string;
	SueldoMensual: string;
	DatosConstitucion: string
}
