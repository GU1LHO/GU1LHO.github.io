const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const dialog = document.getElementById('image-dialog');
const dialogImage = document.getElementById('dialog-image');
const dialogTitle = document.getElementById('dialog-title');
let opener;

document.querySelectorAll('.image-expand').forEach(button => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');
    opener = button;
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    dialogTitle.textContent = button.closest('article').querySelector('.media-caption span').textContent;
    dialog.showModal();
  });
});

document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  dialogImage.removeAttribute('src');
  opener?.focus();
});
