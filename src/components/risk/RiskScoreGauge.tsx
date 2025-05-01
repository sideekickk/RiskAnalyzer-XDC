import React from 'react';
import { useSpring, animated } from 'react-spring';

interface RiskScoreGaugeProps {
  score: number;
}

const RiskScoreGauge: React.FC<RiskScoreGaugeProps> = ({ score }) => {
  const rotation = (score / 100) * 180;
  
  const props = useSpring({
    from: { rotation: 0 },
    to: { rotation },
    config: { tension: 120, friction: 14 }
  });
  
  const getColor = () => {
    if (score < 25) return '#34D399'; // Green
    if (score < 50) return '#FBBF24'; // Yellow
    if (score < 75) return '#FB923C'; // Orange
    return '#EF4444'; // Red
  };

  const color = getColor();

  return (
    <div className="relative w-48 h-24">
      <div className="absolute w-full h-full rounded-t-full overflow-hidden bg-gray-100">
        <div 
          className="absolute w-full h-full" 
          style={{
            background: 'linear-gradient(90deg, #34D399 0%, #FBBF24 50%, #EF4444 100%)',
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            opacity: 0.8
          }}
        />
      </div>
      
      <animated.div 
        className="absolute bottom-0 left-1/2 w-0.5 h-20 bg-gray-900 origin-bottom"
        style={{
          transform: props.rotation.to(r => `translateX(-50%) rotate(${r - 90}deg)`)
        }}
      >
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-gray-900 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </animated.div>
      
      <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-gray-900 rounded-full transform -translate-x-1/2 translate-y-1/2 z-10" />
      
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-2xl font-medium" style={{ color }}>
        {score}
      </div>
      
      <div className="absolute -bottom-6 left-0 text-xs font-medium text-green-500">
        Low
      </div>
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-yellow-500">
        Moderate
      </div>
      <div className="absolute -bottom-6 right-0 text-xs font-medium text-red-500">
        High
      </div>
    </div>
  );
};

export default RiskScoreGauge;