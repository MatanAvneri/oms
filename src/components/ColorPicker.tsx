import * as React from "react";
import { ChromePicker, ColorChangeHandler } from "react-color";
import styled from "styled-components";

const ColorButton = styled.div`
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: inline-block;
  cursor: pointer;
`;

const ColorPreview = styled.div<{ color: string }>`
  width: 36px;
  height: 14px;
  border-radius: 2px;
  background: ${({ color }) => color};
`;

const Popover = styled.div`
  position: absolute;
  z-index: 2;
  transform: translateY(-111%);
`;

const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

interface ColorPickerProps {
  onChange: ColorChangeHandler;
  color: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onChange, color }) => {
  const [displayPicker, setDisplayPicker] = React.useState<boolean>(false);
  return (
    <div>
      <ColorButton onClick={() => setDisplayPicker(!displayPicker)}>
        <ColorPreview color={color} />{" "}
      </ColorButton>
      {displayPicker ? (
        <Popover>
          <Cover onClick={() => setDisplayPicker(false)} />
          <ChromePicker onChange={onChange} color={color} />
        </Popover>
      ) : null}
    </div>
  );
};

export default ColorPicker;
