import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [hasTouched, setHasTouched] = useState(false);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserMail = (e) => {
    setUserMail(e.target.value);
  };

  const validUserName = (userName) => {
    return userName.length > 5;
  };

  const validUserMail = (userMail) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(userMail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasTouched(true);
    setIsValid(validUserName(userName) && validUserMail(userMail));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          placeholder="Nombre"
          value={userName}
          onChange={handleUserName}
        />
        <label htmlFor="mail">Mail</label>
        <input
          type="mail"
          id="mail"
          placeholder="Mail"
          value={userMail}
          onChange={handleUserMail}
        />
        {!isValid && hasTouched && (
          <div className="error">
            Por favor verifique su información nuevamente
          </div>
        )}
        <button type="submit">Enviar</button>
        {isValid && (
          <div className="error">
            Gracias {userName}, te contactaremos cuando antes vía mail
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
