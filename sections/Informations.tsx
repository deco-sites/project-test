export interface Props {
  title: string;
}

export default function Informations({ title }: Props) {
  return (
    <div class="bg-red-900 w-full text-center p-2">
      <span class="text-white text-lg font-bold">{title}</span>
    </div>
  );
}
