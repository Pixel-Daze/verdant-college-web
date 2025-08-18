import React from "react";
import styles from './index.module.scss';
import { type BoxCellInfo } from "../type";
import ICON_ARROW from '@/assets/imgs/icon_arrow.png';

interface IBoxCellProps {
    info: BoxCellInfo;
}

const BoxCell = ({ info }: IBoxCellProps) => {

    // 点击跳转到落地页
    const toUrl = () => {
        if (info.linkUrl) {
            window.open(info.linkUrl, '_blank');
        }
    }

    return (
        <div className={styles.boxCell} onClick={toUrl}>
            {/* 封面 */}
            <img className={styles.boxCellCover} src={info.cover} alt={info.title} />
            {/* 内容区域 */}
            <div className={styles.boxCellInfo}>
                <div className={styles.boxCellTitle}>{info.title}</div>
                <div className={styles.boxCellDesc}>{info.desc}</div>
                <div className={styles.boxCellGo}>
                    <span className={styles.boxCellGoText}>前往查看</span>
                    <img className={styles.boxCellGoIcon} src={ICON_ARROW} alt="arrow-right" />
                </div>
            </div>
        </div>
    )
}

export default React.memo(BoxCell);
