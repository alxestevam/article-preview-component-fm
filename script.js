window.onload = () => {
    const shareBtns = document.querySelectorAll('.share-btn')
    const authorContainer = document.querySelectorAll('.author-container.shared-active')

    shareBtns.forEach(item => {
        item.addEventListener('click', () => {
            authorContainer.forEach(container => container.classList.toggle('show'))
        })
    })
}


