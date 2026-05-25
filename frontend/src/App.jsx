import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./app.route";
import { AuthProvider } from "./feature/auth/auth.contex";
import {SongProvider} from "./feature/home/song.context"

const App = () => {
  return (
    <AuthProvider>
      <SongProvider>
        <RouterProvider router={router} />
      </SongProvider>
    </AuthProvider>
  );
};

export default App;
