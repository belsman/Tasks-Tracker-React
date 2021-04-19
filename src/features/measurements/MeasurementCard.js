import React from 'react';
import Slider from './MeasurementSlider';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import style from './singleRecord.module.css';
import { RunningIcon, MovieIcon, CodingIcon, ReadingIcon, ProjectIcon, RightIcon } from '../../Icons';

const MeasurementCard = ({ record, dailyTarget }) => {
  const { id, project, coding, reading, running, movie, created_at } = record;
  const total = [project, coding, reading, running, movie]
    .reduce((sum, num) => sum + num);

  const asPercent= parseInt(((total - dailyTarget) / dailyTarget) * 100);
  const color = asPercent < 50 ? 'tomato' : '#5cb85c';

  return (
    <section>
        <article className="record">
            <Slider title={created_at} recordId={id} />

            <div className={style.progressPane}>
              <div className={style.progressBarContainer}>
                <CircularProgressbar value="100" text={total} styles={buildStyles({ pathColor:'#5cb85c' })}/>
                <div className={style.description}>Total Time spent</div>
              </div>
              <div className={style.progressBarContainer}>
                <CircularProgressbar value="100" text={dailyTarget} styles={buildStyles({ pathColor:'#5cb85c' })}/>
                <div className={style.description}>Daily Targets</div>
              </div>
              <div className={style.progressBarContainer}>
                <CircularProgressbar value={asPercent}
                  text={`${asPercent}%`}
                  styles={buildStyles({
                    pathColor: `${color}`,
                    trailColor: '#d6d6d6',
                  })} 
                />
                <div className={style.description}>Progress</div>
              </div>
            </div>
            
            <ul className={style.tasksData}>
                <li className={style.taskItem}>
                  <ProjectIcon />
                  <span>
                    <span className={style.title}>Project</span>
                    <span className={style.value}>{project} 
                      <span className={style.unit}>h</span>
                    </span>
                  </span>
                </li>
                <li className={style.taskItem}>
                  <CodingIcon />
                  <span>
                    <span className={style.title}>Coding</span>
                    <span className={style.value}>{coding} 
                      <span className={style.unit}>h</span>
                    </span>
                  </span>
                </li>
                <li className={style.taskItem}>
                  <ReadingIcon />
                  <span>
                    <span className={style.title}>Reading</span>
                    <span className={style.value}>{reading} 
                      <span className={style.unit}>h</span>
                    </span>
                  </span>
                </li>
                <li className={style.taskItem}>
                  <RunningIcon />
                  <span>
                    <span className={style.title}>Running</span>
                    <span className={style.value}>{running} 
                      <span className={style.unit}>h</span>
                    </span>
                  </span> 
                </li>
                <li className={style.taskItem}>
                  <MovieIcon />
                  <span>
                    <span className={style.title}>Movie</span>
                    <span className={style.value}>{movie} 
                      <span className={style.unit}>h</span>
                    </span>
                  </span> 
                </li>
            </ul>
        </article>
  </section>
  );
};

export default MeasurementCard;
