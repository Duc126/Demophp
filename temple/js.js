// $(document).ready(() => {

//     //hàm validation email
//         const validateEmail = (email) => {
//               return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//             );
//         };

//     $("button").click(() => {
//         var firstname = $("#firstname");
//         var lastname = $("#lastname");
//         var phone = $("#phone");
//         var email = $("#email");
//         var diachi = $("#diachi");
//         var noidung = $("#noidung");
 
//         function addValidation(element){
//             element.parent(".form-group").addClass("validation");
//         }

//         function removeValidation(element){
//             element.parent(".form-group").removeClass("validation");

//         }
        
//         (firstname.val().trim().length === 0)?addValidation(firstname): removeValidation(firstname);
//         (lastname.val().trim().length === 0)?addValidation(lastname): removeValidation(lastname);
//         (phone.val().trim().length === 0)?addValidation(phone): removeValidation(phone);
//         (email.val().trim().length === 0)?addValidation(email): removeValidation(email);
//         (diachi.val().trim().length === 0)?addValidation(diachi): removeValidation(diachi);
//         (noidung.val().trim().length === 0)?addValidation(noidung): removeValidation(noidung);

//         (validateEmail(email.val().trim()))?removeValidation(email):addValidation(email);
        
//     })
// })

// Truy cập vào các ô input
// const firstnameEle = document.getElementById('firstname');
// const emailEle = document.getElementById('email');
// const phoneEle = document.getElementById('phone');

// // Validate dữ liệu trong các ô input và highlight
// function checkValidate() {
//     let firstnameValue = firstnameEle.value;
//     let emailValue = emailEle.value;
//     let phoneValue = phoneEle.value;

//     let isCheck = true;

//     // Kiểm tra trường username
//     if (firstnameValue == '') {
//         setError(firstnameEle, 'Tên không được để trống');
//         isCheck = false;
//     } else {
//         setSuccess(firstnameEle);
//     }

//     // Kiểm tra trường email
//     if (emailValue == '') {
//         setError(emailEle, 'Email không được để trống');
//         isCheck = false;
//     } else if (!isEmail(emailValue)) {
//         setError(emailEle, 'Email không đúng định dạng');
//         isCheck = false;
//     } else {
//         setSuccess(emailEle);
//     }

//     // Kiểm tra trường phone
//     if (phoneValue == '') {
//         setError(phoneEle, 'Số điện thoại không được để trống');
//         isCheck = false;
//     } else if (!isPhone(phoneValue)) {
//         setError(phoneEle, 'Số điện thoại không đúng định dạng');
//         isCheck = false;
//     } else {
//         setSuccess(phoneEle);
//     }

//     return isCheck;
// }