const prices = {
    Apple: 35,
    Banana: 20,
    Melon: 50,
    Lime: 15,
  };
  
  function calculateTotal(items) {
    const itemCounts = {
      Apple: 0,
      Banana: 0,
      Melon: 0,
      Lime: 0,
    };
  
    // Count each item
    for (const item of items) {
      if (itemCounts.hasOwnProperty(item)) {
        itemCounts[item]++;
      }
    }
  
    let total = 0;
  
    // Apple: No offer
    total += itemCounts.Apple * prices.Apple;
  
    // Banana: No offer
    total += itemCounts.Banana * prices.Banana;
  
    // Melon: Buy One Get One Free
    total += Math.ceil(itemCounts.Melon / 2) * prices.Melon;
  
    // Lime: Three for the price of two
    const limeCount = itemCounts.Lime;
    const limeGroupsOfThree = Math.floor(limeCount / 3);
    const remainingLimes = limeCount % 3;
    total += (limeGroupsOfThree * 2 + remainingLimes) * prices.Lime;
  
    return total;
  }
  
  // Example usage, Items in basket
  const basket = [
    "Apple", "Apple", "Banana",
    "Melon", "Melon", "Melon",
    "Lime", "Lime", "Lime", "Lime"
  ];
  
  const totalCost = calculateTotal(basket);
  console.log(`Total cost: ${totalCost}p`);
  
