import React, { createContext, useState } from "react";
let Context = null;

const { Provider, Consumer } = Context = createContext()


const UserProvider = (props) => {

  const [isAuth, setIsAuth] = useState(false)

  const [selectTedDate, setSelectDate] = useState('');
  const [cleaning, setCleaning] = useState(null);

  // handle is auth
  const handleAuth =() => {
    setIsAuth(!isAuth)
  }

  // handle date
  const handleSelectDate = date => {
    setSelectDate(date)
  }

  // handle cleaning name
  const handleCleaningName = name => {
    setCleaning(name)
  }

  return (
    <Provider value={
      {
        isAuth,
        handleSelectDate,
        handleCleaningName,
        selectTedDate,
        cleaning,
        handleAuth
      }
    }>
      {props.children}
    </Provider>
  )

}

export { UserProvider, Consumer as UserConsumer, Context as UserContext };