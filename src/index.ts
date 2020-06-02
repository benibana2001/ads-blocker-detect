import createDom from "./ads";

// generate random strings
const id = "SyIZtQzlFRcu";

createDom(id);

if (document.getElementById(id)) {
  alert("Blocking Ads: No");
} else {
  alert("Blocking Ads: Yes");
}
