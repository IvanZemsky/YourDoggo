import { categories } from "@/data/categories";

export const findProductCategory = (categoryName: string): string => {
   const productCategory = categories.find((categoryData) => categoryData.name === categoryName);
   if (productCategory) {
      return productCategory.value
   } else {
      return "другое"
   }
}