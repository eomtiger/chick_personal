import React, { useRef, useEffect } from "react";
import io from "socket.io-client";
import Eraser from "../components/atoms/Eraser";
import "./styles/board.css";
import { Link } from "react-router-dom";
import CommonBtn from "../components/atoms/CommonBtn";
import SmallVideoRoomComponent from "../boardRTC/VideoRoomComponent";
import TestBox from "../components/atoms/TestBox";

const Board = () => {
  const canvasRef = useRef(null);
  const colorsRef = useRef(null);
  const socketRef = useRef();

  useEffect(() => {
    // --------------- getContext() method returns a drawing context on the canvas-----

    const canvas = canvasRef.current;
    const test = colorsRef.current;
    const context = canvas.getContext("2d");

    // ----------------------- Colors --------------------------------------------------

    const colors = document.getElementsByClassName("color");
    console.log(colors, "the colors");
    console.log(test);
    // set the current color
    const current = {
      color: "black",
    };

    // helper that will update the current color
    const onColorUpdate = (e) => {
      current.color = e.target.className.split(" ")[1];
    };

    // loop through the color elements and add the click event listeners
    for (let i = 0; i < colors.length; i++) {
      colors[i].addEventListener("click", onColorUpdate, false);
    }
    let drawing = false;

    // ------------------------------- create the drawing ----------------------------

    const drawLine = (x0, y0, x1, y1, color, emit) => {
      context.beginPath();
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
      context.strokeStyle = color;
      context.lineWidth = 2;
      context.stroke();
      context.closePath();

      if (!emit) {
        return;
      }
      const w = canvas.width;
      const h = canvas.height;

      socketRef.current.emit("drawing", {
        x0: x0 / w,
        y0: y0 / h,
        x1: x1 / w,
        y1: y1 / h,
        color,
      });
    };

    // ---------------- mouse movement --------------------------------------

    const onMouseDown = (e) => {
      drawing = true;
      current.x = e.clientX || e.touches[0].clientX;
      current.y = e.clientY || e.touches[0].clientY;
    };

    const onMouseMove = (e) => {
      if (!drawing) {
        return;
      }
      drawLine(
        current.x,
        current.y,
        e.clientX || e.touches[0].clientX,
        e.clientY || e.touches[0].clientY,
        current.color,
        true
      );
      current.x = e.clientX || e.touches[0].clientX;
      current.y = e.clientY || e.touches[0].clientY;
    };

    const onMouseUp = (e) => {
      if (!drawing) {
        return;
      }
      drawing = false;
      drawLine(
        current.x,
        current.y,
        e.clientX || e.touches[0].clientX,
        e.clientY || e.touches[0].clientY,
        current.color,
        true
      );
    };

    // ----------- limit the number of events per second -----------------------

    const throttle = (callback, delay) => {
      let previousCall = new Date().getTime();
      return function () {
        const time = new Date().getTime();

        if (time - previousCall >= delay) {
          previousCall = time;
          callback.apply(null, arguments);
        }
      };
    };

    // -----------------add event listeners to our canvas ----------------------

    canvas.addEventListener("mousedown", onMouseDown, false);
    canvas.addEventListener("mouseup", onMouseUp, false);
    canvas.addEventListener("mouseout", onMouseUp, false);
    canvas.addEventListener("mousemove", throttle(onMouseMove, 10), false);

    // Touch support for mobile devices
    canvas.addEventListener("touchstart", onMouseDown, false);
    canvas.addEventListener("touchend", onMouseUp, false);
    canvas.addEventListener("touchcancel", onMouseUp, false);
    canvas.addEventListener("touchmove", throttle(onMouseMove, 10), false);

    // -------------- make the canvas fill its parent component -----------------

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", onResize, false);
    onResize();

    // ----------------------- socket.io connection ----------------------------
    const onDrawingEvent = (data) => {
      const w = canvas.width;
      const h = canvas.height;
      drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color);
    };

    const onErasingEvent = () => {
      clearBoard(false);
    };

    socketRef.current = io.connect("ws://i8b207.p.ssafy.io:8001");
    socketRef.current.on("drawing", onDrawingEvent);
    socketRef.current.on("erasing", onErasingEvent);
    // socketRef.current = io.connect("wss://i8b207.p.ssafy.io");
    // socketRef.current = io.connect("ws://43.201.16.17:8001");
    // socketRef.current = io.connect("ws://localhost:8001");
  }, []);
  function clearBoard(emit) {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    if (!emit) {
      return;
    }
    socketRef.current.emit("erasing");
  }
  // ------------- The Canvas and color elements --------------------------

  return (
    <div className="flex justify-between">
      <canvas ref={canvasRef} className="resize-y whiteboard" />

      <div className="flex justify end">
        <SmallVideoRoomComponent />
      </div>

      <div ref={colorsRef} className="colors h-[50px] row-span-2">
        <div className="color black" />
        <div className="color red" />
        <div className="color green" />
        <div className="color blue" />
        <div className="color yellow" />
        <button
          className="text-2xl bg-pink-400"
          onClick={() => clearBoard(true)}
        >
          {Eraser}지우기
        </button>
      </div>
      <div className="ml-[1em] absolute bottom-0 right-20">
        <Link to="/">
          {Eraser}
          <CommonBtn text="나가기" color={"bg-pink-300"} />
        </Link>
      </div>
    </div>
  );
};
/* <img src={Eraser} alt="Eraser" /> */
export default Board;