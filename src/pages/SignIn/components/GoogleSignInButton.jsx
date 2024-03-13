import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../utils/firebase';
import { Button } from '@nextui-org/react';
import Google from '../../../assets/google.svg';

const GoogleSignInButton = () => {
  const userSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch((error) => {
      console.error(error);
    });
  };
  return (
    <Button className="p-5" color="default" size="md" onClick={userSignIn}>
      <img src={Google} alt="google logo" style={{ width: '20px', height: '20px' }} />
      Continue With Google
    </Button>
  );
};

export default GoogleSignInButton;
