// components
import Input from "../components/form/input";

const Login = () => {
  return (
    <div className="block max-w-[400px] mx-auto">
      <h1 className="text-center text-[25px] mb-11">Login</h1>
      <form>
        <Input type="email" name="email" textLabel="E-mail" />
        <Input type="password" name="password" textLabel="Senha" />
      </form>
    </div>
  );
};

export default Login;
