import { Spin } from "antd";
import { Suspense } from "react";
import MainRoutes from "./routes";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <Spin />
          </div>
        }
      >
        <MainRoutes />
      </Suspense>
    </div>
  );
};

export default App;
