const validateFields = (name, email, message) => {

    if (!name || !email || !message) {
      return false;
    }

    if (name.length < 6 || email.length < 6 || message.length < 6) {
      return false;
    }

    if (!isValidEmail(email)) {;
      return false;
    }

    return true;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  export { validateFields, isValidEmail };