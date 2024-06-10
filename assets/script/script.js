const mainImage = document.querySelector('.main-image');

const setPoints = () => {
    const allPoints = document.querySelectorAll('.point');
    allPoints.forEach(point => {
        const coordinates = positionPoint(point.dataset.imageReference);
        point.style.top = coordinates.top;
        point.style.left = coordinates.left;
        point.addEventListener('mouseover', ({ target }) => {
            const targetImage = document.querySelector(`.${target.dataset.imageReference}`);
            targetImage.classList.remove('hidden');
            mainImage.classList.add('blur-image');
        })

        point.addEventListener('mouseout', ({ target }) => {
            const targetImage = document.querySelector(`.${target.dataset.imageReference}`);
            targetImage.classList.add('hidden');
            mainImage.classList.remove('blur-image');
        });

        point.addEventListener('click', ({ target }) => {
            const targetModal = document.querySelector(`dialog[data-modal-reference="${target.dataset.modalReference}"]`);
            targetModal.showModal();
        });
    });
}

const setCloseButtons = () => {
    const allCloseButtons = document.querySelectorAll('.dialog-close');
    allCloseButtons.forEach(closeButton => {
        closeButton.addEventListener('click', ({ target }) => {
            target.parentElement.close();
        });
    });

}

const positionPoint = (imageReference) => {
    switch (imageReference) {
        case 'bar-image':
            return {
                top: window.innerHeight * 0.5 + 'px',
                left:  window.innerWidth * 0.32 + 'px'
            }

        case 'door-image':
            return {
                top: window.innerHeight * 0.5 + 'px',
                left:  window.innerWidth * 0.6 + 'px'
            }
            
        case 'tree-image':
            return {
                top: window.innerHeight * 0.6 + 'px',
                left:  window.innerWidth * 0.76 + 'px'
            }

        case 'wine-image':
            return {
                top: window.innerHeight * 0.4 + 'px',
                left:  window.innerWidth * 0.2 + 'px'
            }
        
        default:
            break;
    }
}

setPoints();
setCloseButtons();

window.addEventListener('resize', setPoints);