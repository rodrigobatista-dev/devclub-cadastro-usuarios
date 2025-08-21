import styled from  "styled-components"



export const Button = styled.button`
  background: ${(props) => props.theme === "primary" ? "linear-gradient(180deg, #fe7e5d 0%, #ff6478 100%)" : "transparent"};
  font-size: 16px;
  padding: 16px 32px;
  border-radius: 30px;
  border: ${props => props.theme === "primary" ? "none" : "1px solid #fff"};
  color: ${props => props.theme === "primary" ? "#fff" : "#fff"};
  cursor: pointer;
  transform: scale(1);

  &:hover {
    background: ${(props) => props.theme === "primary" ? "background: rgba(243, 158, 136, 0.8)" : "rgba(255, 255, 255, 0.1)"};
    color: ${props => props.theme === "primary" ? "#000000ff" : "#f39e88ff"};
    opacity: 0.8;
    transform: scale(1.05);
  }

  &:active {
    opacity: 0.5;
  }
`;