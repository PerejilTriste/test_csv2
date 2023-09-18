import _ from 'lodash';

export default function solution(content){
  // BEGIN
  const data = content.split('\r\n').slice(1)
  //console.log(data.length-1);
  const biba = data.map(el => el.split(','))
  const res2 = biba.map(el => el[1])

  const false1 = res2.filter((el) => el === "FALSE").length
  const true1 = res2.filter((el) => el === "TRUE").length
 //console.log(`Рейтинговых игр ${true1}, Не рейтинговых игр ${false1}`)
 const res4 = biba.map(el => el[13])
 console.log(_.uniq(res4))
  // END
}