import React, { useRef, useEffect } from "react";
import "./intro.css";
import { gsap, ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

function Intro() {
  gsap.registerPlugin(ScrollTrigger);

  const textRef = useRef(null);
  useEffect(() => {
    const animText = new SplitType(textRef.current, { types: "words, chars" });

    gsap.set(animText.chars, {
      opacity: 0.1,
    });

    gsap.to(animText.chars, {
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: textRef.current,
        scrub: true,
        start: "top 50%",
        end: "bottom 100%",
      },
    });
  });


  return (
    <div className="intro">
      <h1 className="main" >
        Text Reveal Animation <br />
        <span>Using GSAP</span>
      </h1>
      <br />
      <p className="text" ref={textRef}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolorem
        sit praesentium non ducimus fuga sapiente odio vel nobis voluptas rem
        enim expedita harum, dignissimos molestias, recusandae, assumenda
        possimus reprehenderit! Totam cumque, error fugit, consequuntur vel odit
        sunt inventore corrupti consequatur ex quaerat magnam, obcaecati sed
        modi ducimus quod perferendis rem optio dolores ipsum quam. Nisi culpa
        alias laboriosam! Architecto aliquam sapiente vitae suscipit praesentium
        beatae earum voluptatibus omnis nam enim unde, non laudantium soluta quo
        modi molestiae dolorum vel nemo debitis explicabo laborum dicta officiis
        error necessitatibus? Veritatis consectetur mollitia natus dolore
        repellendus, inventore molestias consequatur iste? Quia, labore
        excepturi. Nisi, beatae. Nesciunt, facilis. Inventore, voluptatem
        suscipit doloremque, tenetur autem unde animi culpa odio quis quibusdam
        pariatur odit fuga blanditiis eligendi? Quae cupiditate itaque
        temporibus distinctio aliquid quos voluptatibus molestias autem illum
        doloribus! Quia ipsa alias nobis facere aut, nemo natus maxime voluptas
        ullam odio. Quidem tempore, placeat dolor similique molestiae amet
        consequatur et eveniet, perferendis natus alias assumenda tenetur quae
        id culpa! Quos, hic quas incidunt reiciendis a culpa ut, alias,
        laudantium amet exercitationem architecto quod cum illo. Voluptas nisi
        non reprehenderit error, placeat labore iste qui esse nam, tempore
        quasi. Molestias sequi illum doloribus exercitationem, ipsam quibusdam.
      </p>
    </div>
  );
}

export default Intro;
