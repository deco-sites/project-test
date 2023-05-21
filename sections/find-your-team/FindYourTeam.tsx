import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Banner {
  /**
   * @title Image
   */
  srcImage: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
  href: string;
}

export interface Props {
  /**
   * @default Encontre seu time
   */
  title: string;
  banner: Banner[];
}

export default function FindYourTeam({
  title,
  banner,
}: Props) {
  return (
    <section
      class="w-full h-fit py-[30px] flex flex-col justify-center items-center gap-2"
      style={{ background: "#ebedee" }}
    >
      <div class="w-full flex justify-start items-center px-4 lg:justify-center">
        <span>{title}</span>
      </div>
      <div class="w-full h-fit px-2 overflow-x-scroll flex items-center gap-5 lg:justify-center lg:overflow-hidden">
        {banner.map((item) => (
          <a href={item.href} class="w-[50px] h-[50px]">
            <Image
              width={50}
              height={40}
              src={item.srcImage}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              class="max-w-none"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
