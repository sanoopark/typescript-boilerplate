const $root = document.querySelector('#root')!;
const $button = document.createElement('button');

$root.appendChild($button);

$button.innerHTML = 'Click';
$button.addEventListener('click', () => {
  alert('Clicked!');
});
