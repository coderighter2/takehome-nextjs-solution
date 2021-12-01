import React from 'react';
import styles from '../styles/Home.module.css';
import Button from './button';

type Props = {
  item: any;
  index: number;
  parentId: string;
  selectNominessCb: any;
  isButtonShow: boolean;
};
const Card: React.FC<Props> = ({
  item,
  index,
  selectNominessCb,
  parentId,
  isButtonShow,
}) => {
  return (
    <div
      className={`${styles.card} p-4 text-center ${
        item.isSelected ? styles.selectedCard : ''
      }`}
    >
      {item && Object.keys(item).length > 0 ? (
        <>
          <h5 className={`card-title text-center ${styles.cardTitle}`}>
            {item.title}
          </h5>
          <div className="text-center card-body">
            <img
              src={item.photoUrL}
              className={`card-img-top ${styles.cardImgTop}`}
              alt={item.title}
            />
          </div>
          {isButtonShow ? (
            <Button
              text="Select Button"
              onClick={() => selectNominessCb(parentId, item.id)}
            />
          ) : (
            ''
          )}
        </>
      ) : (
        ''
      )}
    </div>
  );
};
export default Card;
