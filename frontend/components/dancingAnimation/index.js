import React, { useEffect } from 'react';

export default function DancingAnimation() {
  useEffect(() => {
    const vectors = [
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 1],
      [3, 2],
      [3, 3],
    ];

    // pick a random vector function
    const pickVector = () => vectors[Math.floor(Math.random() * vectors.length)];

    // select all the dancers on the dancefloor
    const dancers = document.querySelectorAll('.danceFloor img');

    dancers.forEach(dancer => {
      const [vx, vy] = pickVector();
      dancer.dataset.vx = vx;
      dancer.dataset.vy = vy;
    });

    const move = () => {
      dancers.forEach(dancer => {
        const vx = parseInt(dancer.dataset.vx);
        const vy = parseInt(dancer.dataset.vy);
        const dl = parseInt(dancer.style.left) || 0;
        const dt = parseInt(dancer.style.top) || 0;

        // move a bit, based on vector
        dancer.style.left = `${dl + vx}px`;
        dancer.style.top = `${dt + vy}px`;

        // get the dancer offsets
        const { x, y } = dancer.getBoundingClientRect();

        // get the dancefloor width and height
        const { width, height } = getComputedStyle(dancer.offsetParent);
        // width and height are strings with `px` so
        // parse out the numbers
        const pw = parseInt(200);
        const ph = parseInt(225);

        // if we're dancing off the floor, reverse
        // direction
        if (x < 0 || x > pw) dancer.dataset.vx = -vx;
        if (y < 0 || y > ph) dancer.dataset.vy = -vy;
      });
    };

    // set a timer.
    // play with the interval to dance faster or slower
    const INTERVAL = 20;
    window.onload = () => setInterval(() => move(), INTERVAL);
  }, []);

  return (
    <div className='danceWrap'>
      <div className='danceFloor'>
        <img src='/javascript.svg' style={{ width: '75px' }} />
        <img src='/react.svg' style={{ width: '75px' }} />
        <img src='/redux.svg' style={{ width: '75px' }} />
        <img src='/next-dot-js.svg' style={{ width: '75px' }} />
        <img src='/sass.svg' style={{ width: '75px' }} />
      </div>
    </div>
  );
}
