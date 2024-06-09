import React from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { IProduct } from "@/interfaces/products";
import { StarIcon } from "@heroicons/react/24/solid";
import {
  StarIcon as StarIconOutline,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

interface ProductCardProps {
  item: IProduct;
}
const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <Card
      shadow="sm"
      key={item.id}
      isPressable
      onPress={() => console.log("item pressed")}
      className="min-w-[180px] w-full rounded-md"
    >
      <CardBody className="overflow-visible p-0 relative">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={item.title}
          className="w-full object-cover h-[160px] rounded-md"
          src={item.image}
        />
        <Button
          isIconOnly
          className="rounded-full absolute -bottom-2 right-2 z-50 h-6 min-w-6 w-6 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
          color="primary"
        >
          <ShoppingCartIcon className="h-3 w-3" />
        </Button>
      </CardBody>
      <CardFooter className="text-xs grid">
        <p className="font-medium text-left line-clamp-1">{item.title}</p>
        <div className="flex justify-between items-baseline">
          <div className="flex gap-1 items-baseline">
            <p className="text-default-500">${item.price}</p>
            <p className="text-gray-300 line-through text-[10px]">
              ${item.oldPrice}
            </p>
          </div>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index}>
                {index < item.rate ? (
                  <StarIcon key={index} className="h-3 w-3 text-orange-300" />
                ) : (
                  <StarIconOutline
                    key={index}
                    className="h-3 w-3 text-orange-300"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
