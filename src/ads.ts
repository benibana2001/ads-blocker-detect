const createDom = (domId: string) => {
  const e = document.createElement("div");
  e.id = domId;
  e.style.display = "none";
  document.body.appendChild(e);
};

export default createDom;
