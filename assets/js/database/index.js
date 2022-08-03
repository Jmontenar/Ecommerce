const products = [
    { 
    id:1,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Ácido Urico",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 10  
    },
    { 
    id:2,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "ALT-GPT",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200  
    },
    { 
    id:3,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Albúmina",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200  
    },
    { 
    id:4,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Amilasa",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200  
    },
    { 
    id:5,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "AST-GOT",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200  
    },
    { 
    id:6,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Bilirrubina Total",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200  
    },
    { 
    id:7,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Bilirrubina Directa",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200 
    },
    { 
    id:8,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Bilirrubina Indirecta",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200  
    },
    { 
    id:9,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "BUN",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200  
    },
    { 
    id:10,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Calcio Total",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200  
    },
    { 
    id:11,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Calcio Iónico",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200  
    },
    { 
    id:12,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Cloro",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200  
    },
    { 
    id:13,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Colesterol total",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200  
    },
    { 
    id:14,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Colesterol HDL",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200  
    },
    { 
    id:15,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Colesterol LDL",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200  
    },
    { 
    id:16,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "CPK",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200  
    },
    { 
    id:17,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Creatinina",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200  
    },
    {
    id:18,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "LDH",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200 
    },
    {
    id:19,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmatas, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Fosfatasa Alcalina",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200 
    },
    {
    id:20,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmata    s, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Fósforo",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200 
    },
    {
    id:21,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmata    s, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Furctosamina",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200 
    },
    {
    id:22,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmata    s, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "gGT",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200 
    },
    {
    id:23,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmata    s, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Globulina",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200 
    },
    {
    id:24,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmata    s, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Glucosa",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200 
    },
    {
    id:25,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmata    s, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Hemoglobina Glicosilada",
    precio: 1200.0,
    imagen: "./assets/images/TUBO LILA.jpg",
    categoria: "Química Sanguinea",  
    cantidad: 200 
    },
    {
    id:26,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmata    s, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Hierro",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200 
    },
    {
    id:27,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmata    s, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Lipasa",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200 
    },
    {
    id:28,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmata    s, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Potasio",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200 
    },
    {
    id:29,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmata    s, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Proteínas Totales",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200 
    },
    {
    id:30,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmata    s, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Sodio",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200 
    },
    {
    id:31,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmata    s, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Triglicéridos",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200 
    },
    {
    id:32,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmata    s, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Urea",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200 
    },
    {
    id:33,
    info1: "No requiere ayuno estricto.",
    info2: "Durante su metabolismo se convierte en alantoina en el hígado en todas las especies, excepto en los primates inferiores y en dálmata    s, se ha sugiere que su medición es una prueba sensible de función hepática.",
    nombre: "Vitamina B12",
    precio: 1200.0,
    imagen: "./assets/images/TUBO ROJO_.png",
    categoria: "Química Sanguinea",  
    cantidad: 200 
    },

]
export default products