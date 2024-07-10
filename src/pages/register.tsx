import { Link } from "react-router-dom";
// components
import Input from "../components/form/input";
import BtnSubmit from "../components/form/btnSubmit";

const Register = () => {
  return (
    <div className="max-w-[400px] mx-auto">
      <h1 className="text-center text-[25px] mb-11">Cadastre-se</h1>
      <form>
        <Input
          styles="mb-[25px]"
          type="text"
          name="name"
          textLabel="Nome"
          placeholder="Digite seu nome"
        />
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
        <Input
          styles="mb-[25px]"
          type="password"
          name="confirmpassword"
          textLabel="confirmpassword"
          placeholder="Confirme sua senha"
        />
        <BtnSubmit text="cadastrar" />
      </form>
      <p className="text-center mt-3 text-[15px]">
        Já possui uma conta?{" "}
        <Link to="/login" className="text-blue-510">
          Faza o login aqui
        </Link>
      </p>
    </div>
  );
};

export default Register;
