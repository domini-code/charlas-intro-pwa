export default async ()=> {
if ( !('serviceWorker' in navigator) ){
  console('SW are not supported');
  return;
}
// TODO tryCatch 
const swRegistration = await navigator.serviceWorker.register('sw.js', {
  scope: ''
});

// let serviceWorker;

// if (swRegistration.installing) {
//   console.log("Resolved on installing: ", swRegistration);
//   serviceWorker = swRegistration.installing;
// } else if (swRegistration.waiting) {
//   console.log("Resolved on installed/waiting: ", swRegistration);
//   serviceWorker = swRegistration.waiting;
// } else if (swRegistration.active) {
//   console.log("Resolved on activated: ", swRegistration);
//   serviceWorker = swRegistration.active;
// }



}