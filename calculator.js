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
            summary.push(`${quantity} x ${getItemName(item)} @ $${prices[item].toFixed(2)} each`);
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

function getItemName(id) {
    const itemNames = {
        item1: "Crater Cinnamon Roll Pancakes",
        item2: "Nebula Nosh Chicken & Waffles",
        item3: "Extraterrestrial Omelet",
        item4: "Celestial Caesar Salad",
        item5: "Alien Antenna Bites",
        item6: "Orbiting Onion Rings",
        item7: "Celestial Creature Gyro",
        item8: "Andromeda Invader Curry",
        item9: "Planetary Pizza",
        item10: "Galaxy Guac Burger and Meteorite Fries",
        item11: "Spacecraft S’mores Shake",
        item12: "Blackhole Brownies",
        item13: "Martian Mousse",
        item14: "UFO Umbrella Drink",
        item15: "Asteroid Amaretto Sour",
        item16: "Alien Ambrosia",
        item17: "Lunar Lemonade",
        item18: "Comet Cola Float",
        item19: "Galactic Grape Cola",
        item20: "Nebula Nectar Cola"
    };
    return itemNames[id];
}

function increment(id) {
    const input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

function decrement(id) {
    const input = document.getElementById(id);
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
    }
}
