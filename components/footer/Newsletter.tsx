function Newsletter() {
  return (
    <div
      class="flex flex-col w-full xl:flex-row items-center gap-6 xl:gap-20 h-full py-8 justify-center"
      style={{ background: "#ede734" }}
    >
      <div class="flex flex-col gap-2 max-w-[300px] sm:max-w-[500px] xl:max-w-[100%] ">
        <span class="font-bold text-2xl text-black text-center xl:pl-10">
          ENTRE PARA O ADICLUB E GANHE 500 PONTOS RESGATÁVEIS
        </span>
      </div>
      <div class="flex gap-6 w-max relative bg-black text-white  z-10  justify-between items-center px-7 h-12 mt-1 after:content-[''] after:z-[-1] after:block after:w-full after:h-12 after:border-2 after:border-black after:absolute after:top-1 after:left-1">
        <button>
          CADASTRE-SE GRATUITAMENTE
        </button>
        <span class="text-white text-3xl pb-1">→</span>
      </div>
    </div>
  );
}

export default Newsletter;
