const title = document.getElementById('title');

const nav0 = document.getElementById('nav0');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');

const b0 = document.getElementById('b0');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');

const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
const c7 = document.getElementById('c7');
const c8 = document.getElementById('c8');
const c9 = document.getElementById('c9');
const c10 = document.getElementById('c10');
const c11 = document.getElementById('c11');
const c12 = document.getElementById('c12');
const c13 = document.getElementById('c13');
const c14 = document.getElementById('c14');
const c15 = document.getElementById('c15');

const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7');
const s8 = document.getElementById('s8');
const s9 = document.getElementById('s9');
const s10 = document.getElementById('s10');
const s11 = document.getElementById('s11');
const s12 = document.getElementById('s12');
const s13 = document.getElementById('s13');
const s14 = document.getElementById('s14');
const s15 = document.getElementById('s15');


const man0 = document.getElementById('man0');
const man1 = document.getElementById('man1');
const man2 = document.getElementById('man2');
const man3 = document.getElementById('man3');

const w0 = document.getElementById('w0');
const w1 = document.getElementById('w1');
const w2 = document.getElementById('w2');

const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const f4 = document.getElementById('f4');
const f5 = document.getElementById('f5');
const f6 = document.getElementById('f6');
const f7 = document.getElementById('f7');
const f8 = document.getElementById('f8');
const f9 = document.getElementById('f9');


const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');
const img9 = document.getElementById('img9');
const img10 = document.getElementById('img10');
const img11 = document.getElementById('img11');
const img12 = document.getElementById('img12');
const img13 = document.getElementById('img13');
const img14 = document.getElementById('img14');
const img15 = document.getElementById('img15');
const img16 = document.getElementById('img16');



// Function to update content for a specific element
function updateContent(element, newValue) {
    // Update content for the element
    element.textContent = newValue;
  }
  
  // Function to update content for an <a> tag
  function updateLinkContent(linkElement, newValue) {
    // Update content for the <a> tag
    linkElement.innerText = newValue;
  }

  function updateImageSrc(imageElement, newSrc) {
    // Update the src attribute of the image element
    imageElement.src = newSrc;
}

  
  // Fetch JSON data from the text file
  function updatePageContent(pageName) {
    console.log('Updating content for page:', pageName);
    fetch('t.txt')
        .then(response => response.json())
        .then(jsonData => {
            // Update content based on the current page
            updateContent(title, jsonData.title.title);

            updateLinkContent(nav0, jsonData.nav.nav0);
            updateLinkContent(nav1, jsonData.nav.nav1);
            updateLinkContent(nav2, jsonData.nav.nav2);
            updateLinkContent(nav3, jsonData.nav.nav3);
            updateLinkContent(nav4, jsonData.nav.nav4);

            updateContent(b0, jsonData.banner.b0);
            updateContent(b1, jsonData.banner.b1);
            updateContent(b2, jsonData.banner.b2);
            updateContent(b3, jsonData.banner.b3);
            updateContent(b4, jsonData.banner.b4);
            updateContent(b5, jsonData.banner.b5);
            updateContent(b6, jsonData.banner.b6);
            updateContent(b7, jsonData.banner.b7);
            updateContent(b8, jsonData.banner.b8);

            updateContent(c1, jsonData.category.c1);
            updateContent(c2, jsonData.category.c2);
            updateContent(c3, jsonData.category.c3);
            updateContent(c4, jsonData.category.c4);
            updateContent(c5, jsonData.category.c5);
            updateContent(c6, jsonData.category.c6);
            updateContent(c7, jsonData.category.c7);
            updateContent(c8, jsonData.category.c8);
            updateContent(c9, jsonData.category.c9);
            updateContent(c10, jsonData.category.c10);
            updateContent(c11, jsonData.category.c11);
            updateContent(c12, jsonData.category.c12);
            updateContent(c13, jsonData.category.c13);
            updateContent(c14, jsonData.category.c14);
            updateContent(c15, jsonData.category.c15);

            updateContent(s1, jsonData.computer.s1);
            updateContent(s2, jsonData.computer.s2);
            updateContent(s3, jsonData.computer.s3);
            updateContent(s4, jsonData.computer.s4);
            updateContent(s5, jsonData.computer.s5);
            updateContent(s6, jsonData.computer.s6);
            updateContent(s7, jsonData.computer.s7);
            updateContent(s8, jsonData.computer.s8);
            updateContent(s9, jsonData.computer.s9);
            updateContent(s10, jsonData.computer.s10);
            updateContent(s11, jsonData.computer.s11);
            updateContent(s12, jsonData.computer.s12);
            updateContent(s13, jsonData.computer.s13);
            updateContent(s14, jsonData.computer.s14);
            updateContent(s15, jsonData.computer.s15);

            updateContent(man0, jsonData.man.man0);
            updateContent(man1, jsonData.man.man1);
            updateContent(man2, jsonData.man.man2);
            updateContent(man3, jsonData.man.man3);
            
            updateContent(w0, jsonData.woman.w0);
            updateContent(w1, jsonData.woman.w1);
            updateContent(w2, jsonData.woman.w2);
            
            updateContent(f1, jsonData.footer.f1);
            updateContent(f2, jsonData.footer.f2);
            updateContent(f3, jsonData.footer.f3);
            updateContent(f4, jsonData.footer.f4);
            updateContent(f5, jsonData.footer.f5);
            updateContent(f6, jsonData.footer.f6);
            updateContent(f7, jsonData.footer.f7);
            updateContent(f8, jsonData.footer.f8);
            updateContent(f9, jsonData.footer.f9);

            updateImageSrc(img1, jsonData.images.img1);
            updateImageSrc(img2, jsonData.images.img2);
            updateImageSrc(img3, jsonData.images.img3);
            updateImageSrc(img4, jsonData.images.img4);
            updateImageSrc(img5, jsonData.images.img5);
            updateImageSrc(img6, jsonData.images.img6);
            updateImageSrc(img7, jsonData.images.img7);
            updateImageSrc(img8, jsonData.images.img8);
            updateImageSrc(img9, jsonData.images.img9);
            updateImageSrc(img10, jsonData.images.img10);
            updateImageSrc(img11, jsonData.images.img11);
            updateImageSrc(img12, jsonData.images.img12);
            updateImageSrc(img13, jsonData.images.img13);
            updateImageSrc(img14, jsonData.images.img14);
            updateImageSrc(img15, jsonData.images.img15);
            updateImageSrc(img16, jsonData.images.img16);

            // Extract the filename from the path
            const fileName = pageName.split('/').pop();

            if (fileName === 'index.html') {
               
            } else if (fileName === 'contact.html') {
               
            } else if (fileName === 'computer.html') {

            } else if (fileName === 'index.html') {

            } else if (fileName === 'mans_clothes.html') {

            } else if (fileName === 'womans_clothes.html') {

            }
        })
        .catch(error => console.error('Error fetching or parsing JSON:', error));
}

// Call the function to update content when the page loads
window.addEventListener('load', function () {
    console.log('page loaded');
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Update content based on the current page
    updatePageContent(currentPage);
});