import {saveUser, deleteUser} from '../../redux/actions/UserActions';

const url = 'https://surobackend.hyneo.ru';

export const login = async user => {
  const requestConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier: user.identifier,
      password: user.password,
    }),
  };

  try {
    const response = await fetch(`${url}/auth/local`, requestConfig);
    const json = await response.json();

    if (json.error) {
      return false;
    }

    saveUser(json.jwt, json.user);

    return true;
  } catch (err) {
    alert(err);
    return false;
  }
};

export const logout = async user => {
  deleteUser();
};
