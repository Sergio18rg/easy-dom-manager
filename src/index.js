export function select(selected, element = document) {
  return element.querySelector(selected);
}

export function setText(selected, text, element = document) {
  element.querySelector(selected).innerText = text;
}

export function getText(selected, element = document) {
  return element.querySelector(selected).innerText;
}

export function getValue(selected, element = document) {
  return element.querySelector(selected).value;
}

export function setValue(selected, value, element = document) {
  element.querySelector(selected).value = value;
}

export function getChildren(parent, children, element = document) {
  return element.querySelector(parent).querySelectorAll(children);
}

export function setStyle(prop, value) {
  return (style[prop] = value);
}

export function addEvListener(selected, ev, action, element = document) {
  element.querySelector(selected).addEventListener(ev, action);
}

export function setAttributeToElement(
  selected,
  attribute,
  value,
  element = document
) {
  element.querySelector(selected).setAttribute(attribute, value);
}

export function clearList(list, items) {
  const itemList = list.querySelectorAll(items);
  for (let i = 0; i < itemList.length; i++) {
    itemList[i].remove();
  }
}

export function createCompleteElement(tag, text, elClasses, elAttributes) {
  const element = document.createElement(tag);
  element.textContent = text;

  for (const value of elClasses) {
    element.classList.add(value);
  }
  for (const [key, value] of elAttributes) {
    element.setAttribute(key, value);
  }

  return element;
}
