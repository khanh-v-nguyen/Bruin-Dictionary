import UserSignIn from './components/UserSignIn';
import GoogleSignInButton from './components/GoogleSignInButton';
import UserSignUp from '../../components/UserSignUp';
import Text from '../../components/Text';

const SignIn = () => {
  return (
    <section className="Login">
      <Text h1 className="font-semibold p-5">
        Log In
      </Text>
      <div className="flex w-[400px] mx-auto flex-col flex-wrap mb-6 md:mb-0 mt-6 md:mt-2 gap-4">
        <GoogleSignInButton />
        <UserSignIn />
        <UserSignUp />
      </div>
    </section>
  );
};

export default SignIn;