import React, { useEffect, useState } from "react";

import Styles from "./SocialTriggersSlice.module.scss";

const SocialTriggersSlice = ({ slice }) => {
  const { primary, items } = slice;

  const [count, setCount] = useState(Array(items.length).fill(0));
  const [intervalDuration, setIntervalDuration] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) =>
        prevCount.map((prev, index) =>
          prev < items[index].socialtriggernumber
            ? prev + 1
            : items[index].socialtriggernumber
        )
      );

      setIntervalDuration((prevDuration) =>
        prevDuration > 1 ? prevDuration - 10 : prevDuration
      );
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [items, intervalDuration]);

  const renderTriggerItem = (item, index) => (
    <div key={index} className={Styles.triggerCard}>
      <span
        className={Styles.socialTriggerNumber}
        data-countup-number={count[index]}
      >
        {count[index]}
      </span>
      <p className={Styles.socialTriggerDescription}>
        {item.socialtriggerdescription}
      </p>
    </div>
  );

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={Styles.socialTriggersSlice}>
        <h2 className={Styles.socialTriggersSectionTitle}>
          {primary.socialtriggerssectiontitle}
        </h2>
        <div className={Styles.triggerCardContainer}>
          {items.map((i, index) => renderTriggerItem(i, index))}
        </div>
      </div>
    </section>
  );
};

export default SocialTriggersSlice;
