function calculateTotal() {
    const prices = {
        item1: 73.50,
        item2: 115.50,
        item3: 87.50,
        item4: 70.00,
        item5: 98.00,
        item6: 52.50,
        item7: 115.50,
        item8: 105.00,
        item9: 70.00,
        item10: 122.50,
        item11: 56.00,
        item12: 66.50,
        item13: 73.50,
        item14: 50.00,
        item15: 57.50,
        item16: 62.50,
        item17: 27.50,
        item18: 32.50,
        item19: 27.50,
        item20: 27.50
    };

    let subtotal = 0;
    const summary = [];

    for (let item in prices) {
        const quantity = document.getElementById(item).value;
        if (quantity > 0) {
            subtotal += prices[item] * quantity;
            summary.push(`${quantity} x ${item.replace(/item(\d+)/, (match, p1) => getItemName(p1))} @ $${prices[item].toFixed(2)} each`);
        }
    }

    const discount = parseFloat(document.getElementById("discount").value) || 0;
    const fee = parseFloat(document.getElementById("fee").value) || 0;

    const discountAmount = subtotal * (discount / 100);
    const subtotalAfterDiscount = subtotal - discountAmount;

    const feeAmount = subtotalAfterDiscount * (fee / 100);
    const total = subtotalAfterDiscount + feeAmount;

    document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("total").textContent = `$${total.toFixed(2)}`;
    document.getElementById("summary").innerHTML = summary.join('<br>');
}

function getItemName(index) {
    const itemNames = [
        "Crater Cinnamon Roll Pancakes",
        "Nebula Nosh Chicken & Waffles",
        "Extraterrestrial Omelet",
        "Celestial Caesar Salad",
        "Alien Antenna Bites",
        "Orbiting Onion Rings",
        "Celestial Creature Gyro",
        "Andromeda Invader Curry",
        "Planetary Pizza",
        "Galaxy Guac Burger and Meteorite Fries",
        "Spacecraft S’mores Shake",
        "Blackhole Brownies",
        "Martian Mousse",
        "UFO Umbrella Drink",
        "Asteroid Amaretto Sour",
        "Alien Ambrosia",
        "Lunar Lemonade",
        "Comet Cola Float",
        "Galactic Grape Cola",
        "Nebula Nectar Cola"
    ];
    return itemNames[index - 1];
}
