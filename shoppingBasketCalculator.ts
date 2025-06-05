type Item = "Apple" | "Banana" | "Melon" | "Lime";

const prices: Record<Item, number> = {
  Apple: 35,
  Banana: 20,
  Melon: 50,
  Lime: 15,
};

function calculateTotal(items: string[]): number {
  const itemCounts: Record<Item, number> = {
    Apple: 0,
    Banana: 0,
    Melon: 0,
    Lime: 0,
  };

  // Count valid items
  for (const item of items) {
    if (itemCounts.hasOwnProperty(item)) {
      itemCounts[item as Item]++;
    }
  }

  let total = 0;

  // Apples: No offer
  total += itemCounts.Apple * prices.Apple;

  // Bananas: No offer
  total += itemCounts.Banana * prices.Banana;

  // Melons: Buy One Get One Free
  total += Math.ceil(itemCounts.Melon / 2) * prices.Melon;

  // Limes: Three for the price of two
  const limeCount = itemCounts.Lime;
  const limeGroupsOfThree = Math.floor(limeCount / 3);
  const remainingLimes = limeCount % 3;
  total += (limeGroupsOfThree * 2 + remainingLimes) * prices.Lime;

  return total;
}

// Test Example
const basket = ["Apple", "Apple", "Banana", "Melon", "Melon", "Melon", "Lime", "Lime", "Lime", "Lime"];
const totalCost = calculateTotal(basket);

console.log(`Total cost: ${totalCost}p`);
