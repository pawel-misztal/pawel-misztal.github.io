import { AddTranslations, UseTranslate } from "../utils/translator";
import {motion} from "motion/react";
import { ButtonNavbar } from "./ButtonNavbar";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

AddTranslations([
  {
    id: "moreMe",
    t: { pl: "Chcesz dowiedzieć się więcej?", en: "Want to learn more?" },
  },
  {
    id: "blogInvite",
    t: { pl: "Zapraszam na bloga", en: "I invite you to my blog" },
  },
  {
    id: "contactMeLinkedin",
    t: { pl: "Skontaktuj się przez Linkedin", en: "Contact me via Linkedin" },
  },
]);


export function Footer() {
  const { t } = UseTranslate();

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.4 }}
      className="w-full my-30"
    >
      <h1 className="text-center text-4xl font-bold uppercase py-8">
        {t("moreMe")}
      </h1>

      <div className="flex flex-col w-full items-center py-8">
        {/* <div className="flex flex-row gap-4 items-center">
          <h1 className="text-2xl font-bold py-6">{t("blogInvite")}</h1>
          <div>
            <ButtonNavbar href="#" text="Blog">
              <FaArrowUpRightFromSquare className="h-full" />
            </ButtonNavbar>
          </div>
        </div> */}

        <div className="flex flex-row gap-4 items-center">
          <h1 className="text-2xl font-bold py-6">
            {t("contactMeLinkedin")}
          </h1>
          <div>
            <ButtonNavbar
              blank={true}
              href="https://www.linkedin.com/in/pawe%C5%82misztal/"
              text="Linkedin"
            >
              <FaArrowUpRightFromSquare className="h-full" />
            </ButtonNavbar>
          </div>
        </div>
      </div>
    </motion.div>
  );
}