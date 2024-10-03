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
  signIn:string,
  ShoppingCar:string,
  mens:string,
  women:string,
  baby:string,
  shoes:string,
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
    .max(15, { message: "username must be at least 2 characters" }),
  rememberMe: z.boolean().default(false),
  password: z.string(),
});
export type FormData = z.infer<typeof signupSchema>;
