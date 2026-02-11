


import css from './LoaderMain.module.css';

function LoaderMain({ percent = 0 }) {
  const radius = 80;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (percent / 100) * circumference;

  return (
    <div className={css.wrapper}>
      <svg
        height={radius * 2}
        width={radius * 2}
        className={css.circle}
      >
        {/* фонове коло */}
        <circle
          stroke="rgba(255,255,255,0.2)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* прогрес */}
        <circle
          stroke="white"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className={css.progress}
        />
      </svg>

      <div className={css.text}>
        <p className={css.label}>Loading</p>
        <p className={css.percent}>{percent}%</p>
      </div>
    </div>
    
  );
}

export default LoaderMain;
