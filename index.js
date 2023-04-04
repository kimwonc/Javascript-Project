// React Native에서 불변성을 지키면서
// 객체와 배열 업데이트 하기위해 filter와 map 함수 사용

// filter
const numbers = [1, 2, 3, 4];
const newNumbers = numbers.filter(num => num !== 3);
console.log(newNumbers);

const items = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
]
const newItems = items.filter(item => item.id !== 4);
console.log(newItems);

// map
const objects = [
  {id: 1, text: '안녕하세요'},
  {id: 2, text: '반갑습니다'},
  {id: 3, text: '무엇을 도와드릴까요'},
  {id: 4, text: '필요한 것은 무엇입니까'},
  {id: 5, text: '안녕히 가세요'},
]
const newObjects = objects.map(item => item.id === 4 ? {...item, text:'감사합니다'} : item);
console.log(newObjects);
