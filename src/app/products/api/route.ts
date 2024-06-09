import { ICategory, IProduct } from "@/interfaces/products";
import { category, gender, color } from "@/mocks/category";
import { el, faker } from "@faker-js/faker";

function getRandomSubset(array: ICategory[]) {
  const length = Math.floor(Math.random() * array.length) + 1;
  const subset: ICategory[] = [];
  const usedIndices = new Set();

  while (subset.length < length) {
    const index = Math.floor(Math.random() * array.length);
    if (!usedIndices.has(index)) {
      usedIndices.add(index);
      subset.push(array[index]);
    }
  }
  return subset;
}
function createRandomProduct(): IProduct {
  const price = faker.commerce.price();
  return {
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    price: Number(price),
    oldPrice: Number(price) + Math.floor(Math.random() * 1000),
    description: faker.commerce.productDescription(),
    category: getRandomSubset(category),
    gender: getRandomSubset(gender),
    color: getRandomSubset(color),
    image: faker.image.url(),
    rate: Math.floor(Math.random() * 5) + 1,
    created_at: faker.date.recent().toISOString(),
  };
}

function generateProducts(): IProduct[] {
  return new Array(50).fill(null).map(createRandomProduct);
}
export async function GET(request: Request) {
  const product: IProduct[] = generateProducts();
  return Response.json({ product });
}
