// components

import Input from "../components/form/input";
import BtnSubmit from "../components/form/btnSubmit";

const Login = () => {
  return (
    <div className="block max-w-[400px] mx-auto">
      <h1 className="text-center text-[25px] mb-11">Login</h1>
      <form>
        <Input
          styles="mb-[25px]"
          type="email"
          name="email"
          textLabel="E-mail"
          placeholder="Digite seu endereço de email"
        />
        <Input
          styles="mb-[25px]"
          type="password"
          name="password"
          textLabel="Senha"
          placeholder="Digite sua senha"
        />
        <BtnSubmit text="Entrar" />
      </form>
    </div>
  );
};

export default Login;
