import _ from 'lodash';
import printMe from './print';
import './style.css'
import Data from './data.json'
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')
  btn.innerHTML = "Click Me And Check Console";
  btn.onclick = printMe;
  element.appendChild(btn);

  console.log(Data);

  return element;
}

document.body.appendChild(component());