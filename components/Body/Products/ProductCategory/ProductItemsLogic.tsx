import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { ProductsInfoObj } from "../../../../pages/[products]";
import ProductItems from "./ProductItems";
let currentRandomNumberObj: any = {};
let objLength: number = 0;
let i: number = 0;
let hasNumbers: boolean = false;
const randomNumbersArr: any[] = [];
let hasObject: any;

const ProductItemsLogic: React.FC<{
  items: ProductsInfoObj;
  allProductsLength: number;
}> = (props) => {
  const { query } = useRouter();
  const { items, allProductsLength } = props;
  const pathname = query.products;

  useEffect(() => {
    currentRandomNumberObj = {};
    objLength = 0;
    i = 0;
  }, [pathname]);

  function calcRandomNumber(): string {
    hasObject = randomNumbersArr.find((obj) => obj.path === pathname);
    if (hasObject) {
      hasNumbers = true;
      currentRandomNumberObj = hasObject;
      objLength = Object.keys(currentRandomNumberObj).length;
    } else if (!hasObject) {
      hasNumbers = false;
      currentRandomNumberObj.path = pathname;
    }

    if (hasNumbers) {
      const randomNo = currentRandomNumberObj[i.toString()];
      i++;
      return randomNo;
    }

    function commaSeparated(randomNumber: string): string {
      const commaSeparated = randomNumber.split("");
      if (randomNumber.length > 4) {
        commaSeparated.splice(2, 0, ",");
      } else {
        commaSeparated.splice(1, 0, ",");
      }
      const commaSeparatedNumber = commaSeparated.join("");
      return commaSeparatedNumber;
    }

    if (!hasNumbers) {
      if (items.isBestSeller) {
        const randomNumberBestSeller: string = Math.trunc(
          Math.random() * (30000 - 10000 + 1) + 10000
        ).toString();
        const commaSeparatedNumber = commaSeparated(randomNumberBestSeller);
        currentRandomNumberObj[i.toString()] = commaSeparatedNumber;
        i++;
        return commaSeparatedNumber;
      } else {
        const randomNumberNotBestSeller = Math.trunc(
          Math.random() * (9000 - 2000) + 2000
        ).toString();
        const commaSeparatedNumber = commaSeparated(randomNumberNotBestSeller);
        currentRandomNumberObj[i.toString()] = commaSeparatedNumber;
        i++;
        return commaSeparatedNumber;
      }
    }
    return "";
  }

  const randomNo = calcRandomNumber();

  if (!hasNumbers && i === allProductsLength * 2) {
    // * 2 only for development mode because of strict mode re-render
    randomNumbersArr.push(currentRandomNumberObj);
  }

  return <ProductItems {...{ items, randomNo }} />;
};

export default ProductItemsLogic;
