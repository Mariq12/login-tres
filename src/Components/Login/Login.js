import React from "react";
import * as Components from './Componentes';
import './style.css';

const Login = () => {
  const [signIn, toggle] = React.useState(true);
  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Crear una cuenta</Components.Title>
          <Components.Input type="text" placeholder="Nombre" required/>
          <Components.Input type="email" placeholder="Email" required/>
          <Components.Input type="password" placeholder="Contraseña" required/>
          <Components.Button>Registrarse</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Iniciar Sesion</Components.Title>
          <Components.Input type="email" placeholder="Email" required/>
          <Components.Input type="password" placeholder="Contraseña" required/>
          <Components.Anchor href="#">¿Olvidaste tu contraseña?</Components.Anchor>
          <Components.Button>Iniciar Sesion</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>¡Bienvenido de nuevo!</Components.Title>
            <Components.Paragraph>
            Para mantenerse conectado con nosotros, inicie sesión con su información personal
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Iniciar Sesion
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>¡Hola, amigo!</Components.Title>
            <Components.Paragraph>
            Ingrese sus datos personales y comience su viaje con nosotros.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Registrarse
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default Login;
