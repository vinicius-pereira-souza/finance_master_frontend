import { Link } from "react-router-dom";
// components
import Input from "../components/form/Input";
import BtnSubmit from "../components/form/Submit";

const Register = () => {
  return (
    <div className="w-full lg:max-w-[400px] mx-auto">
      <h1 className="text-center text-xl lg:text-2xl mb-10 lg:mb-11">
        Cadastre-se
      </h1>
      <form>
        <Input
          styles="mb-4 lg:mb-[25px]"
          type="text"
          name="name"
          labelText="Nome"
          placeholder="Digite seu nome"
        />
        <Input
          styles="mb-4 lg:mb-[25px]"
          type="email"
          name="email"
          labelText="E-mail"
          placeholder="Digite seu endereço de email"
        />
        <Input
          styles="mb-4 lg:mb-[25px]"
          type="password"
          name="password"
          labelText="Senha"
          placeholder="Digite sua senha"
        />
        <Input
          styles="mb-10 lg:mb-[25px]"
          type="password"
          name="confirmpassword"
          labelText="confirmpassword"
          placeholder="Confirme sua senha"
        />
        <BtnSubmit text="cadastrar" />
      </form>
      <p className="text-center mt-3 text-[15px]">
        Já possui uma conta?{" "}
        <Link to="/" className="text-blue-510">
          Faza o login aqui
        </Link>
      </p>
    </div>
  );
};

export default Register;
