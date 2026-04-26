const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const submitBtn = document.getElementById("submitBtn");
const triggers = document.querySelectorAll(".waitlist-trigger");

const nameInput = document.getElementById("nameInput");
const schoolInput = document.getElementById("schoolInput");
const gradeInput = document.getElementById("gradeInput");
const contactInput = document.getElementById("contactInput");
const typeInput = document.getElementById("typeInput");

triggers.forEach(function(button){
  button.addEventListener("click", function(event){
    event.preventDefault();
    popup.style.display = "flex";
  });
});

closePopup.addEventListener("click", function(){
  popup.style.display = "none";
});

popup.addEventListener("click", function(event){
  if(event.target === popup){
    popup.style.display = "none";
  }
});

submitBtn.addEventListener("click", function(){
  const name = nameInput.value.trim();
  const school = schoolInput.value.trim();
  const grade = gradeInput.value.trim();
  const contact = contactInput.value.trim();
  const type = typeInput.value;

  if(name === "" || school === "" || grade === "" || contact === "" || type === ""){
    alert("请先把信息填写完整哦。");
    return;
  }

  alert("申请已提交！我们会优先邀请你加入 CampusLink。");

  nameInput.value = "";
  schoolInput.value = "";
  gradeInput.value = "";
  contactInput.value = "";
  typeInput.value = "";

  popup.style.display = "none";
});