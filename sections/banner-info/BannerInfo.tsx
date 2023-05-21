import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  srcMobile: LiveImage;
  srcDesktop?: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
}

export interface Props {
  title?: string;
  /**
   * @description Default is 2 for mobile and all for desktop
   */
  description?: string;
  colorText: "Black" | "White";
  labelButton?: string;
  colorButon: "Black" | "White";
  href?: string;
  banner: Banner;
}

const COLORTEXT = {
    "Black": "text-black",
    "White": "text-white",
}
const COLOR_BUTTON_TEXT = {
    "Black": "text-white",
    "White": "text-black",
}
const COLOR_BUTTON = {
    "Black": "bg-black after:border-black",
    "White": "bg-white after:border-white",
}
export default function BannnerInfo({
  title,
  description,
  colorText,
  labelButton,
  href,
  colorButon,
  banner,
}: Props) {
  return (
    <section class="w-full relative">
        <Picture>
            <Source
            media="(max-width: 767px)"
            src={banner.srcMobile}
            width={500}
            />
            <Source
            media="(min-width: 768px)"
            src={banner.srcDesktop ? banner.srcDesktop : banner.srcMobile}
            width={1920}
            />
            <img class="w-full" sizes="(max-width: 640px) 100vw, 30vw" src={banner.srcMobile} alt={banner.alt} decoding="async" loading="lazy"/>
        </Picture>
        <div class="absolute w-[90%] flex flex-col bottom-8 px-4 md:bottom-[40%] md:w-[50%] lg:pl-20">
            <h2 class={`text-3xl ${COLORTEXT[colorText ?? "Black"]} font-semibold uppercase`}>{title}</h2>
            <p class={`text-lg ${COLORTEXT[colorText ?? "Black"]}`}>{description}</p>
            <a href={`${href}`} class={`relative z-10 flex justify-between items-center pl-2 ${COLOR_BUTTON_TEXT[colorButon ?? "Black"]} w-52 h-12 mt-1 after:content-[''] after:z-[-1] after:block after:w-full after:h-12 ${COLOR_BUTTON[colorButon ?? "Black"]} after:border-2 after:absolute after:top-1 after:left-1`}>
                {labelButton}
                <span class={`mr-3 text-3xl ${COLOR_BUTTON_TEXT[colorButon ?? "Black"]} pb-1`}>→</span>    
            </a>
        </div>
        
    </section>
  );
}
