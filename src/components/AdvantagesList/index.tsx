import React, { useState } from "react"

import "./advantages-list.scss";

const AdvantagesListMocks = [
  {
    icon: "/img/icon-svg/motobike.svg",
    text: "Fasted delivery Service",
    label: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    width: 40,
    height: 37,
  },
  {
    icon: "/img/icon-svg/document.svg",
    text: "Online order Service",
    label: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    width: 27,
    height: 40,
  },
  {
    icon: "/img/icon-svg/clock.svg",
    text: "24/8 Service",
    label: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    width: 40,
    height: 30,
  }
];

const AdvantagesList = () => {
  const [active, setActive] = useState(1);
  const onItemClickHandler = (index: number) => setActive(index);

  return (
    <ul className="advantages-list">
      {AdvantagesListMocks.map(({ icon, text, label, width, height }, index) => {
        return (
          <li className={active === index ? "advantages-list__item active" : "advantages-list__item"} key={index} onClick={() => onItemClickHandler(index)}>
            <div className="advantages-list__icon">
              <img src={icon} width={width} height={height} alt={label} />
            </div>
            <div className="advantages-list__text">
              <div className="advantages-list__count">{text}</div>
              <div className="advantages-list__label">{label}</div>
            </div>
          </li>
        )
      })}
    </ul>
  )
};

export { AdvantagesList };