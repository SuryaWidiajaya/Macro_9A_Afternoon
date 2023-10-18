import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomeAkun from './pages/HomeAkun';
import Home from './pages/Home';
import SignIn from './pages/LoginFlow/SignIn';
import LoginPage1 from './pages/LoginFlow/LoginPage1';
import LoginPage2 from './pages/LoginFlow/LoginPage2';
import DataPage from './pages/LoginFlow/DataPage';
import SignUp from './pages/LoginFlow/SignUp';
import JoinPage from './pages/JoinFlow/JoinPage';
import HomeForum from './pages/ForumFlow/HomeForum';
import ForumBuat1 from './pages/ForumFlow/ForumBuat1';
import ForumJoin1 from './pages/ForumFlow/ForumJoin1';
import ForumJoin2 from './pages/ForumFlow/ForumJoin2';
import CreatePage1 from './pages/CreateFlow/CreatePage1';
import CreatePage2 from './pages/CreateFlow/CreatePage2';
import ProfilePage from './pages/ProfileFlow/ProfilePage';
import ProfileForum from './pages/ProfileFlow/ProfileForum';
import ProfileVoting from './pages/ProfileFlow/ProfileVoting';



function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: '/home',
      element: <HomeAkun />,
    },

    // Login Flow
    {
      path: '/signIn',
      element: <SignIn />,
    },
    {
      path: '/signUp/page1',
      element: <LoginPage1 />,
    },
    {
      path: '/signUp/page2',
      element: <LoginPage2 />,
    },
    {
      path: '/signUp/data',
      element: <DataPage />,
    },
    {
      path: '/signUp',
      element: <SignUp />,
    },

    //Join Flow
    {
      path: '/home/join',
      element: <JoinPage />,
    },


    //Forum Flow
    {
      path: '/home/forum',
      element: <HomeForum />,
    },
    {
      path: '/home/forum/create',
      element: <ForumBuat1 />,
    },
    {
      path: '/home/forum/join1',
      element: <ForumJoin1 />,
    },
    {
      path: '/home/forum/join2',
      element: <ForumJoin2 />,
    },


    //Create Flow
    {
      path: '/home/create',
      element: <CreatePage1 />,
    },
    {
      path: '/home/create/data',
      element: <CreatePage2 />,
    },


    //Profil Flow
    {
      path: '/profile',
      element: <ProfilePage/>,
    },
    {
      path: '/profile/forum',
      element: <ProfileForum />,
    },
    {
      path: '/profile/voting',
      element: <ProfileVoting />,
    },
    {
      
    },
  ]);





  return <RouterProvider router={router} />;
}

export default App;
