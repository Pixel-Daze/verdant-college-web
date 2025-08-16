import React, { useState } from 'react';
import Button from './components/Button';
import styles from './index.module.scss';
import { useDebounceFn } from 'ahooks';
import { useNavigate } from 'react-router-dom';

const LessonClick = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    // 基础的事件绑定
    const addCount = () => {
        setCount((count) => count + 1);
    }

    // 基础的事件绑定，新增前置
    const { run: addCount2 } = useDebounceFn(() => {
        setCount2((count2) => count2 + 1);
    }, { wait: 500, leading: true, trailing: false });

    // 基础的事件绑定，新增后置防抖
    const { run: addCount3 } = useDebounceFn(() => {
        setCount3((count3) => count3 + 1);
    }, { wait: 500 });

    return (
        <div className={styles.lessonClickContainer}>
            <div className={styles.lessonClickTitle}>响应事件</div>
            <div className={styles.lessonClickContent}>点击之后，count 会加 1，通过onclick事件实现</div>
            <Button onClick={addCount}>
                计数器A {count}
            </Button>
            <br />
            <br />
            <div className={styles.lessonClickTitle}>防双击响应事件【前置】</div>
            <div className={styles.lessonClickContent}>多次点击结束之后，count 会加 1，onclick事件实现的基础上，增加防抖处理，调用立刻生效</div>
            <Button onClick={addCount2}>
                计数器B {count2}
            </Button>
            <br />
            <br />
            <div className={styles.lessonClickTitle}>防双击响应事件【后置】</div>
            <div className={styles.lessonClickContent}>多次点击结束之后，count 会加 1，onclick事件实现的基础上，增加防抖处理，停止点击后500ms生效</div>
            <Button onClick={addCount3}>
                计数器C {count3}
            </Button>
            <div className={styles.lessonClickSummary}>总结：防抖处理可以有效防止双击事件，提高用户体验</div>
            <br />
            <br />
            <Button onClick={() => {
                setCount(0);
                setCount2(0);
                setCount3(0);
            }}>
                重置全部计数
            </Button>
            <br />
            <br />
            <Button onClick={() => {
                navigate('/lessonImg');
            }}>
                前往图片案例
            </Button>
        </div>
    )
}

export default React.memo(LessonClick);
