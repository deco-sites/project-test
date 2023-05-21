import Searchbar from "deco-sites/fashion/islands/HeaderSearchbar.tsx";
import Buttons from "deco-sites/fashion/islands/HeaderButton.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import NavItem from "./NavItem.tsx";
import NavItemSecondary from "./NavItemSecondary.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { INavItemSecondary } from "./NavItemSecondary.tsx";
import type { Props as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";

function Navbar({ items, searchbar, itemsSecondary }: {
  items: INavItem[];
  searchbar: SearchbarProps;
  itemsSecondary: INavItemSecondary[];
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden grid grid-cols-[2fr_1fr_2fr] border-b border-base-200 w-full pl-2 pr-6 gap-2"
      >
        <div class="flex justify-start items-center gap-3">
          <Buttons variant="menu" />
          <a
            class="btn btn-square btn-ghost"
            href="/wishlist"
            aria-label="Wishlist"
          >
            <Icon
              id="Heart"
              size={20}
              strokeWidth={2}
              fill="none"
            />
          </a>
        </div>
        <div class="flex justify-center items-center">
          <a
            href="/"
            class="w-[50px] flex justify-center items-center"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            <Icon id="Logo" width={150} height={30} />
          </a>
        </div>
        <div class="flex justify-end items-center gap-5">
          <a
            class="w-[25px] btn btn-square btn-ghost"
            href="/login"
            aria-label="Log in"
          >
            <Icon id="User" width={25} height={25} strokeWidth={0.4} />
          </a>
          <Buttons variant="search" />
          <Buttons variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6">
        <div class="flex-none w-44">
          <a href="/" aria-label="Store logo" class="block px-4 py-3 w-[160px]">
            <Icon id="Logo" width={180} height={40} />
          </a>
        </div>
        <div class="w-full flex flex-col">
          <div class="flex justify-end">
            {itemsSecondary.map((item) => <NavItemSecondary item={item} />)}
          </div>
          <div class="w-full flex">
            <div class="w-full flex-auto flex justify-center">
              {items.map((item, index) => <NavItem item={item} />)}
            </div>
            <div class="flex items-center justify-end gap-2">
              <Buttons variant="search" />
              <Searchbar searchbar={searchbar} />
              <a
                class="btn btn-square btn-ghost"
                href="/login"
                aria-label="Log in"
              >
                <Icon id="User" width={20} height={20} strokeWidth={0.4} />
              </a>
              <a
                class="btn btn-square btn-ghost"
                href="/wishlist"
                aria-label="Wishlist"
              >
                <Icon
                  id="Heart"
                  size={20}
                  strokeWidth={2}
                  fill="none"
                />
              </a>
              <Buttons variant="cart" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
