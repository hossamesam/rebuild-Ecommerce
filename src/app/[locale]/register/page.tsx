import { useTranslations } from "next-intl";
import React from "react";
import { FormEvent } from "react";
import LoginTransleate from "./loginTransleate";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function logintrans({
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const t = useTranslations("SignUp");

  return (
    <>
      <LoginTransleate
        dir={t("dir")}
        signUp={t("Login")}
        join={t("join")}
        signUpGoogle={t("signUp-google")}
        signUpEmail={t("signUp-email")}
        haveAccount={t("have-account")}
        email={t("email")}
        password={t("password")}
        LoginHere={t("Login-here")}
        login={t("username")}
        firstName={t("firstName")}
        lastName={t("lastName")}
        langKey={locale}
      />
    </>
  );
}
