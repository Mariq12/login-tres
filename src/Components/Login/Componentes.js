import styled, { keyframes } from 'styled-components';

// Animación para mover la sombra como las manecillas del reloj
const rotateShadow = keyframes`
  0% {
    box-shadow: 5px 0px 0px rgba(255, 0, 255, 0.6),    /* Rojo hacia la derecha */
                0px 5px 0px rgba(0, 0, 0, 0),       /* Sin sombra hacia abajo */
                -5px 0px 0px rgba(0, 0, 0, 0),      /* Sin sombra hacia la izquierda */
                0px -5px 0px rgba(0, 0, 0, 0);      /* Sin sombra hacia arriba */
  }
  25% {
    box-shadow: 0px 0px 0px rgba(255, 0, 0, 0),     /* Sin sombra hacia la derecha */
                0px 5px 0px rgba(0, 128, 0, 0.6),  /* Verde hacia abajo */
                0px 0px 0px rgba(0, 0, 0, 0),       /* Sin sombra hacia la izquierda */
                0px -5px 0px rgba(0, 0, 0, 0);     /* Sin sombra hacia arriba */
  }
  50% {
    box-shadow: 0px 0px 0px rgba(255, 0, 0, 0),     /* Sin sombra hacia la derecha */
                0px 5px 0px rgba(0, 0, 0, 0),  /* Sin sombra hacia abajo */
                -5px 0px 0px rgba(147, 112, 219, 0.6), /* Azul hacia la izquierda */
                0px 0px 0px rgba(0, 0, 0, 0);       /* Sin sombra hacia arriba */
  }
  75% {
    box-shadow: 0px 0px 0px rgba(255, 0, 0, 0),     /* Sin sombra hacia la derecha */
                0px 0px 0px rgba(0, 255, 0, 0),     /* Sin sombra hacia abajo */
                0px 0px 0px rgba(0, 0, 0, 0),   /* Sin sombra hacia la izquierda */
                0px -5px 0px rgba(218, 112, 214, 0.6); /* Amarillo hacia arriba */
  }
  100% {
    box-shadow: 5px 0px 0px rgba(147, 112, 219, 0.6),   /* Rojo hacia la derecha */
                0px 0px 0px rgba(0, 0, 0, 0),       /* Sin sombra hacia abajo */
                0px 0px 0px rgba(0, 0, 0, 0),       /* Sin sombra hacia la izquierda */
                0px 0px 0px rgba(0, 0, 0, 0);       /* Sin sombra hacia arriba */
  }
`;


export const Container = styled.div`
  border-radius: 10px 90px; /* Ajusta según tus preferencias */
  position: relative;
  overflow: hidden;
  width: 678px; /* Ancho del contenedor */
  height: 400px; /* Altura del contenedor */
  background: transparent; /* Color de fondo opcional */
  animation: ${rotateShadow} 8s linear infinite; /* Animación de la sombra */`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signinIn !== true
      ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 `
      : null}
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(100%);` : null}
`;

export const Form = styled.form`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
  padding: 10px;
  color: #fff;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const Button = styled.button`
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;
export const GhostButton = styled(Button)`
  background-color: transparent;
`;

export const Anchor = styled.a`
  color: #fff;
  font-size: 13px;
  text-decoration: none;
  margin: 15px 0;
`;
export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
  background: #C902FB;
  background: -webkit-linear-gradient(to right, #d1c3fc, #C009F8, #d1c3fc);
  background: linear-gradient(to right, #d1c3fc, #C009F8, #d1c3fc);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) => (props.signinIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signinIn !== true ? `transform: translateX(20%);` : null)}
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;
