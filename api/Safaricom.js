// Safaricom API calls

const usernames = '';
const password = '';
const consumerKey = 'ScPX4sSweGvyXnCTRYLop0cZQUI0eSA6X3brPJMUQ4yD8JhZ';
const consumerSecret =
  'cGiT0u0Y4lf4sXpfomOzKs4rkErAtP8LafMUIZEddBurkCcrqSKmp6MksWqG8wDm';
const authenticationUrl =
  'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

const authCall = async () => {
  try {
    axios.post(authUrl, {});
  } catch (error) {
    console.log('Error', error);
  }
};
