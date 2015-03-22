/*globals document*/
export default function(container, application){
  var rootEl = document.querySelector(application.rootElement);
  var modalContainerEl = document.createElement('div');
  modalContainerEl.id = 'modal-overlays';
  rootEl.appendChild(modalContainerEl);
}
