import { createGlobalStyle } from "styled-components";
import { darkTheme } from "./theme";

export default createGlobalStyle`

.footer-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  margin-top: 24px;

  width: 175px;
  height: 36px;

  background: #${(props) => props.theme.button};
  border-radius: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;

  text-align: center;

  color: ${(props) => props.theme.accent}; 
}

.subheader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text}; 
  margin-bottom: 48px;
}

.infos {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 24px;
  color: ${(props) => props.theme.text};    
}


.footer-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  color: #604fcf;
}


    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};        
    }
    h1 {
        color: ${(props) => props.theme.text};        
    }
    .accent {
        background-color: ${(props) => props.theme.accent};
        color: ${(props) => props.theme.text};
        height: 30px;
    }

 *:not(.title,.brach) > svg,{
    ${(props) =>
      props.theme === darkTheme && {
        filter:
          "invert(87%) sepia(40%) saturate(2056%) hue-rotate(2deg) brightness(107%) contrast(105%)",
      }};

}

.brach svg{

    ${(props) =>
      props.theme === darkTheme && {
        filter:
          "invert(100%) sepia(98%) saturate(8%) hue-rotate(177deg) brightness(104%) contrast(103%)",
      }};
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.text};
  height: 56px;
  max-width: 1128px;
  margin: auto;

}
header{
    border-bottom: 1px solid ${(props) => props.theme.text};

}
.header a{
    color: ${(props) => props.theme.text};
}


.dark{
    cursor:pointer;
}

.footer-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;

  color: ${(props) => props.theme.text};
}

.card{
    ${(props) =>
      props.theme === darkTheme && {
        filter: "saturate(0%)",
      }};

}

.description-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;

  letter-spacing: -1px;

  color: ${(props) => props.theme.text};
}

    
`;
