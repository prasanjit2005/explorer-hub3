const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;

let currentIndex = 0;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds

function Download(){
  
    // Specify the URL of the PDF file
    const pdfUrl = '../img/itanary/KEDARKANTHA\ TREK\ \(1\).pdf'; // Replace with your file URL

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'KEDARKANTHA\ TREK\ \(1\).pdf'; // Set the default file name
    link.style.display = 'none';

    // Add the link to the body and trigger the download
    document.body.appendChild(link);
    link.click();

    // Remove the link element after download
    document.body.removeChild(link);
  
}
function Humtapass(){
  
    // Specify the URL of the PDF file
    const pdfUrl = '../img/itanary/humtapass.pdf'; // Replace with your file URL

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Humta-pass.pdf'; // Set the default file name
    link.style.display = 'none';

    // Add the link to the body and trigger the download
    document.body.appendChild(link);
    link.click();

    // Remove the link element after download
    document.body.removeChild(link);
  
}