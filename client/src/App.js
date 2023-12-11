import "./App.css";

import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

// import Fill from "./pages/Fill/Fill";
// import Forms from "./pages/Forms/Forms";
import Fill from "./pages/Fill/Fill";
import FormBuilder from "./pages/FormBuilder/FormBuilder";
// import NewFormRenderer from "./pages/NewFormRenderer/NewFormRendere";
import Forms from "./pages/Forms/Forms";
import Responses from "./pages/Responses/Responses";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { ROUTES } from "./constants";
// import Responses from "./pages/Responses/Responses";
import SpecificResponse from "./pages/SpecificResponse/SpecificResponse";
import { UserLayout } from "./pages/Layouts/User/UserLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.ROOT} element={<UserLayout />}>
          {/* <Route path={ROUTES.ROOT} element={<Home />} /> */}
          {/* <Route path={ROUTES.NEW_FORM_BUILDER} element={<NewFormBuilder />} /> */}
          <Route path={ROUTES.ROOT} element={<FormBuilder />} />
          {/* <Route path={ROUTES.NEW_FORMS} element={<NewFormRenderer />} /> */}
          <Route path={ROUTES.VEIW_FORMS} element={<Forms />} />
          {/* <Route path={ROUTES.FORMS} element={<Forms />} /> */}
          {/* <Route path={ROUTES.FILL(":id")} element={<Fill />} /> */}
          <Route path={ROUTES.FILL(":id")} element={<Fill />} />
          {/* <Route path={ROUTES.RESPONSES(":id")} element={<Responses />} /> */}
          <Route path={ROUTES.RESPONSES(":id")} element={<Responses />} />
          <Route
            path={ROUTES.SPECIFIC_RESPONSE(":id")}
            element={<SpecificResponse />}
          />
          {/* <Route path={ROUTES.ABOUT} element={<Help />} /> */}
          {/* <Route path={ROUTES.EDIT(":id")} element={<Home />} />
          <Route path={ROUTES.PREVIEW(":id")} element={<Home />} />
          <Route path={ROUTES.DRAG_AND_DROP} element={<DragAndDrop />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
