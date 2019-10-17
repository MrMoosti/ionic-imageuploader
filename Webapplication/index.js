window.addEventListener('load', () => {
    getImages();
    window.setInterval(getImages, 1000);
});

function getImages() {
    fetch('uploads', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        displayImages(data);
    }).catch(err => {
        console.error(`Could not retrieve images.\n${err}`);
    })
}

function displayImages(images) {
    let content = document.getElementById('images');

    while (content.firstChild)
        content.removeChild(content.firstChild)

    if (images.length) {
        for (let image of images) {
            content.append(createImageHTML(image));
        }
    } else {
        const p = document.createElement("p");
        p.innerHTML = "<i>You have not uploaded any images yet</i>";
        content.append(p);
    }
}

function createImageHTML(image) {
    const imgName = image.split('/').pop();
    const html = document.createElement('div')
    html.setAttribute('class', 'card')
    html.innerHTML = '<div class="card-header">' + imgName + '</div><img src="' + image + '" class="card-img-top" /><div class="card-body"><a href="' + image + '" class="btn btn-primary" download><i class="fa fa-download"></i> Download</a><a href="#" class="btn btn-danger" onclick="deleteImage(\'' + image + '\')"><i class="fa fa-trash"></i> Delete</a></div>';
    return html;
}

function deleteImage(image) {
    fetch('delete.php', {
        method: 'POST',
        mode: 'same-origin',
        credentials: 'same-origin',
        body: JSON.stringify({
            'image': image
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).then(data => {})
}