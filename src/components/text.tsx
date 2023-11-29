// 'use client';

// import React from "react";
// import "./logo.css"
// export default class TextScramble extends React.Component {
//   private el: HTMLElement;
//   private counter: number;
//   private chars: string;
//   private resolve: () => void;
//   private queue: {
//     from: string;
//     to: string;
//     start: number;
//     end: number;
//     char?: string;
//   }[];
//   private frameRequest: number;
//   private frame: number;

//   constructor(prop: HTMLElement) {
//     super();
//     this.el = prop;
//     this.counter = 0;
//     this.chars = "01";
//     this.update = this.update.bind(this);
//   }

//   componentDidMount() {
//     this.nextMethod();
//   }

//   nextMethod() {
//     const phrases = ["Dev-Society KGEC"];
//     const el = document.querySelector(".textScramble") as HTMLElement;
//     const fx = new TextScramble(el);
//     fx.setText(phrases[this.counter]).then(() => {
//       setTimeout(this.nextMethod(), 7500);
//     });
//     this.counter = (this.counter + 1) % phrases.length;
//   }

//   setText(newText: string) {
//     const oldText = this.el.innerText;
//     const length = Math.max(oldText.length, newText.length);
//     const promise = new Promise<void>((resolve) => (this.resolve = resolve));
//     this.queue = [];
//     for (let i = 0; i < length; i++) {
//       const from = oldText[i] || "";
//       const to = newText[i] || "";
//       const start = Math.floor(Math.random() * 80);
//       const end = start + Math.floor(Math.random() * 80);
//       this.queue.push({
//         from,
//         to,
//         start,
//         end,
//       });
//     }
//     cancelAnimationFrame(this.frameRequest);
//     this.frame = 0;
//     this.update();
//     return promise;
//   }

//   update() {
//     let output = "";
//     let complete = 0;
//     for (let i = 0, n = this.queue.length; i < n; i++) {
//       let { from, to, start, end, char } = this.queue[i];
//       if (this.frame >= end) {
//         output += to;
//       } else if (this.frame >= start) {
//         if (!char || Math.random() < 0.38) {
//           char = this.randomChar();
//           this.queue[i].char = char;
//         }
//         output += `<span class="dud">${char}</span>`;
//       } else {
//         output += from;
//       }
//     }
//     this.el.innerHTML = output;
//     if (complete === this.queue.length) {
//       this.resolve();
//     } else {
//       this.frameRequest = requestAnimationFrame(this.update);
//       this.frame++;
//     }
//   }

//   randomChar() {
//     return this.chars[Math.floor(Math.random() * this.chars.length)];
//   }

//   render() {
//     return (
//       <div className=".App">
//         <div className="textScramble"></div>
//       </div>
//     );
//   }
// }


