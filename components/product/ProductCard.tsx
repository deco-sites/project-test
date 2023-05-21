import Image from "deco-sites/std/components/Image.tsx";
import Avatar from "deco-sites/fashion/components/ui/Avatar.tsx";
import WishlistIcon from "deco-sites/fashion/islands/WishlistButton.tsx";
import { useOffer } from "deco-sites/fashion/sdk/useOffer.ts";
import { formatPrice } from "deco-sites/fashion/sdk/format.ts";
import { useVariantPossibilities } from "deco-sites/fashion/sdk/useVariantPossiblities.ts";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import { sendEventOnClick } from "deco-sites/fashion/sdk/analytics.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;

  /** @description used for analytics event */
  itemListName?: string;
}

const relative = (url: string) => {
  const link = new URL(url);
  return `${link.pathname}${link.search}`;
};

const WIDTH = 250;

function ProductCard({ product, preload, itemListName }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
    isVariantOf,
  } = product;
  const productGroupID = isVariantOf?.productGroupID;
  const [front, back] = images ?? [];
  const { listPrice, price } = useOffer(offers);
  const possibilities = useVariantPossibilities(product);
  const variants = Object.entries(Object.values(possibilities)[0] ?? {});
  const clickEvent = {
    name: "select_item" as const,
    params: {
      item_list_name: itemListName,
      items: [
        mapProductToAnalyticsItem({
          product,
          price,
          listPrice,
        }),
      ],
    },
  };

  return (
    <div
      class="card card-compact card-bordered border-transparent hover:border-base-200 group w-full"
      data-deco="view-product"
      id={`product-card-${productID}`}
      {...sendEventOnClick(clickEvent)}
    >
      <figure class="relative group/card" style={{ aspectRatio: `1 / 1` }}>
        {/* Wishlist button */}
        <div class="absolute top-0 right-0 z-10">
          <WishlistIcon productGroupID={productGroupID} productID={productID} />
        </div>
        {/* Product Images */}
        <a
          href={url && relative(url)}
          aria-label="view product"
          class="contents"
        >
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={WIDTH}
            class="absolute transition-opacity rounded w-full aspect-square opacity-100 group-hover:opacity-0"
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            decoding="async"
          />
          <Image
            src={back?.url ?? front.url!}
            alt={back?.alternateName ?? front.alternateName}
            width={WIDTH}
            class="absolute transition-opacity rounded w-full aspect-square opacity-0 group-hover:opacity-100"
            loading="lazy"
            decoding="async"
          />
        </a>
        <div class="absolute bottom-0 left-4 flex items-end duration-500 gap-2 group-hover/card:bottom-2 group-hover/card:duration-500">
          <span class="text-sm text-black bg-gray-200 px-1">
            {formatPrice(price, offers!.priceCurrency!)}
          </span>
        </div>
      </figure>
      {/* Prices & Name */}
      <div class="card-body gap-0">
        <h2 class="text-sm font-bold whitespace-nowrap overflow-hidden">{name}</h2>
        <p class="text-sm font-normal text-gray-500 overflow-hidden">{name}</p>
        
      </div>
    </div>
  );
}

export default ProductCard;
