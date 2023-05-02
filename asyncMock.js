const imageProducts = {
  bacardiImg: "./build/img/bacardi",
  cocaImg: "./build/img/coca",
  fernetImg: "./build/img/fernet",
  ganciaImg: "./build/img/gancia",
  jackDanielsImg: "./build/img/jackDaniels",
  termaImg: "./build/img/terma",
  sky: "./build/img/sky",
  absolut: "./build/img/absolute",
  aguaEco: "./build/img/ecoDeLosAndes",
  speed: "./build/img/speed",
  sprite: "./build/img/sprite",
  redBull: "./build/img/redBull",
};
const {
  bacardiImg,
  cocaImg,
  fernetImg,
  ganciaImg,
  jackDanielsImg,
  termaImg,
  sky,
  absolut,
  aguaEco,
  speed,
  sprite,
  redBull,
} = imageProducts;

const products = [
  {
    id: 1,
    name: "Bacardí",
    image: bacardiImg,
    category: true,
    description:
      "Bacardí es una icónica marca de ron, famosa por su calidad y tradición a nivel mundial. Con más de 150 años de historia, su distintiva botella transparente y el símbolo del murciélago en su logotipo, Bacardí se ha convertido en sinónimo de excelencia en la industria del ron.",
    price: 10,
    stock: 10,
  },
  {
    id: 2,
    name: "Coca Cola",
    image: cocaImg,
    category: false,
    description:
      "Coca-Cola es una de las marcas de bebidas más reconocidas y populares a nivel mundial. Fundada en 1886, se ha convertido en un símbolo icónico de la cultura global. Coca-Cola es una bebida gaseosa carbonatada y refrescante que se caracteriza por su sabor dulce y distintivo. Su fórmula secreta, conocida solo por unos pocos empleados de la compañía, combina ingredientes como la cola, la cafeína y diferentes aromatizantes para crear su sabor característico. A lo largo de los años, Coca-Cola ha expandido su línea de productos para incluir variantes sin azúcar, sin cafeína y opciones bajas en calorías para adaptarse a las preferencias cambiantes de los consumidores. Con su distintiva botella de vidrio contorneada y su logotipo rojo y blanco, Coca-Cola ha logrado un éxito duradero y se ha convertido en un símbolo de la felicidad y la alegría compartida en todo el mundo.",
    price: 1.5,
    stock: 84,
  },
  {
    id: 3,
    name: "Fernet",
    image: fernetImg,
    category: true,
    description:
      "Fernet es una bebida amarga y aromática que se ha vuelto muy popular en varios países, especialmente en Argentina e Italia. Con una base de hierbas y especias, el fernet se destaca por su sabor distintivo y su carácter digestivo. Puede disfrutarse solo o como ingrediente en cócteles, y su popularidad ha crecido en los últimos años debido a su sabor único y su versatilidad en la mixología.",
    price: 5.5,
    stock: 55,
  },
  {
    id: 4,
    name: "Gancia",
    image: ganciaImg,
    category: true,
    description:
      "Gancia es una reconocida marca de bebidas, especialmente conocida por su variedad de aperitivos y vermut. Con una larga historia que se remonta a 1850, Gancia se ha convertido en sinónimo de calidad y sofisticación. Sus productos se caracterizan por su sabor equilibrado y suaves aromas, que los hacen ideales para disfrutar solos o en cócteles. Gancia ha logrado mantener su estatus como una marca de confianza en el mundo de los aperitivos y continúa siendo una elección popular para los amantes de las bebidas refinadas.",
    price: 3.1,
    stock: 16,
  },
  {
    id: 5,
    name: "Jack Daniel`s",
    image: jackDanielsImg,
    category: true,
    description:
      "Jack Daniel's es una renombrada marca de whiskey originaria de Tennessee, Estados Unidos. Fundada en 1866, se ha convertido en un referente de calidad y tradición en la industria del whiskey. Con su distintivo proceso de destilación en carbón de arce y su envejecimiento en barriles de roble, Jack Daniel's ofrece un sabor suave y distintivo con notas de caramelo, vainilla y especias. Es apreciado tanto por los conocedores del whiskey como por aquellos que buscan disfrutar de una experiencia única en cada sorbo.",
    price: 26.1,
    stock: 29,
  },
  {
    id: 6,
    name: "Terma",
    image: termaImg,
    category: false,
    description:
      "Terma es una reconocida marca de bebidas refrescantes y sin category, originaria de Argentina. Desde su lanzamiento en 1936, se ha posicionado como una opción refrescante y de calidad para los consumidores. Con una amplia variedad de sabores como pomelo, manzana y limón, Terma ofrece una experiencia refrescante y deliciosa, ideal para disfrutar en cualquier momento del día. Su popularidad ha crecido a lo largo de los años convirtiéndola en una marca icónica dentro del mercado de bebidas sin category en Argentina.",
    price: 0.85,
    stock: 33,
  },
  {
    id: 7,
    name: "Sky Coconut",
    image: sky,
    category: true,
    description:
      "Sky Coconut es una exquisita bebida de coco con category, que combina el sabor tropical del coco con la suavidad y la frescura de una bebida espirituosa. Con su aroma embriagador y su sabor dulce y refrescante, Sky Coconut se ha convertido en una opción popular para aquellos que buscan una experiencia tropical y divertida. Perfecto para disfrutar solo, con hielo o como ingrediente en cócteles, Sky Coconut ofrece un escape instantáneo a un paraíso tropical con cada sorbo.",
    price: 6,
    stock: 21,
  },
  {
    id: 8,
    name: "Absolut",
    image: absolut,
    category: true,
    description:
      "Absolut es una reconocida marca de vodka de origen sueco, famosa por su calidad y su distintiva botella de vidrio transparente. Con una historia que se remonta a más de 140 años, Absolut se ha ganado un lugar destacado en la industria de las bebidas alcohólicas. Destacado por su sabor suave y su proceso de destilación continua, Absolut ofrece una amplia variedad de sabores y se ha convertido en una elección popular tanto para beber solo como para mezclar en cócteles creativos.",
    price: 17,
    stock: 7,
  },
  {
    id: 9,
    name: "Eco de los Andes",
    image: aguaEco,
    category: false,
    description:
      "Eco de los Andes es una reconocida marca de agua mineral natural proveniente de los majestuosos Andes argentinos. Con una pureza y frescura excepcionales, Eco de los Andes ofrece una experiencia de hidratación única. Su agua cristalina y libre de aditivos se caracteriza por su suavidad y su equilibrio mineral, proporcionando una sensación refrescante y revitalizante. Eco de los Andes se destaca por su compromiso con la sustentabilidad y la protección del medio ambiente, convirtiéndola en una elección consciente para aquellos que valoran la pureza y la procedencia natural del agua.",
    price: 1.05,
    stock: 16,
  },
  {
    id: 10,
    name: "Speed",
    image: speed,
    category: false,
    description:
      "Speed es una popular bebida energética que ofrece una rápida y estimulante dosis de energía. Con una combinación de ingredientes como la cafeína, taurina y vitaminas, Speed proporciona un impulso de energía y alerta mental para aquellos momentos en los que se necesita un aumento de rendimiento. Su sabor refrescante y enérgico lo convierte en una opción favorita para aquellos que buscan mantenerse activos y alerta durante el día o en situaciones de alto desgaste físico.",
    price: 1,
    stock: 39,
  },
  {
    id: 11,
    name: "Sprite",
    image: sprite,
    category: false,
    description:
      "Sprite es una refrescante bebida gaseosa con sabor a limón-lima que se ha convertido en una marca icónica a nivel mundial. Con su característico color transparente y burbujeante, Sprite ofrece un sabor refrescante y cítrico que brinda una sensación de frescura instantánea. Es conocido por su carácter ligero y su ausencia de cafeína, lo que lo convierte en una opción popular para aquellos que buscan una bebida refrescante sin la estimulación adicional. Sprite es una opción refrescante para acompañar comidas, refrescarse en días calurosos o simplemente disfrutar como una bebida refrescante en cualquier momento.",
    price: 1.5,
    stock: 33,
  },
  {
    id: 12,
    name: "Red Bull",
    image: redBull,
    category: false,
    description:
      "Red Bull es una reconocida bebida energética que proporciona un impulso de energía instantáneo. Con su característica lata azul y plateada, Red Bull combina ingredientes como la cafeína, la taurina y las vitaminas para estimular la atención y el rendimiento físico y mental. Es ampliamente consumida por deportistas y personas que buscan un aumento de energía durante actividades exigentes o periodos de cansancio. Red Bull se ha convertido en sinónimo de vitalidad y energía en todo el mundo.",
    price: 1.03,
    stock: 29,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === id));
    }, 1000);
  });
};
