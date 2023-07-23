// export default function (response, title = '更新') {
//   const Toast = $swal.mixin({
//     toast: true,
//     position: 'top-end',
//     showConfirmButton: false,
//     timer: 3000,
//     timerProgressBar: true,
//     didOpen: (toast) => {
//       toast.addEventListener('mouseenter', $swal.stopTimer);
//       toast.addEventListener('mouseleave', $swal.resumeTimer);
//     }
//   });

//   if (response.data.success) {
//     Toast.fire({
//       icon: 'success',
//       title: `Success! ${title}`
//     });
//   } else {
//     Toast.fire({
//       icon: 'error',
//       title: `${title} failed`
//     });
//   }
// }
