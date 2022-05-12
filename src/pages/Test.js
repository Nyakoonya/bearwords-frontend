/*
 * @Descripttion:
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
 */
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
export default function Test() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  // 相当于componentDidMount 和 componentDidUpdate
  useEffect(() => {
    console.log('useeffect', text);
    // let $timer = setInterval(() => {
    //   setNumber((number) => number + 1);
    // }, 1000);
    // return 函数 -> 会在组件卸载和更新时调用
    // 清除副作用
    // return () => {
    //   clearInterval($timer);
    // };
    // setText((text) => 'hello!')
    setNumber(number => number + 1)
  }, []); //或者传入一个空的依赖项数组，避免重复执行
  return (
    <>
      <Form.Control
        type="text"
        placeholder="Normal text"
        onChange={(event) => setText(event.target.value)}
      />
      <h1>{text}</h1>
      <p>{number}</p>
      <Button variant="outline-primary">Add</Button>
    </>
  );
}
