import React from 'react';
import {
  faHourglass, faPlus, faChartLine, faChartPie, faEllipsisH,
  faAngleRight, faAngleLeft, faTerminal, faRunning,
  faBookOpen, faTools, faFilm, faSignOutAlt, faLongArrowAltUp,
  faLongArrowAltDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AddMeasurementIcon = () => (
  <span>
    <FontAwesomeIcon icon={faHourglass} size="lg" />
    <sup><FontAwesomeIcon icon={faPlus} size="sm" /></sup>
  </span>
);

export const ListMeasurementIcon = () => (
  <span>
    <FontAwesomeIcon icon={faChartLine} size="lg" />
  </span>
);

export const ProgressIcon = () => (
  <span>
    <FontAwesomeIcon icon={faChartPie} size="lg" />
  </span>
);

export const MoreIcon = () => (
  <span>
    <FontAwesomeIcon icon={faEllipsisH} size="lg" />
  </span>
);

export const LogOutIcon = () => (
  <span>
    <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
  </span>
);

export const RightIcon = () => (
  <span>
    <FontAwesomeIcon icon={faAngleRight} size="1x" />
  </span>
);

export const LeftIcon = () => (
  <span>
    <FontAwesomeIcon icon={faAngleLeft} size="1x" />
  </span>
);

export const CodingIcon = () => (
  <span>
    <FontAwesomeIcon icon={faTerminal} size="lg" />
  </span>
);

export const RunningIcon = () => (
  <span>
    <FontAwesomeIcon icon={faRunning} size="lg" />
  </span>
);

export const ReadingIcon = () => (
  <span>
    <FontAwesomeIcon icon={faBookOpen} size="lg" />
  </span>
);

export const MovieIcon = () => (
  <span>
    <FontAwesomeIcon icon={faFilm} size="lg" />
  </span>
);

export const ProjectIcon = () => (
  <span>
    <FontAwesomeIcon icon={faTools} size="lg" />
  </span>
);

export const UpArrowIcon = () => (
  <span>
    <FontAwesomeIcon icon={faLongArrowAltUp} size="1x" color="#5cb85c" />
  </span>
);

export const DownArrowIcon = () => (
  <span>
    <FontAwesomeIcon icon={faLongArrowAltDown} size="1x" color="tomato" />
  </span>
);
