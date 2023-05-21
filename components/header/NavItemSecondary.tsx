export interface INavItemSecondary {
  label: string;
  href: string;
}

function NavItemSecondary({ item }: { item: INavItemSecondary }) {
  const { href, label } = item;

  return (
    <li class="group flex items-center">
      <a href={href} class="px-[10px] py-0">
        <span class="group-hover:underline text-xs">
          {label}
        </span>
      </a>
    </li>
  );
}

export default NavItemSecondary;
