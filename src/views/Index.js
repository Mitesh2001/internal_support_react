/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState, useEffect } from "react";

import Header from "components/Headers/Header.js";
import CardList from "components/Headers/CardList.js";
import axios from "axios";

const Index = (props) => {
  
  const [auth_user, setAuthUser] = useState({});
  const fetchAuthenticatedUser = async () => {    
    try {    
      const {data} = await axios.get('auth_user');
      setAuthUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const setUser = (user) => {
    setAuthUser(user);
  };

  useEffect(() => {
    fetchAuthenticatedUser();
  },[]);

  return (
    <>
      <Header>
        <CardList/>
      </Header>      
    </>
  );
};

export default Index;
