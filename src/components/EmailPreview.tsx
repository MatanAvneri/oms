import { Button, Card } from "@mui/material";
import * as React from "react";
import styled from "styled-components";
import useStore, { SupportedStyles } from "../useStore";
import defaultBg from "../defaultBg.jpeg";
import ReactDOM from "react-dom";

interface StyleProps {
  emailStyles: SupportedStyles;
}

const PreviewContainer = styled.table<StyleProps>`
  margin: 0px;
  padding: 10px;
  border: ${(props) => props.emailStyles.fontColor}
    ${(props) => (props.emailStyles.isBorder ? `1px` : 0)} solid;
  word-break: break-all;
`;

const Image = styled.img<StyleProps>`
  width: ${(props) => props.emailStyles.imageSize}px;
  height: ${(props) => props.emailStyles.imageSize}px;
  align-self: center;
  margin-right: 20px;
`;

const DataSection = styled.div<StyleProps>`
  border-left: ${(props) => props.emailStyles.innerBorderColor} solid
    ${(props) => props.emailStyles.innerBorderSize}px;
  color: ${(props) => props.emailStyles.fontColor};
  padding-left: 20px;
  font-size: ${(props) => props.emailStyles.fontSize}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Container = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  overflow: auto;
`;

const GenerateButton = styled(Button)`
  margin-top: 10px;
`;

const Preview = React.forwardRef<HTMLTableElement>((_props, ref) => {
  const { name, phone, role, website, logo, styles } = useStore();

  const emailStyles: SupportedStyles = {
    fontSize: styles.fontSize,
    imageSize: styles.imageSize,
    fontColor: styles.fontColor,
    isBorder: styles.isBorder,
    innerBorderSize: styles.innerBorderSize,
    innerBorderColor: styles.innerBorderColor,
  };

  return (
    <PreviewContainer emailStyles={emailStyles} ref={ref}>
      <tbody>
        <tr>
          <td>
            <Image src={logo || defaultBg} emailStyles={emailStyles} />
          </td>
          <td>
            <DataSection emailStyles={emailStyles}>
              <div>{name}</div>
              <div>{phone}</div>
              <div>{role}</div>
              <div>{website}</div>
            </DataSection>
          </td>
        </tr>
      </tbody>
    </PreviewContainer>
  );
});

const PortalWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: -100vh;
  bottom: -100vh;
  width: 200vw;
  height: 200vh;
`;

const CopyPortal: React.FC<{ onCopyDone: () => void }> = ({ onCopyDone }) => {
  const previewRef = React.useRef<HTMLTableElement>(null);

  React.useEffect(() => {
    const previewEl = previewRef.current;
    if (previewEl) {
      document.getElementById("root")!.style.userSelect = "none";
      previewEl.contentEditable = "true";
      previewEl.click();
      previewEl.focus();
      document.execCommand("selectAll");
      document.execCommand("copy");
      previewEl.contentEditable = "false";
      getSelection()!.empty();
      document.getElementById("root")!.style.userSelect = "all";
      onCopyDone();
    }
  }, []);
  return ReactDOM.createPortal(
    <PortalWrapper>
      <div>
        <Preview ref={previewRef} />
      </div>
    </PortalWrapper>,
    document.querySelector("body") as HTMLBodyElement
  );
};

const EmailPreview: React.FC = () => {
  const [isCopying, setCopying] = React.useState(false);

  return (
    <Container>
      {isCopying && <CopyPortal onCopyDone={() => setCopying(false)} />}
      <Preview />
      <GenerateButton
        onClick={() => {
          setCopying(true);
        }}
        color="primary"
        variant="contained"
        fullWidth
      >
        Get Signature
      </GenerateButton>
    </Container>
  );
};

export default EmailPreview;
