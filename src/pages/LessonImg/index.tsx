import IMG_DEMO from '@/assets/imgs/demo.png';
import styles from './index.module.scss';

const LessonImg = () => {
  
  return <div className={styles.appWrap}>
      <img className={styles.demoImg} src={IMG_DEMO} alt='' />
  </div>
}

export default LessonImg;
