import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Banner {
  srcImage: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description Adicione um link
   */
  href?: string;
}
export interface DivColumn {
  bannerIMG: Banner;
  subtitle?: string;
  descricao?: string;
  link?: string;
}

export interface Props {
  title?: string;

  /**
   * @description Aplique borda a sua imagem
   */
  /** @maxItems 4*/
  divColumn: DivColumn[];
}

export default function BannnerGrid({
  title,
  divColumn = [],
}: Props) {
  return (
    <section class="w-full px-2 mx-auto md:px-10 2xl:px-[7vw] 2xl:max-w-[1780px]">
      <div class="py-6 md:py-0 md:pb-[40px] flex items-start mt-6 flex-col">
        <h2 class="text-[36px] font-normal lg:text-[60px] text-left">
          {title}
        </h2>
      </div>
      <div class="flex w-full gap-4 overflow-scroll lg:overflow-visible">
        {divColumn.map(({ bannerIMG, subtitle, descricao, link }) => (
          <div class="flex flex-col basis-full">
            <a
              href={bannerIMG?.href}
              class={`overflow-hidden`}
            >
              <Image
                width={300}
                src={bannerIMG?.srcImage}
                alt={bannerIMG?.alt}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                class="max-w-none w-56 lg:w-[100%] lg:max-w-sm aspect-[3/4]"
              />
            </a>
            <div className="flex flex-col mt-3 min-h-[130px]">
              <h3 class="font-bold text-base">{subtitle}</h3>
              <p class="text-sm">{descricao}</p>
              <a
                class="h-full flex items-end font-bold underline"
                href={`${bannerIMG?.href}`}
              >
                {link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
