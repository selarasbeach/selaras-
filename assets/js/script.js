function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}

// Reservasi form → kirim ke WhatsApp
document.getElementById("reservationForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  const nama = this.querySelector("input[type=text]").value;
  const tanggal = this.querySelector("input[type=date]").value;
  const jumlah = this.querySelector("input[type=number]").value;
  const pesan = `Halo Selaras Beach, saya ${nama} ingin reservasi pada ${tanggal} untuk ${jumlah} orang.`;
  window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(pesan)}`);
});

// Lightbox galeri
function openLightbox(img){
  document.getElementById("lightbox").style.display="flex";
  document.getElementById("lightbox-img").src=img.src;
}
function closeLightbox(){
  document.getElementById("lightbox").style.display="none";
}

// Testimoni carousel
let index=0;
function showSlides(){
  const slides=document.querySelectorAll("#testimonialCarousel .slide");
  slides.forEach((s,i)=>{s.style.transform=`translateX(${(i-index)*100}%)`;});
  index=(index+1)%slides.length;
}
setInterval(showSlides,3000);
