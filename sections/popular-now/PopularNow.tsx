export interface PopularItems {
  /**
   * @title Item Name
   */
  label: string;
  href: string;
}

export interface Props {
  /**
   * @title Título Seção
   */
  /**
   * @default POPULAR AGORA
   */
  title: string;
  popularItems: PopularItems[];
}

export default function FindYourTeam({
  title,
  popularItems,
}: Props) {
  return (
    <section class="w-full h-fit py-[30px] flex flex-col justify-center items-center gap-2">
      <div class="w-full flex justify-start items-center px-4">
        <span class="font-bold text-xl text-black">{title}</span>
      </div>
      <div class="w-full h-fit px-4 flex flex-col items-start gap-4 lg:flex-row lg:flex-wrap lg:gap-[5%] lg:gap-y-[30px]">
        {popularItems.map((item) => (
          <a href={item.href} class="w-full h-fit py-2 flex justify-start items-center border-b-[1px] border-black lg:w-[30%]">
            <span class="text-3xl font-bold text-black">{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
