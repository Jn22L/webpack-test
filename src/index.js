import { hello, add } from "./util";
import "./style.css";
import "./header.css";
import logo from "./images/logo.jpg";
import List from "./List";

// const text = hello("<h1>나는 이남주!!ㅁ</h1>");
// const num = add(1, 2);
// const img = `<img src="${logo}" alt='aaa' />`;

const users = [
  { id: 1, name: "블랙 위도우" },
  { id: 2, name: "아이언맨" },
  { id: 3, name: "헐크" },
  { id: 4, name: "스파이더맨" },
  { id: 5, name: "캡틴아메리카" },
];

//document.getElementById("root").innerHTML = img + text + num;
document.getElementById("root").appendChild(List({ userList: users }));
