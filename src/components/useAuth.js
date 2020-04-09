import React, { createContext, useState } from "react";
let Context = null;

const { Provider, Consumer } = Context = createContext()


const UserProvider = (props) => {

  const [user, setUser] = useState(null)

  const [selectTedDate, setSelectDate] = useState('');
  const [cleaning, setCleaning] = useState(null);

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
        user,
        handleSelectDate,
        handleCleaningName,
        selectTedDate,
        cleaning
      }
    }>
      {props.children}
    </Provider>
  )

}

export { UserProvider, Consumer as UserConsumer, Context as UserContext };