export const BASE_URL = process.env.BASE_API_URL!;

export enum APIEndpoints {
   AUTH = "/auth",
   ARTICLES = "/articles",
   USERS = "/users",
   FORUM = "/forum",
   LOGIN = "/login",
   PRODUCTS = "/products",
   CATEGORIES = "/categories",
   GALLERY = "/gallery",
   LIKES = "/likes",
   CREATE = "/create",
   COMMENTS = "/comments",
}

export const parametersRu: {[key: string]: string} = {
   flavor: "Вкус",
   weight: "Вес",
   life_stage: "Этап жизни",
   breed_size: "Размер породы",
   type: "Тип",
   ingredients: "Ингредиенты",
   material: "Материал",
   size: "Размер",
   color: "Цвет",
   toy_type: "Тип",
   recommended_breed: "Для пород(ы)",
   special_feature: "Особенности",
   features: "Особенности",
   adjustable: "Регулируемый"
};
