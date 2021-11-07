import React from "react";
import BulutlarContainer from "../../components/Bulutlar";

export const HardCodeBulut: React.FC = () => {
  return (
    <div>
      <BulutlarContainer {...{ top: "10", right: "0", scale: 2.2 }} />
      <BulutlarContainer {...{ top: "10", right: "70", scale: 1 }} />
      <BulutlarContainer {...{ top: "40", right: "80", scale: 1.5 }} />
      <BulutlarContainer {...{ top: "15", right: "80", scale: 1.5 }} />
      <BulutlarContainer {...{ top: "22", right: "0", scale: 2 }} />
      <BulutlarContainer {...{ top: "30", right: "0", scale: 1.5 }} />
      <BulutlarContainer {...{ top: "25", right: "75", scale: 1.5 }} />
      <BulutlarContainer {...{ top: "65", right: "0", scale: 1.2 }} />
      <BulutlarContainer {...{ top: "82", right: "75", scale: 1.2 }} />
      <BulutlarContainer {...{ top: "95", right: "0", scale: 1.2 }} />
      <BulutlarContainer {...{ top: "75", right: "0", scale: 1.2 }} />
      <BulutlarContainer {...{ top: "72", right: "75", scale: 2.2 }} />
      <BulutlarContainer {...{ top: "40", right: "0", scale: 1.2 }} />
      <BulutlarContainer {...{ top: "42", right: "5", scale: 1.2 }} />
      <BulutlarContainer {...{ top: "55", right: "75", scale: 1.8 }} />
      <BulutlarContainer {...{ top: "52", right: "0", scale: 1.8 }} />
      <BulutlarContainer {...{ top: "45", right: "75", scale: 1.8 }} />
      <BulutlarContainer {...{ top: "85", right: "5", scale: 1.2 }} />
      <BulutlarContainer {...{ top: "88", right: "75", scale: 1.2 }} />
    </div>
  );
};
