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

const g0 = document.getElementById('header');
const g1 = document.getElementById('banner');
const g2 = document.getElementById('category');
const g3 = document.getElementById('computer');
const g4 = document.getElementById('man');
const g5 = document.getElementById('woman');
const g6 = document.getElementById('footer');



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
function updateBackgroundColor(element, newColor) {
  // Update the background color for the element
  element.style.backgroundColor = newColor;
}

  
  // Fetch JSON data from the text file
  function updatePageContent(pageName) {
    console.log('Updating content for page:', pageName);
    const fetchJson1 = fetch('t.txt')
    .then(response => response.json());

// Fetch the second JSON file
const fetchJson2 = fetch('image.txt')
    .then(response => response.json());

// Wait for both fetch operations to complete
Promise.all([fetchJson1, fetchJson2])
    .then(jsonDataArray => {
        // Merge the data from both JSON files
        const mergedData = Object.assign({}, ...jsonDataArray);

            // Update content based on the current page
            updateContent(title, mergedData.title.title);

            updateLinkContent(nav0, mergedData.nav.nav0);
            updateLinkContent(nav1, mergedData.nav.nav1);
            updateLinkContent(nav2, mergedData.nav.nav2);
            updateLinkContent(nav3, mergedData.nav.nav3);
            updateLinkContent(nav4, mergedData.nav.nav4);

            updateContent(b0, mergedData.banner.b0);
            updateContent(b1, mergedData.banner.b1);
            updateContent(b2, mergedData.banner.b2);
            updateContent(b3, mergedData.banner.b3);
            updateContent(b4, mergedData.banner.b4);
            updateContent(b5, mergedData.banner.b5);
            updateContent(b6, mergedData.banner.b6);
            updateContent(b7, mergedData.banner.b7);
            updateContent(b8, mergedData.banner.b8);

            updateContent(c1, mergedData.category.c1);
            updateContent(c2, mergedData.category.c2);
            updateContent(c3, mergedData.category.c3);
            updateContent(c4, mergedData.category.c4);
            updateContent(c5, mergedData.category.c5);
            updateContent(c6, mergedData.category.c6);
            updateContent(c7, mergedData.category.c7);
            updateContent(c8, mergedData.category.c8);
            updateContent(c9, mergedData.category.c9);
            updateContent(c10, mergedData.category.c10);
            updateContent(c11, mergedData.category.c11);
            updateContent(c12, mergedData.category.c12);
            updateContent(c13, mergedData.category.c13);
            updateContent(c14, mergedData.category.c14);
            updateContent(c15, mergedData.category.c15);

            updateContent(s1, mergedData.computer.s1);
            updateContent(s2, mergedData.computer.s2);
            updateContent(s3, mergedData.computer.s3);
            updateContent(s4, mergedData.computer.s4);
            updateContent(s5, mergedData.computer.s5);
            updateContent(s6, mergedData.computer.s6);
            updateContent(s7, mergedData.computer.s7);
            updateContent(s8, mergedData.computer.s8);
            updateContent(s9, mergedData.computer.s9);
            updateContent(s10, mergedData.computer.s10);
            updateContent(s11, mergedData.computer.s11);
            updateContent(s12, mergedData.computer.s12);
            updateContent(s13, mergedData.computer.s13);
            updateContent(s14, mergedData.computer.s14);
            updateContent(s15, mergedData.computer.s15);

            updateContent(man0, mergedData.man.man0);
            updateContent(man1, mergedData.man.man1);
            updateContent(man2, mergedData.man.man2);
            updateContent(man3, mergedData.man.man3);
            
            updateContent(w0, mergedData.woman.w0);
            updateContent(w1, mergedData.woman.w1);
            updateContent(w2, mergedData.woman.w2);
            
            updateContent(f1, mergedData.footer.f1);
            updateContent(f2, mergedData.footer.f2);
            updateContent(f3, mergedData.footer.f3);
            updateContent(f4, mergedData.footer.f4);
            updateContent(f5, mergedData.footer.f5);
            updateContent(f6, mergedData.footer.f6);
            updateContent(f7, mergedData.footer.f7);
            updateContent(f8, mergedData.footer.f8);
            updateContent(f9, mergedData.footer.f9);

            updateBackgroundColor(g0, mergedData.color.header);
            updateBackgroundColor(g1, mergedData.color.banner);
            updateBackgroundColor(g2, mergedData.color.category);
            updateBackgroundColor(g3, mergedData.color.computer);
            updateBackgroundColor(g4, mergedData.color.man);
            updateBackgroundColor(g5, mergedData.color.woman);
            updateBackgroundColor(g6, mergedData.color.footer);
        

            updateImageSrc(img1, mergedData.images.img1);
            updateImageSrc(img2, mergedData.images.img2);
            updateImageSrc(img3, mergedData.images.img3);
            updateImageSrc(img4, mergedData.images.img4);
            updateImageSrc(img5, mergedData.images.img5);
            updateImageSrc(img6, mergedData.images.img6);
            updateImageSrc(img7, mergedData.images.img7);
            updateImageSrc(img8, mergedData.images.img8);
            updateImageSrc(img9, mergedData.images.img9);
            updateImageSrc(img10, mergedData.images.img10);
            updateImageSrc(img11, mergedData.images.img11);
            updateImageSrc(img12, mergedData.images.img12);
            updateImageSrc(img13, mergedData.images.img13);
            updateImageSrc(img14, mergedData.images.img14);
            updateImageSrc(img15, mergedData.images.img15);
            updateImageSrc(img16, mergedData.images.img16);

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