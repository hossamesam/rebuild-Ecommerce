import { z } from "zod";

export type MyShoping = [{ id: number; count: number }];
export type MyShopingDataCount = [{ data: MyShopingData; count: number }];
export type MyShopingData = {
  attributes: {};
  barcode: string;
  category: { id: number; attributes: [] };
  colors: [{ id: number }];
  description: string;
  descriptionTranslate: { en: string };
  id: string;
  nameAr: string;
  nameTranslate: { en: string };
  sellPrice: number;
  sizes: [];
};
export type StatusType = {
  Status: "Success" | "Error" | "Warning";
  Text: string;
};
export interface nav {
  createProduct: string;
  createPolicy: string;
  menu: string;
  home: string;
  signIn: string;
  ShoppingCar: string;
  mens: string;
  women: string;
  baby: string;
  shoes: string;
  local: string;
  signup: string;
  descriptionsignUp: string;
  Login: string;
  descriptionLogin: string;
}

export type MenuTypes = {
  createPolicy: string;
  createProduct: string;
  local: string;
  signIn: string;
  ShoppingCar: string;
  mens: string;
  women: string;
  baby: string;
  shoes: string;
};
export type signIn = {
  signIn: string;
  signup: string;
  descriptionsignUp: string;
  Login: string;
  descriptionLogin: string;
  locale: string;
};

export const signupSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Username must be at least 2 characters" })
    .max(15, { message: "Username must be maximum 15 characters." }),
  rememberMe: z.boolean().default(false),
  password: z 
    .string()
    .min(4, { message: "password must be at least 2 characters" })
    .max(15, { message: "password must be maximum 15 characters." }),
});
export const policeSchema = z.object({
  policeName: z
    .string()
    .max(15, { message: "policeName must be at least 2 characters" }),
  policeDescription: z
    .string()
    .max(15, { message: "policeDescription must be at least 2 characters" }),
});

export type FormData = z.infer<typeof signupSchema>;
export type categoriesType = [
  {
    id: number;
    code: string;
    nameAr: string;
    nameTranslate: {
      en: string;
    };
    attributes: [];
    parent: {
      id: number;
      attributes: [];
    };
    level: number;
  }
];
