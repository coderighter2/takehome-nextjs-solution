import React from 'react';
import Card from './card';
import styles from '../styles/Home.module.css';

type Props = {
  data: any;
  index: number;
  selectNominessCb: any;
  isButtonShow: boolean;
  isSelectedShow: boolean;
};
const Nominee: React.FC<Props> = ({
  data,
  index,
  selectNominessCb,
  isButtonShow,
  isSelectedShow,
}) => {
  return (
    <div className={styles.nomineecontainer}>
      {data &&
        data.length > 0 &&
        data.map((d: any, i: any) => {
          return (
            <>
              <p className={styles.heading} key={i}>
                {d.title}
              </p>

              <div className={styles.grid}>
                {d.items.map((item: any, idx: any) => {
                  if (item.isSelected && isSelectedShow) {
                    return (
                      <Card
                        parentId={d.id}
                        item={item}
                        index={idx}
                        selectNominessCb={selectNominessCb}
                        isButtonShow={isButtonShow}
                      />
                    );
                  } else if (!isSelectedShow) {
                    return (
                      <Card
                        parentId={d.id}
                        item={item}
                        index={idx}
                        selectNominessCb={selectNominessCb}
                        isButtonShow={isButtonShow}
                      />
                    );
                  }
                })}
              </div>
            </>
          );
        })}
    </div>
  );
};
export default Nominee;
