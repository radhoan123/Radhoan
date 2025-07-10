
function login() {
  const id = document.getElementById('loginId').value;
  const pass = document.getElementById('loginPass').value;
  if (id && pass) {
    alert("লগইন সফল হয়েছে (ডেমো)।");
    // এখান থেকে dashboard দেখানো হবে
  } else {
    alert("সব ঘর পূরণ করুন।");
  }
}

function showRegister() {
  alert("রেজিস্ট্রেশন ফর্ম পরে আসবে।");
}
