// Define inventory
const inventory = [
  {
    category: "Beers",
    items: [
      {
        name: "Bud",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ0WVqxjzBfnLmi2V6r-bzJRL3b7GBKoG3bzum4duvW8CQxhJl66KiNIGB16BtZOKfsSMnOTHQ&usqp=CAc"
      },
			{
				name: "Bud Light",
				img: "https://thepartysource.com/image/cache/catalog/inventory/BUD-LT-24PK-CN-FLAT-500x500.jpg"
			},
			{
				name: "Stella",
				img: "https://nlliquor.com/wp-content/uploads/2021/07/23258_m_v2.jpg"
			},
			{
				name: "Corona",
				img: "https://aem.lcbo.com/content/dam/lcbo/products/0/1/7/8/017853.jpg.thumb.1280.1280.jpg"
			},
      {
				name: "Organic",
				img: "https://millstreetdelivery.com/cdn/shop/products/MillStreet_0010_organic.png?v=1677176043"
			},
      {
				name: "Blue Wave",
				img: "https://millstreetdelivery.com/cdn/shop/products/MillStreet_0017_BlueWave473mLcanDRY.png?v=1657634746"
			},
    ]
  },
  {
    category: "Coolers",
    items: [
		{
			name: "Grape",
			img: "https://aem.lcbo.com/content/dam/lcbo/products/0/3/1/3/031355.jpg.thumb.1280.1280.jpg"
		},
		{
			name: "Lemon",
			img: "https://aem.lcbo.com/content/dam/lcbo/products/5/5/3/1/553164.jpg.thumb.1280.1280.jpg"
		},
		{
			name: "Palm Bay",
			img: "https://aem.lcbo.com/content/dam/lcbo/products/0/2/4/3/024333.jpg.thumb.1280.1280.jpg"
		},
		{
			name: "Mike Tea",
			img: "https://tagliquorstores.com/cdn/shop/products/Mikes-Hard-Iced-Tea-Single-Can-473ml.jpg?v=1652831343"
		},
		{
			name: "Mike Orange",
			img: "https://speedybooze.ca/cdn/shop/products/2_a9340263-abd9-40b7-8285-bb8b333c491a_530x@2x.jpg?v=1677141639"
		},
		{
			name: "Cider",
			img: "https://aem.lcbo.com/content/dam/lcbo/products/3/9/4/0/394015.jpg.thumb.1280.1280.jpg"
		}
		]
  },
  {
    category: "Wines",
    items: [
			{
			name: "White",
			img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQO_4mWzNHzXd15qo7vvExVnzkgZsJqV_rOIYiyMaOxpoSIrAc&usqp=CAc"
		},
		{
			name: "Red",
			img: "https://aem.lcbo.com/content/dam/lcbo/products/6/0/7/9/607903.jpg.thumb.1280.1280.jpg"
		}
		]
  }
];


// Create form elements for each item
const inventoryContainer = document.getElementById("inventory");

inventory.forEach(category => {
  const categoryTitle = document.createElement("h2");
  categoryTitle.innerText = category.category;
  inventoryContainer.appendChild(categoryTitle);

  category.items.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";

    const itemName = typeof item === "string" ? item : item.name;
    const itemImageSrc = typeof item === "string" ? "" : item.img;

    const itemImage = document.createElement("img");
    itemImage.src = itemImageSrc; 
    itemImage.alt = itemName;
    itemDiv.appendChild(itemImage);

    const itemCases = document.createElement("input");
    itemCases.type = "number";
    itemCases.id = itemName + "Cases";
    itemCases.placeholder = "Number of cases";
    itemDiv.appendChild(itemCases);

    const itemCans = document.createElement("input");
    itemCans.type = "number";
    itemCans.id = itemName + "Cans";
    itemCans.placeholder = "Number of individual cans";
    itemDiv.appendChild(itemCans);

    const itemTotal = document.createElement("p");
    itemTotal.id = "total" + itemName;
    itemTotal.innerText = "Total " + itemName + ": 0";
    itemDiv.appendChild(itemTotal);

    inventoryContainer.appendChild(itemDiv);
  });
	// Function to calculate inventory
function calculateInventory() {
  const caseSize = 24;

  inventory.forEach(category => {
    category.items.forEach(item => {
      const itemName = typeof item === "string" ? item : item.name;
      const cases = document.getElementById(itemName + "Cases").value;
      const cans = document.getElementById(itemName + "Cans").value;
      const total = (cases * caseSize) + Number(cans);
      document.getElementById("total" + itemName).innerText = "Total " + itemName + ": " + total;
    });
  });
}

window.calculateInventory = calculateInventory; // Make the function globally accessible
});