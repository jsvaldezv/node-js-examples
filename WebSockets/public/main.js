const socket = io.connect();

const render = (data) => 
{
    const html = data.map ((elem, index) => {
        return(	`<div class="product">
            		<strong>${elem.name}</strong>
            		<em>${elem.price}</em>
					<img src=${elem.photo} />
            	</div>`)
    }).join(" ")

    document.getElementById("products").innerHTML = html;
}

const addProduct = (e) => 
{
    const product = { name:document.getElementById('name').value, 
					  price:document.getElementById('price').value, 
					  photo:document.getElementById('photo').value }

    socket.emit ('new-product', product);

    return false;
}

socket.on ('products', (data) => { render(data) })