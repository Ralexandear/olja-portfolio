document.addEventListener("DOMContentLoaded", () => {
  var listItems = document.querySelectorAll('.stages__list-element-number');
  listItems.forEach((item, index) => {
    const number = (index + 1).toString().padStart(2, '0');
    item.innerHTML = number + '/'
  })

  const links = document.querySelectorAll('[data-role="link"]');
  links.forEach(e => {
    const href = e.dataset.href?.toString()
    
    if (! href) {
      console.error(`Link was not found!`)
      return
    }


    e.addEventListener('click', () => {
      console.log(href)
      if (! href.startsWith('#')) {
        return window.location.assign(href)
      }
      
      const target = document.getElementById(href.slice(1))
      const rect = target.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      
      window.scrollTo({
        behavior: 'smooth',
        top: rect.top + scrollTop - (window.innerHeight / 2) + (target.offsetHeight / 2),
        left: rect.left + scrollLeft - (window.innerWidth / 2) + (target.offsetWidth / 2),
      
      })
    })
  })
});

const buttons = [
  ['contact_button', 'contacts']
]



