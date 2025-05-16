import { CakeFlavor, CakeTopping, CakeDecoration } from '../types';

export const cakeFlavors: CakeFlavor[] = [
  {
    id: 1,
    name: 'Cenoura',
    description: 'Bolo de cenoura macio e úmido, perfeito para qualquer ocasião.',
    image: 'https://storage.googleapis.com/imagens_videos_gou_cooking_prod/production/mesas/2015/05/8eff8005-bolo-de-cenoura-fofinho.jpg',
    category: 'flavor',
  },
  {
    id: 2,
    name: 'Fubá',
    description: 'Bolo de fubá tradicional com um toque de erva-doce.',
    image: 'https://p2.trrsf.com/image/fget/cf/942/530/images.terra.com/2023/01/15/2080173883-bolo-fuba-requeijao-cremoso.jpg',
    category: 'flavor',
  },
  {
    id: 3,
    name: 'Mandioca',
    description: 'Bolo de mandioca com coco, macio e cheio de sabor.',
    image: 'https://www.receiteria.com.br/wp-content/uploads/bolo-de-aipim-capa.jpeg',
    category: 'flavor',
  },
  {
    id: 4,
    name: 'Chocolate',
    description: 'Bolo de chocolate intenso e irresistível.',
    image: 'https://receitadaboa.com.br/wp-content/uploads/2024/12/bolo-de-chocolate.jpg',
    category: 'flavor',
  },
  {
    id: 5,
    name: 'Iogurte',
    description: 'Bolo de iogurte leve e fofo, com uma textura perfeita.',
    image: 'https://s2-receitas.glbimg.com/IUGSxGjbUTDqrZVO58uG340qSmE=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/n/v/7YBZVLRUeYgAF6LcCjBQ/bolo-de-iogurte-natural.jpg',
    category: 'flavor',
  },
  {
    id: 6,
    name: 'Laranja',
    description: 'Bolo de laranja cítrico e refrescante.',
    image: 'https://receitadaboa.com.br/wp-content/uploads/2024/09/bolo-de-laranja-fit.jpg',
    category: 'flavor',
  },
  {
    id: 7,
    name: 'Limão',
    description: 'Bolo de limão com uma cobertura levemente azeda e doce.',
    image: 'https://receitasdoclau.com.br/wp-content/uploads/2025/01/bolo-de-limao-com-iogurte-sem-gluten-compressed.jpg',
    category: 'flavor',
  },
  {
    id: 8,
    name: 'Red Velvet',
    description: 'Bolo vermelho aveludado com um sabor único e sofisticado.',
    image: 'https://s2-receitas.glbimg.com/DxZTy6kfkQiQp3S9kWZSaCMn32U=/0x0:620x385/984x0/smart/filters:strip_icc()/g.glbimg.com/og/gs/gsat5/f/thumbs/materia/2015/03/27/Red_velvet.jpg',
    category: 'flavor',
  },
  {
    id: 9,
    name: 'Formigueiro',
    description: 'Bolo tradicional com chocolate granulado, lembrando a infância.',
    image: 'https://s2-receitas.glbimg.com/znhO2E2Sbp9-YtVMoBIMI8hX_wM=/0x0:1351x903/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/2/N/cxwlHPQNAKcj4ASo9zjQ/formigueiro.jpg',
    category: 'flavor',
  },
];

export const cakeToppings: CakeTopping[] = [
  {
    id: 1,
    name: 'Chocolate',
    description: 'Cobertura de chocolate ao leite, cremosa e brilhante.',
    image: 'https://s2-receitas.glbimg.com/ePOTVoHG8Afosk173HdjTkMjWMM=/0x0:3375x1900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/i/6/86S5bBSCSTDlli80shGw/capa-materias-site.jpg',
    category: 'topping',
  },
  {
    id: 2,
    name: 'Leite Ninho',
    description: 'Cobertura cremosa de leite ninho, doce e irresistível.',
    image: 'https://i.ytimg.com/vi/JJxSYbsm0lY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB1H3-P-CJH1pMqV6yJHs2joIyp5w',
    category: 'topping',
  },
  {
    id: 3,
    name: 'Creme Branco',
    description: 'Cobertura branca suave e sofisticada.',
    image: 'https://www.receiteria.com.br/wp-content/uploads/creme-branco-doce.jpeg',
    category: 'topping',
  },
  {
    id: 4,
    name: 'Brigadeiro',
    description: 'Cobertura de brigadeiro tradicional, cremosa e envolvente.',
    image: 'https://static.itdg.com.br/images/auto-auto/a4f5d6d835d5a5522c64ef77aa9672ef/shutterstock-1470291161.jpg',
    category: 'topping',
  },
   {
    id: 5,
    name: 'Doce de Leite',
    description: 'Cobertura de doce de leite saborosa.',
    image: 'https://pubimg.band.uol.com.br/files/4033d2817335583545b6.png',
    category: 'topping',
  },
];

export const cakeDecorations: CakeDecoration[] = [
  {
    id: 1,
    name: 'Granulado Preto',
    description: 'Granulado de chocolate para uma decoração clássica.',
    image: 'https://cdn.awsli.com.br/600x450/2498/2498910/produto/266179086/granulado-crocante-chocolate-granel-bela-cerealista-9zyums3ahf.jpg',
    category: 'decoration',
  },
  {
    id: 2,
    name: 'Granulado Colorido',
    description: 'Granulado colorido para bolos mais alegres e festivos.',
    image: 'https://cdn.awsli.com.br/600x450/2498/2498910/produto/266177566/granulado-crocante-colorido-mavalerio-granel-bela-cerealista-wjn5v7uayh.jpg',
    category: 'decoration',
  },
  {
    id: 3,
    name: 'Confete',
    description: 'Confetes de chocolate coloridos para decoração divertida.',
    image: 'https://www.cestasefestas.com.br/wp-content/uploads/2022/09/confete-chocolate-colorido-sortido-disqueti-coloreti-jujuba-m-m-disqueti02.png',
    category: 'decoration',
  },
  {
    id: 4,
    name: 'Coco Ralado',
    description: 'Coco ralado fresco para um toque tropical.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmnrUnrbWre7rCLplCScaILEVqmt8yESg6A&s',
    category: 'decoration',
  },
  {
    id: 5,
    name: 'Raspas de Chocolate',
    description: 'Raspas de chocolate para uma decoração sofisticada.',
    image: 'https://cristalalimentos.com.br/wp-content/uploads/2017/11/raspas4.jpg',
    category: 'decoration',
  },
  {
    id: 6,
    name: 'Chantilly',
    description: 'Chantilly leve e aerado para um toque elegante.',
    image: 'https://images.pexels.com/photos/4686826/pexels-photo-4686826.jpeg',
    category: 'decoration',
  },
  {
    id: 7,
    name: 'Frutas',
    description: 'Seleção de frutas frescas da estação.',
    image: 'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg',
    category: 'decoration',
  },
];