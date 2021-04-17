document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.catalogue__nav-btn').forEach(function (navBtn) {
    navBtn.addEventListener('click', function (event) {
      document.querySelectorAll('.catalogue__nav-btn').forEach(function (navBtnActive) {
        navBtnActive.classList.remove('catalogue__nav-btn-is-active')
        event.target.classList.add('catalogue__nav-btn-is-active')
      })

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.country__artists-container').forEach(function (allArtistBlock) {
        allArtistBlock.classList.remove('country__artists-container-is-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('country__artists-container-is-active')
    })
  })
})


document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.artist__accordion-link').forEach(function (artistBtn) {
    artistBtn.addEventListener('click', function (event) {
      document.querySelectorAll('.artist__accordion-link').forEach(function (artistBtnActive) {
        artistBtnActive.classList.remove('artist__accordion-link-is-active')
        event.target.classList.add('artist__accordion-link-is-active')
      })

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.artist-item').forEach(function (artistBlock) {
        artistBlock.classList.remove('artist-item-is-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('artist-item-is-active')
    })
  })
})

