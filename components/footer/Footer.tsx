import Icon, {
  AvailableIcons,
} from "deco-sites/fashion/components/ui/Icon.tsx";

import Newsletter from "./Newsletter.tsx";
import type { ComponentChildren } from "preact";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Section = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return (
    <div class={` border-none sm:px-0 ${_class}`}>
      {children}
    </div>
  );
}

export interface Props {
  sectionsMobile?: Section[];
  sections2Mobile?: Section[];
  complementInfo?: string;
  sectionsDesktop?: Array<{
    label: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  /**
   * @title Conteúdo Newsletter
   * @default ENTRE PARA O ADICLUB E GANHE 500 PONTOS RESGATÁVEIS
   */
  label: string;
  /**
   * @default CADASTRE-SE GRATUITAMENTE
   */
  textButton: string;
}

function Footer(
  {
    sectionsMobile = [],
    sections2Mobile = [],
    complementInfo,
    sectionsDesktop = [],
    label,
    textButton,
  }: Props,
) {
  return (
    <footer class="w-full bg-black flex flex-col divide-y divide-primary-content lg:bg-white">
      <div>
        <div class=" w-full flex flex-col divide-y divide-primary-content">
          <FooterContainer>
            <Newsletter label={label} textButton={textButton} />
          </FooterContainer>

          <FooterContainer>
            {/* Desktop view */}
            <ul class="hidden lg:flex flex-row gap-20 bg-white w-[80%] mx-auto lg:justify-center lg:mt-6">
              {sectionsDesktop.map((section) => (
                <li>
                  <span class="font-semibold text-lg text-black">
                    {section.label}
                  </span>
                  <ul class="">
                    {section?.children?.map((child) => (
                      <li>
                        <a href={child.href} class="text-xs">{child.label}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            {/* Mobile view */}
            <ul class="w-[90%] mx-auto flex flex-row flex-wrap justify-center gap-[10%] lg:hidden pb-5">
              {sectionsMobile.map((section) => (
                <li class="w-[45%] h-[40px] mt-4 flex justify-center items-center">
                  <a
                    href={section.href}
                    class="w-full text-white text-center text-xs"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterContainer>
        </div>
      </div>

      <div class="w-full">
        <div
          class="container w-full max-w-none"
          style={{ background: "#282c31" }}
        >
          <FooterContainer class="flex flex-col items-center justify-between gap-6 w-full lg:py-1">
            <ul class="w-[90%] mx-auto flex flex-row flex-wrap justify-center items-center gap-[10%] lg:flex-nowrap lg:gap-4">
              {sections2Mobile.map((section) => (
                <li class="w-[45%] h-[40px] mt-4 flex justify-center items-center lg:w-full lg:20px">
                  <a
                    href={section.href}
                    class="w-full text-center text-xs"
                    style={{ color: "#d3d7da" }}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
            <span
              class="w-[90%] h-fit text-white text-center text-xs py-5"
              style={{ color: "#d3d7da" }}
            >
              {complementInfo}
            </span>
          </FooterContainer>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
