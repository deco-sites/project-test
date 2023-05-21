export interface AboutUsItems {
  title: string;
  text: string;
}

export interface Props {
  /** @maxItems 2*/
  aboutUsItems: AboutUsItems[];
}

export default function FindYourTeam({
  aboutUsItems,
}: Props) {
  return (
    <section
      class="w-full h-fit py-5 flex flex-col items-center gap-8 lg:flex-row lg:justify-center"
      style={{ background: "#f5f5e5" }}
    >
      {aboutUsItems.map((item) => (
        <div class="w-[90%] h-fit flex flex-col gap-3 lg:w-[40%]">
          <div class="w-[70%]">
            <h1 class="text-3xl text-black font-bold">{item.title}</h1>
          </div>
          <div>
            <p class="text-base">{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
