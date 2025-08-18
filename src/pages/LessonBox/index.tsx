import styles from './index.module.scss';
import BoxCell from "./BoxCell";
import { type BoxCellInfo } from "./type";
import { DATA_LIST } from "./constant";

const LessonBox = () => {
  return (
    <div>
        <div className={styles.lessonBoxContainer}>
            {/* {DATA_LIST && DATA_LIST.length > 0 ? DATA_LIST.map((item: BoxCellInfo, index: number) => {
                return <BoxCell key={index} info={item} />
            }) : null} */}
            <BoxCell  info={DATA_LIST[0]} />
            <BoxCell  info={DATA_LIST[1]} />
            <BoxCell  info={DATA_LIST[2]} />
        </div>
        {/* <div className={styles.lessonBoxContainer}>
            {DATA_LIST && DATA_LIST.length > 0 ? DATA_LIST.map((item: BoxCellInfo, index: number) => {
                return <BoxCell key={index} info={item} />
            }) : null}
        </div> */}
    </div>
  )
}

export default LessonBox;
