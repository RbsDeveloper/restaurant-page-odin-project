import green from './assets/green.png';
import mango from './assets/mango.png';
import purple from './assets/purple.png';
import yellow from './assets/yellow.png'
import pink from './assets/pink.png';
import strawberry from './assets/strawberry.png';




export function menu () {

    const smothies = [
        {
            image: `${green}`,
            name: 'Mango Passion Smoothie',
            price: '8$',
            ingredients: [
                "mango chunks ",
                "passion fruit pulp ",
                "banana ",
                "coconut water ",
                "Greek yogurt ",
                "honey ",
                "ice cubes"
              ],
        },
        {
            image: `${mango}`,
            name: 'Tropical Green Smoothie',
            price: '9$',
            ingredients: [
                "spinach ",
                "pineapple chunks ",
                "mango chunks ",
                "banana ",
                "coconut milk ",
                "chia seeds ",
                "ice cubes "
              ],
        },
        {
            image: `${pink}`,
            name: 'Berry Blast Smoothie',
            price: '10$',
            ingredients: [
                "strawberries ",
                "blueberries ",
                "raspberries ",
                "banana ",
                "almond milk ",
                "honey ",
                "ice cubes"
              ],
        },
        {
            image: `${yellow}`,
            name: 'Chocolate Banana Smoothie',
            price: '7$',
            ingredients: [
                "banana ",
                "cocoa powder ",
                "oat milk ",
                "peanut butter ",
                "cinnamon ",
                "ice cubes"
              ],
        },
        {
            image: `${purple}`,
            name: 'Pina Colada Smoothie',
            price: '13$',
            ingredients: [
                "pineapple chunks ",
                "coconut milk ",
                "Greek yogurt ",
                "banana ",
                "honey ",
                "ice cubes"
              ],
        },
        {
            image: `${strawberry}`,
            name: 'Sunset Citrus Smoothie',
            price: '14$',
            ingredients: [
                "orange ",
                "mango chunks ",
                "peach slices ",
                "coconut water ",
                "honey ",
                "ice cubes "
              ],
        }
    ];

    const content = document.getElementById('content');

    const itemsWrapper = document.createElement('div');
    itemsWrapper.classList.add('wrapper');
    content.appendChild(itemsWrapper);

    smothies.forEach(item => {
        const productContainer = document.createElement('div');
        productContainer.classList.add('productContainer')

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('smothieImgContainer');
        const smothieImg = document.createElement('img');
        smothieImg.src = item.image;
        imgContainer.appendChild(smothieImg);
        productContainer.appendChild(imgContainer);

        const infoContainer = document.createElement('div');
        infoContainer.classList.add('smothieInfo');

        const smothieName = document.createElement('h3');
        smothieName.innerText = item.name;
        infoContainer.appendChild(smothieName);

        const smothieIngredients = document.createElement('div');
        smothieIngredients.classList.add('ingredients');
        smothieIngredients.innerText = item.ingredients.toString().split(',');
        infoContainer.appendChild(smothieIngredients);

        const smothiePrice = document.createElement('div');
        smothiePrice.classList.add('price');
        smothiePrice.innerText = item.price;
        infoContainer.appendChild(smothiePrice);

        productContainer.appendChild(infoContainer);

        itemsWrapper.appendChild(productContainer);
    })    
}

/*

<div class= "wrapper">
    <div class="productContainer">
        <div class="smothieImgContainer">
         img
        </div>
        <h3>name</h3>
        <p>ingerdients<p>
        <div class="price">Price</div>
    </div>
</div>
*/