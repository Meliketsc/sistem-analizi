// fetch('navbar.html')
//  .then(response => response.text())
//  .then(data => {
//     document.querySelector('body').insertAdjacentHTML('afterbegin', data);
//   })
//  .catch(error => {
//     console.error('Error fetching navbar:', error);
//   });


function loadNavbar() {
  fetch('navbar.html') 
      .then(response => response.text())
      .then(html => {
          document.getElementById('navbar-container').innerHTML = html;
      })
      .catch(err => console.error('Navbar yüklenirken bir hata oluştu:', err));
  }
  document.addEventListener('DOMContentLoaded', function() {
  loadNavbar();
});



const yamahaItems = document.querySelectorAll('.yamaha-item');

yamahaItems.forEach(item => {
  item.addEventListener('click', () => {
    const link = item.querySelector('a').href;
    console.log(link);
     alert(link);
    // window.location.href = link;
  });
});


  const infoLinks = document.querySelectorAll('.yamaha-info a');

  infoLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      window.open(href, '_blank');
    });
  });

  



  