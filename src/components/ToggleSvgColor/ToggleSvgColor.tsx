//  svg 및 color 속성을 입력으로 받아서, 사용자가 클릭할 때마다 color 값을 사용하여 SVG 색상 변경하는 컴포넌트
import React, {useState} from 'react';

interface ToggleSvgColorProps {
  svg: string;
  color: string;
  onClickHandler?: () => void;
}

const ToggleSvgColor: React.FC<ToggleSvgColorProps> = ({
  svg,
  color,
  onClickHandler,
}) => {
  const [currentColor, setCurrentColor] = useState(color);
  const [defaultColor, setDefaultColor] = useState('');

  const getSVGWithColor = (colorToApply: string) => {
    return svg.replace('fill="none"', `fill="${colorToApply}"`);
  };

  const setInitialColor = () => {
    const regex = /stroke="([^"]+)"/;
    const match = svg.match(regex);

    if (match && match[1]) {
      setDefaultColor(match[1]);
      setCurrentColor(match[1]);
    }
  };

  const toggleColor = () => {
    setCurrentColor((previousColor) =>
      previousColor === color ? defaultColor : color,
    );

    if (onClickHandler) {
      onClickHandler();
    }
  };

  React.useEffect(() => {
    setInitialColor();
  }, []);

  return (
    <div
      style={{
        border: '0',
        backgroundColor: 'transparent',
        padding: '0',
      }}
      dangerouslySetInnerHTML={{__html: getSVGWithColor(currentColor)}}
      onClick={toggleColor}
    />
  );
};

export default ToggleSvgColor;
