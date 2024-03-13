import UserSignIn from './components/UserSignIn';
import GoogleSignInButton from './components/GoogleSignInButton';
import FacebookSignInButton from './components/FacebookSignInButton';
import Text from '../../components/Text';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <section className="Login">
      <Text h1 className="font-semibold p-5 pt-10">
        Log In
      </Text>
      <div className="flex max-w-[400px] mx-auto flex-col flex-wrap mt-6 md:mt-2 gap-4">
        <GoogleSignInButton />
        <FacebookSignInButton />
        <UserSignIn />
        <p>
          Don&apos;t have an account yet?&nbsp;
          <Link
            to="/user/create"
            className="font-bold text-md dark:text-gray-300 hover:text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
