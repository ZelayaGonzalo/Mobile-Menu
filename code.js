// Detect Device
function initDetect() {
  function detectDevice() {
    const detectDeviceObj = {
      device: navigator.maxTouchPoints ? 'mobile' : 'computer',
      // eslint-disable-next-line no-nested-ternary
      orientation: !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape',
    };
    return detectDeviceObj;
  }

  window.addEventListener('resize', detectDevice);
  detectDevice();
}
document.addEventListener('DOMContentLoaded', initDetect);
//  Functions mobile
function openMenu() {
  const button = document.getElementById('sidebar');
  button.classList.toggle('open');
}
document.getElementById('mobileNav').addEventListener('click', openMenu);
