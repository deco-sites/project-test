import Modals from "deco-sites/fashion/islands/HeaderModals.tsx";
import type { Image } from "deco-sites/std/components/types.ts";
import type { EditableProps as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";
import type { Props as CartProps } from "deco-sites/project-test/components/minicart/Cart.tsx";

import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";

export interface NavItem {
  label: string;
  boldText?: boolean;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: Image;
    alt?: string;
  };
}

export interface NavItemSecondary {
  label: string;
  href: string;
}

export interface Props {
  alerts: string[];
  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];

  /**
   * @title Navigation items - secondary
   * @description Secondary navigation items used on desktop menus on the right side.
   */
  navItemsSecondary?: NavItemSecondary[];

  /**
   * @title Product suggestions
   * @description Product suggestions displayed on search
   */
  products?: LoaderReturnType<Product[] | null>;

  /**
   * @title Enable Top Search terms
   */
  suggestions?: LoaderReturnType<Suggestion | null>;

  cart: CartProps;
}

function Header(
  {
    alerts,
    searchbar: _searchbar,
    products,
    navItems = [],
    navItemsSecondary = [],
    suggestions,
    cart
  }: Props,
) {
  const searchbar = { ..._searchbar, products, suggestions };
  return (
    <>
      <header style={{ height: headerHeight }}>
        <div class="bg-base-100 fixed w-full z-50">
          <Alert alerts={alerts} />
          <Navbar
            items={navItems}
            searchbar={searchbar}
            itemsSecondary={navItemsSecondary}
          />
        </div>

        <Modals
          menu={{ items: navItems }}
          searchbar={searchbar}
          cart={cart}
        />
      </header>
    </>
  );
}

export default Header;
